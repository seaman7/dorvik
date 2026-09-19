/**
 * Dorvik BugFixer — Agent Health Check API
 * GET /api/agent/health
 *
 * Probes local inference daemons (Ollama + vLLM) and returns their live status.
 * The /agent-builder UI uses this to show the live model indicator.
 */

const OLLAMA_BASE = process.env.OLLAMA_URL || 'http://localhost:11434';
const VLLM_BASE   = process.env.VLLM_URL   || 'http://localhost:8000';

async function probeOllama() {
  const start = Date.now();
  try {
    const res = await fetch(`${OLLAMA_BASE}/api/tags`, {
      signal: AbortSignal.timeout(2000),
    });
    if (!res.ok) return { status: 'error', latencyMs: Date.now() - start };
    const data = await res.json();
    const models = (data.models || []).map((m) => m.name);
    const hasDorvik = models.some((m) => m.includes('dorvik'));
    return {
      status: 'online',
      latencyMs: Date.now() - start,
      models,
      hasDorvik,
    };
  } catch {
    return { status: 'offline', latencyMs: Date.now() - start };
  }
}

async function probeVllm() {
  const start = Date.now();
  try {
    const res = await fetch(`${VLLM_BASE}/v1/models`, {
      signal: AbortSignal.timeout(2000),
    });
    if (!res.ok) return { status: 'error', latencyMs: Date.now() - start };
    const data = await res.json();
    const models = (data.data || []).map((m) => m.id);
    const hasDorvik = models.some((m) => m.includes('dorvik'));
    return {
      status: 'online',
      latencyMs: Date.now() - start,
      models,
      hasDorvik,
    };
  } catch {
    return { status: 'offline', latencyMs: Date.now() - start };
  }
}

export async function GET() {
  const [ollama, vllm] = await Promise.all([probeOllama(), probeVllm()]);

  const anyOnline = ollama.status === 'online' || vllm.status === 'online';
  const hasDorvik = ollama.hasDorvik || vllm.hasDorvik;

  return Response.json({
    timestamp: new Date().toISOString(),
    overallStatus: hasDorvik ? 'ready' : anyOnline ? 'online-no-model' : 'offline',
    inference: { ollama, vllm },
    setup: hasDorvik
      ? null
      : {
          message: 'No Dorvik model found. Start local inference to enable AI mode.',
          steps: [
            'python3 training/dataset_curator.py',
            'python3 training/train_qlora.py --dry-run',
            'python3 training/train_qlora.py --merge_and_save',
            'bash training/convert_to_gguf.sh',
            'ollama create dorvik-bugfixer -f training/Modelfile',
            'ollama serve',
          ],
        },
  });
}
