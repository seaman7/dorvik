/**
 * Dorvik BugFixer — Real AI Fix API
 * POST /api/agent/fix
 *
 * Pipeline:
 *   1. Try Ollama (dorvik-bugfixer model) → stream response
 *   2. Try vLLM (dorvik-bugfixer model)  → stream response
 *   3. Fallback → deterministic AST engine (always available)
 *
 * Request body:
 *   { code: string, error: string, language?: string }
 *
 * Response:
 *   { source: "ollama"|"vllm"|"ast", fix: string, diff: string, test: string, latencyMs: number }
 */

import { analyzeCodeSnippet as analyzeBug }          from '@/lib/agent/astAnalyzer.js';
import { generatePatchAndTest as generatePatch }  from '@/lib/agent/patchEngine.js';

const OLLAMA_BASE = process.env.OLLAMA_URL || 'http://localhost:11434';
const VLLM_BASE   = process.env.VLLM_URL   || 'http://localhost:8000';
const DORVIK_MODEL = process.env.DORVIK_MODEL || 'dorvik-bugfixer';

const SYSTEM_PROMPT = `You are Dorvik BugFixer, an autonomous software engineering agent.
Given broken code and stack traces, produce:
1. Root cause analysis (2-3 sentences)
2. Exact unified diff patch (--- a/file +++ b/file format)
3. Regression test that would have caught this bug

Format your response EXACTLY as:
### Root Cause
[explanation]

### Patch
\`\`\`diff
[unified diff]
\`\`\`

### Regression Test
\`\`\`[language]
[test code]
\`\`\``;


// ── Ollama Chat Completion ─────────────────────────────────────────────────────
async function callOllama(code, error, language) {
  const userMsg = buildPrompt(code, error, language);
  const res = await fetch(`${OLLAMA_BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: DORVIK_MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user',   content: userMsg },
      ],
      stream: false,
      options: { temperature: 0.1, top_p: 0.9, num_ctx: 4096 },
    }),
    signal: AbortSignal.timeout(60_000),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Ollama error ${res.status}: ${txt.slice(0, 200)}`);
  }

  const data = await res.json();
  return data.message?.content || '';
}


// ── vLLM Chat Completion ──────────────────────────────────────────────────────
async function callVllm(code, error, language) {
  const userMsg = buildPrompt(code, error, language);
  const res = await fetch(`${VLLM_BASE}/v1/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: DORVIK_MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user',   content: userMsg },
      ],
      temperature: 0.1,
      top_p: 0.9,
      max_tokens: 2048,
    }),
    signal: AbortSignal.timeout(60_000),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`vLLM error ${res.status}: ${txt.slice(0, 200)}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}


// ── AST Deterministic Fallback ────────────────────────────────────────────────
function callAstEngine(code, error, language) {
  const analysis = analyzeBug(code, error);
  const patch    = generatePatch(code, analysis);
  return {
    rootCause: analysis.rootCause || 'Static analysis identified structural issue in code.',
    diff:      patch.diff         || '--- No auto-patch generated\n+++ Manual review required',
    test:      patch.test         || '// Add regression test here',
  };
}


// ── Prompt Builder ────────────────────────────────────────────────────────────
function buildPrompt(code, error, language = 'javascript') {
  return (
    `Fix this ${language} bug:\n\n` +
    `\`\`\`${language}\n${code}\n\`\`\`\n\n` +
    `Error:\n${error}`
  );
}


// ── Response Parser ────────────────────────────────────────────────────────────
function parseModelResponse(text) {
  const rootCauseMatch = text.match(/### Root Cause\s*([\s\S]*?)(?=###|$)/);
  const diffMatch      = text.match(/```diff\s*([\s\S]*?)```/);
  const testMatch      = text.match(/### Regression Test\s*```[\w]*\s*([\s\S]*?)```/);

  return {
    rootCause: rootCauseMatch?.[1]?.trim() || text.slice(0, 300),
    diff:      diffMatch?.[1]?.trim()      || '',
    test:      testMatch?.[1]?.trim()      || '',
  };
}


// ── Main Route Handler ─────────────────────────────────────────────────────────
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { code, error, language = 'javascript' } = body;
  if (!code || !error) {
    return Response.json(
      { error: 'Both "code" and "error" fields are required' },
      { status: 400 }
    );
  }

  const start = Date.now();

  // ── 1. Try Ollama ────────────────────────────────────────────────────────
  try {
    const text   = await callOllama(code, error, language);
    const parsed = parseModelResponse(text);
    return Response.json({
      source:     'ollama',
      model:      DORVIK_MODEL,
      latencyMs:  Date.now() - start,
      rootCause:  parsed.rootCause,
      diff:       parsed.diff,
      test:       parsed.test,
      rawResponse: text,
    });
  } catch (ollamaErr) {
    console.warn('[/api/agent/fix] Ollama unavailable:', ollamaErr.message);
  }

  // ── 2. Try vLLM ─────────────────────────────────────────────────────────
  try {
    const text   = await callVllm(code, error, language);
    const parsed = parseModelResponse(text);
    return Response.json({
      source:     'vllm',
      model:      DORVIK_MODEL,
      latencyMs:  Date.now() - start,
      rootCause:  parsed.rootCause,
      diff:       parsed.diff,
      test:       parsed.test,
      rawResponse: text,
    });
  } catch (vllmErr) {
    console.warn('[/api/agent/fix] vLLM unavailable:', vllmErr.message);
  }

  // ── 3. AST Deterministic Fallback ────────────────────────────────────────
  const ast = callAstEngine(code, error, language);
  return Response.json({
    source:     'ast',
    model:      'dorvik-ast-engine-v1',
    latencyMs:  Date.now() - start,
    rootCause:  ast.rootCause,
    diff:       ast.diff,
    test:       ast.test,
    fallbackReason: 'Local model not running. Start Ollama or vLLM to enable AI mode.',
    setupSteps: [
      'python3 training/dataset_curator.py',
      'python3 training/train_qlora.py --dry-run',
      'python3 training/train_qlora.py --merge_and_save',
      'bash training/convert_to_gguf.sh',
      'ollama create dorvik-bugfixer -f training/Modelfile',
      'ollama serve',
    ],
  });
}
