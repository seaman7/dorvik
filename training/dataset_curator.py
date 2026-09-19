#!/usr/bin/env python3
"""
DORVIK Dataset Curator & Tokenizer
===================================
Transforms GitHub Commit Diffs & SWE Bug Reports into ChatML instruction
fine-tuning format. Outputs: training/data/train.jsonl, training/data/val.jsonl

Usage:
    python3 training/dataset_curator.py
    python3 training/dataset_curator.py --git-repo /path/to/repo  # extract from real repo
    python3 training/dataset_curator.py --out training/data --max-len 2048
"""

import argparse
import json
import os
import subprocess
import sys
from pathlib import Path

SYSTEM_PROMPT = (
    "You are Dorvik BugFixer, an autonomous software engineering agent. "
    "Given broken code and stack traces, you: (1) identify the root cause, "
    "(2) produce the exact unified diff patch, (3) write a regression test. "
    "Never call external APIs. Never hallucinate variable names. Output only "
    "valid code that compiles and passes all tests."
)

# ─── Built-in SWE Bug-Fix Training Pairs ────────────────────────────────────

SEED_SAMPLES = [
    # ── React 19 SSR Hydration Mismatch ─────────────────────────────────────
    {
        "user": (
            "Fix this React 19 SSR hydration mismatch in Next.js 15:\n\n"
            "```jsx\n"
            "// src/components/Header.jsx\n"
            "import { useState } from 'react';\n\n"
            "export function Header({ user }) {\n"
            "  const [theme] = useState(localStorage.getItem('theme') || 'dark');\n"
            "  const [ts]    = useState(new Date().toLocaleTimeString());\n"
            "  return <div>{theme} — {ts} — {user.name}</div>;\n"
            "}\n"
            "```\n\n"
            "Error: Hydration failed because the initial UI does not match what was rendered on the server.\n"
            "Stack: Error at checkIfWorkInProgress (react-dom.development.js:3477)"
        ),
        "assistant": (
            "### Root Cause\n"
            "`localStorage` is undefined on the server and `new Date()` produces different values "
            "between server and client render, causing React 19's strict hydration to throw.\n\n"
            "### Patch\n"
            "```diff\n"
            "--- a/src/components/Header.jsx\n"
            "+++ b/src/components/Header.jsx\n"
            "@@ -1,7 +1,17 @@\n"
            "-import { useState } from 'react';\n"
            "+import { useState, useEffect } from 'react';\n"
            " \n"
            " export function Header({ user }) {\n"
            "-  const [theme] = useState(localStorage.getItem('theme') || 'dark');\n"
            "-  const [ts]    = useState(new Date().toLocaleTimeString());\n"
            "-  return <div>{theme} — {ts} — {user.name}</div>;\n"
            "+  const [mounted, setMounted] = useState(false);\n"
            "+  const [theme,   setTheme]   = useState('dark');\n"
            "+  const [ts,      setTs]      = useState('');\n"
            "+\n"
            "+  useEffect(() => {\n"
            "+    setTheme(localStorage.getItem('theme') ?? 'dark');\n"
            "+    setTs(new Date().toLocaleTimeString());\n"
            "+    setMounted(true);\n"
            "+  }, []);\n"
            "+\n"
            "+  if (!mounted) return <div aria-busy=\"true\" className=\"animate-pulse\">Loading…</div>;\n"
            "+  return <div>{theme} — {ts} — {user.name}</div>;\n"
            " }\n"
            "```\n\n"
            "### Regression Test (Vitest + RTL)\n"
            "```jsx\n"
            "import { describe, it, expect, vi } from 'vitest';\n"
            "import { render } from '@testing-library/react';\n"
            "import { Header } from './Header';\n\n"
            "vi.stubGlobal('localStorage', { getItem: vi.fn(() => 'light') });\n\n"
            "describe('Header SSR guard', () => {\n"
            "  it('renders loading state before hydration without throwing', () => {\n"
            "    const { container } = render(<Header user={{ name: 'Ada' }} />);\n"
            "    expect(container).toBeDefined();\n"
            "  });\n"
            "});\n"
            "```"
        ),
    },

    # ── Node.js DB Connection Pool Starvation ────────────────────────────────
    {
        "user": (
            "Fix PostgreSQL connection pool exhaustion in this Node.js webhook handler:\n\n"
            "```javascript\n"
            "// server/routes/webhook.js\n"
            "import { dbPool } from '../db.js';\n\n"
            "export async function handleWebhook(req, res) {\n"
            "  const client = await dbPool.connect();\n"
            "  await client.query('UPDATE users SET status = $1 WHERE id = $2',\n"
            "    [req.body.status, req.body.userId]);\n"
            "  client.release();\n"
            "  res.status(200).json({ ok: true });\n"
            "}\n"
            "```\n\n"
            "Error: Error: timeout expired waiting for an idle client\n"
            "Reproduced after ~200 concurrent requests under siege load-test."
        ),
        "assistant": (
            "### Root Cause\n"
            "When `client.query` throws (e.g., constraint violation, timeout), `client.release()` is never called. "
            "Each uncaught exception permanently leaks one connection from the pool, eventually exhausting it.\n\n"
            "### Patch\n"
            "```diff\n"
            "--- a/server/routes/webhook.js\n"
            "+++ b/server/routes/webhook.js\n"
            "@@ -1,9 +1,17 @@\n"
            " import { dbPool } from '../db.js';\n"
            " \n"
            " export async function handleWebhook(req, res) {\n"
            "   const client = await dbPool.connect();\n"
            "-  await client.query('UPDATE users SET status = $1 WHERE id = $2',\n"
            "-    [req.body.status, req.body.userId]);\n"
            "-  client.release();\n"
            "-  res.status(200).json({ ok: true });\n"
            "+  try {\n"
            "+    await client.query('BEGIN');\n"
            "+    await client.query(\n"
            "+      'UPDATE users SET status = $1 WHERE id = $2',\n"
            "+      [req.body.status, req.body.userId]\n"
            "+    );\n"
            "+    await client.query('COMMIT');\n"
            "+    return res.status(200).json({ ok: true });\n"
            "+  } catch (err) {\n"
            "+    await client.query('ROLLBACK');\n"
            "+    console.error('[webhook] DB error, rolled back:', err.message);\n"
            "+    return res.status(500).json({ error: 'DB write failed' });\n"
            "+  } finally {\n"
            "+    client.release();  // ALWAYS release, even on error\n"
            "+  }\n"
            " }\n"
            "```\n\n"
            "### Regression Test (Jest)\n"
            "```javascript\n"
            "import { handleWebhook } from './webhook.js';\n"
            "import { dbPool } from '../db.js';\n\n"
            "it('releases client even when query throws', async () => {\n"
            "  const mockRelease = jest.fn();\n"
            "  const mockQuery   = jest.fn()\n"
            "    .mockResolvedValueOnce({}) // BEGIN\n"
            "    .mockRejectedValueOnce(new Error('constraint')) // UPDATE fails\n"
            "    .mockResolvedValueOnce({}); // ROLLBACK\n"
            "  jest.spyOn(dbPool, 'connect').mockResolvedValue({\n"
            "    query: mockQuery, release: mockRelease\n"
            "  });\n"
            "  const req = { body: { status: 'active', userId: 1 } };\n"
            "  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };\n"
            "  await handleWebhook(req, res);\n"
            "  expect(mockRelease).toHaveBeenCalledTimes(1);\n"
            "  expect(res.status).toHaveBeenCalledWith(500);\n"
            "});\n"
            "```"
        ),
    },

    # ── Python FastAPI Async Race Condition ──────────────────────────────────
    {
        "user": (
            "Fix async race condition causing duplicate order processing:\n\n"
            "```python\n"
            "# api/routes/orders.py\n"
            "import asyncio\n"
            "from fastapi import APIRouter\n"
            "from db import get_order, mark_processed, charge_card\n\n"
            "router = APIRouter()\n\n"
            "@router.post('/orders/{order_id}/process')\n"
            "async def process_order(order_id: str):\n"
            "    order = await get_order(order_id)\n"
            "    if order['status'] == 'pending':\n"
            "        await charge_card(order['amount'])\n"
            "        await mark_processed(order_id)\n"
            "        return {'charged': order['amount']}\n"
            "    return {'skip': True}\n"
            "```\n\n"
            "Error: Customers charged 2-3× per order under concurrent POST requests.\n"
            "Reproduced: k6 load test with 50 VUs hitting same order_id simultaneously."
        ),
        "assistant": (
            "### Root Cause\n"
            "Classic TOCTOU (Time-of-Check-Time-of-Use) race: two concurrent requests both read `status='pending'` "
            "before either writes `mark_processed`. Both pass the `if` check and charge the card.\n\n"
            "### Patch — Add Optimistic Lock via Atomic DB Update\n"
            "```diff\n"
            "--- a/api/routes/orders.py\n"
            "+++ b/api/routes/orders.py\n"
            "@@ -1,14 +1,22 @@\n"
            " import asyncio\n"
            " from fastapi import APIRouter\n"
            "-from db import get_order, mark_processed, charge_card\n"
            "+from fastapi import HTTPException\n"
            "+from db import get_order, try_claim_order, charge_card, rollback_order\n"
            " \n"
            " router = APIRouter()\n"
            " \n"
            " @router.post('/orders/{order_id}/process')\n"
            " async def process_order(order_id: str):\n"
            "-    order = await get_order(order_id)\n"
            "-    if order['status'] == 'pending':\n"
            "-        await charge_card(order['amount'])\n"
            "-        await mark_processed(order_id)\n"
            "-        return {'charged': order['amount']}\n"
            "-    return {'skip': True}\n"
            "+    # Atomic: UPDATE orders SET status='processing'\n"
            "+    # WHERE id=$1 AND status='pending' RETURNING amount\n"
            "+    # Only ONE concurrent request will get a row back.\n"
            "+    claimed = await try_claim_order(order_id)\n"
            "+    if not claimed:\n"
            "+        return {'skip': True}  # already processing or processed\n"
            "+    try:\n"
            "+        await charge_card(claimed['amount'])\n"
            "+        await mark_processed(order_id)  # SET status='done'\n"
            "+        return {'charged': claimed['amount']}\n"
            "+    except Exception as exc:\n"
            "+        await rollback_order(order_id)  # SET status='pending'\n"
            "+        raise HTTPException(status_code=502, detail=str(exc))\n"
            "```\n\n"
            "### SQL for `try_claim_order`\n"
            "```sql\n"
            "-- db/queries.sql\n"
            "UPDATE orders\n"
            "   SET status = 'processing', claimed_at = NOW()\n"
            " WHERE id = $1 AND status = 'pending'\n"
            "RETURNING id, amount;\n"
            "```\n\n"
            "### Regression Test (pytest-asyncio)\n"
            "```python\n"
            "import asyncio, pytest\n"
            "from unittest.mock import AsyncMock, patch\n"
            "from api.routes.orders import process_order\n\n"
            "@pytest.mark.asyncio\n"
            "async def test_concurrent_requests_charge_once():\n"
            "    call_count = 0\n"
            "    async def fake_try_claim(order_id):\n"
            "        nonlocal call_count\n"
            "        call_count += 1\n"
            "        return {'amount': 99.0} if call_count == 1 else None\n"
            "    with patch('api.routes.orders.try_claim_order', fake_try_claim), \\\n"
            "         patch('api.routes.orders.charge_card', AsyncMock()) as mock_charge, \\\n"
            "         patch('api.routes.orders.mark_processed', AsyncMock()):\n"
            "        results = await asyncio.gather(\n"
            "            process_order('ord_1'),\n"
            "            process_order('ord_1'),\n"
            "        )\n"
            "    assert mock_charge.call_count == 1, 'Card must be charged exactly once'\n"
            "    assert {'skip': True} in results\n"
            "```"
        ),
    },

    # ── Go Goroutine Channel Deadlock ────────────────────────────────────────
    {
        "user": (
            "Diagnose and fix this Go channel deadlock:\n\n"
            "```go\n"
            "// worker/pipeline.go\n"
            "package worker\n\n"
            "func ProcessBatch(items []string) []string {\n"
            "    results := make(chan string)\n"
            "    for _, item := range items {\n"
            "        go func(v string) {\n"
            "            results <- process(v)\n"
            "        }(item)\n"
            "    }\n"
            "    out := []string{}\n"
            "    for r := range results {\n"
            "        out = append(out, r)\n"
            "    }\n"
            "    return out\n"
            "}\n"
            "```\n\n"
            "Error: fatal error: all goroutines are asleep - deadlock!\n"
            "goroutine 1 [chan receive]"
        ),
        "assistant": (
            "### Root Cause\n"
            "The `results` channel is never closed, so `for r := range results` blocks forever after all goroutines "
            "finish sending. Also, the unbuffered channel forces each goroutine to wait for the receiver — "
            "with many goroutines this creates head-of-line blocking.\n\n"
            "### Patch\n"
            "```diff\n"
            "--- a/worker/pipeline.go\n"
            "+++ b/worker/pipeline.go\n"
            "@@ -1,14 +1,19 @@\n"
            " package worker\n"
            " \n"
            "+import \"sync\"\n"
            "+\n"
            " func ProcessBatch(items []string) []string {\n"
            "-    results := make(chan string)\n"
            "+    results := make(chan string, len(items)) // buffered: no blocking senders\n"
            "+    var wg sync.WaitGroup\n"
            "     for _, item := range items {\n"
            "+        wg.Add(1)\n"
            "         go func(v string) {\n"
            "+            defer wg.Done()\n"
            "             results <- process(v)\n"
            "         }(item)\n"
            "     }\n"
            "+    // Close channel once ALL goroutines are done so range can terminate\n"
            "+    go func() { wg.Wait(); close(results) }()\n"
            "     out := []string{}\n"
            "     for r := range results {\n"
            "         out = append(out, r)\n"
            "     }\n"
            "     return out\n"
            " }\n"
            "```\n\n"
            "### Regression Test (Go testing)\n"
            "```go\n"
            "package worker_test\n\n"
            "import (\n"
            "    \"testing\"\n"
            "    \"github.com/dorvik/worker\"\n"
            ")\n\n"
            "func TestProcessBatch_NoDeadlock(t *testing.T) {\n"
            "    items := []string{\"a\", \"b\", \"c\", \"d\", \"e\"}\n"
            "    done := make(chan struct{})\n"
            "    go func() {\n"
            "        out := worker.ProcessBatch(items)\n"
            "        if len(out) != len(items) {\n"
            "            t.Errorf(\"expected %d results, got %d\", len(items), len(out))\n"
            "        }\n"
            "        close(done)\n"
            "    }()\n"
            "    select {\n"
            "    case <-done: // pass\n"
            "    case <-time.After(5 * time.Second):\n"
            "        t.Fatal(\"deadlock: ProcessBatch did not return within 5s\")\n"
            "    }\n"
            "}\n"
            "```"
        ),
    },

    # ── SQL N+1 Query / Missing Index ─────────────────────────────────────────
    {
        "user": (
            "Fix N+1 query pattern causing 12-second API response for /dashboard:\n\n"
            "```javascript\n"
            "// api/dashboard.js\n"
            "export async function getDashboard(userId) {\n"
            "  const projects = await db.query(\n"
            "    'SELECT * FROM projects WHERE owner_id = $1', [userId]\n"
            "  );\n"
            "  for (const project of projects.rows) {\n"
            "    const tasks = await db.query(\n"
            "      'SELECT * FROM tasks WHERE project_id = $1', [project.id]\n"
            "    );\n"
            "    project.tasks = tasks.rows;\n"
            "  }\n"
            "  return projects.rows;\n"
            "}\n"
            "```\n\n"
            "Error: 12-second response under 100 projects. pg_stat_statements shows 101 sequential scans on tasks."
        ),
        "assistant": (
            "### Root Cause\n"
            "For each of N projects there's a separate `SELECT` on `tasks`, producing N+1 round trips. "
            "`tasks.project_id` has no index, causing full-table sequential scans.\n\n"
            "### Patch — Batch JOIN + Missing Index\n"
            "```diff\n"
            "--- a/api/dashboard.js\n"
            "+++ b/api/dashboard.js\n"
            "@@ -1,13 +1,22 @@\n"
            " export async function getDashboard(userId) {\n"
            "-  const projects = await db.query(\n"
            "-    'SELECT * FROM projects WHERE owner_id = $1', [userId]\n"
            "-  );\n"
            "-  for (const project of projects.rows) {\n"
            "-    const tasks = await db.query(\n"
            "-      'SELECT * FROM tasks WHERE project_id = $1', [project.id]\n"
            "-    );\n"
            "-    project.tasks = tasks.rows;\n"
            "-  }\n"
            "-  return projects.rows;\n"
            "+  // Single JOIN: 1 query instead of N+1\n"
            "+  const { rows } = await db.query(`\n"
            "+    SELECT\n"
            "+      p.id          AS project_id,\n"
            "+      p.name        AS project_name,\n"
            "+      p.created_at,\n"
            "+      t.id          AS task_id,\n"
            "+      t.title       AS task_title,\n"
            "+      t.status      AS task_status\n"
            "+    FROM projects p\n"
            "+    LEFT JOIN tasks t ON t.project_id = p.id\n"
            "+    WHERE p.owner_id = $1\n"
            "+    ORDER BY p.id, t.id\n"
            "+  `, [userId]);\n"
            "+\n"
            "+  // Re-shape flat rows into nested structure in JS (O(n), not O(n²))\n"
            "+  const projectMap = new Map();\n"
            "+  for (const row of rows) {\n"
            "+    if (!projectMap.has(row.project_id)) {\n"
            "+      projectMap.set(row.project_id, {\n"
            "+        id: row.project_id, name: row.project_name,\n"
            "+        created_at: row.created_at, tasks: []\n"
            "+      });\n"
            "+    }\n"
            "+    if (row.task_id) {\n"
            "+      projectMap.get(row.project_id).tasks.push({\n"
            "+        id: row.task_id, title: row.task_title, status: row.task_status\n"
            "+      });\n"
            "+    }\n"
            "+  }\n"
            "+  return [...projectMap.values()];\n"
            " }\n"
            "```\n\n"
            "### Missing Index Migration\n"
            "```sql\n"
            "-- migrations/0012_add_tasks_project_id_idx.sql\n"
            "CREATE INDEX CONCURRENTLY idx_tasks_project_id\n"
            "  ON tasks (project_id);\n"
            "-- Expected: seq scan → index scan, ~200ms instead of 12s\n"
            "```\n\n"
            "### Regression Test\n"
            "```javascript\n"
            "import { getDashboard } from './dashboard.js';\n"
            "import { db } from '../db.js';\n\n"
            "jest.spyOn(db, 'query');\n\n"
            "test('getDashboard fires exactly 1 SQL query', async () => {\n"
            "  await getDashboard('user_1');\n"
            "  expect(db.query).toHaveBeenCalledTimes(1);\n"
            "});\n"
            "```"
        ),
    },
]


# ─── Git Diff Extractor ──────────────────────────────────────────────────────

def extract_from_git_repo(repo_path: str, max_commits: int = 50) -> list[dict]:
    """
    Extracts bug-fix commit pairs from a real Git repository.
    Looks for commits with messages containing: fix, bug, patch, resolve, error, crash
    """
    samples = []
    try:
        result = subprocess.run(
            ["git", "log", "--oneline", f"-{max_commits}", "--no-merges"],
            cwd=repo_path, capture_output=True, text=True, check=True
        )
        commits = result.stdout.strip().splitlines()
        keywords = {"fix", "bug", "patch", "resolve", "error", "crash", "revert", "hotfix"}

        for line in commits:
            sha, *msg_parts = line.split(" ", 1)
            msg = msg_parts[0] if msg_parts else ""
            if not any(k in msg.lower() for k in keywords):
                continue
            # Get diff for this commit
            diff_result = subprocess.run(
                ["git", "show", "--unified=3", "--no-color", sha],
                cwd=repo_path, capture_output=True, text=True
            )
            diff_text = diff_result.stdout[:3000]  # cap at 3000 chars
            if not diff_text or "diff --git" not in diff_text:
                continue
            samples.append({
                "user": f"Analyze this bug-fix commit and explain the root cause:\n\nCommit: {msg}\n\n```diff\n{diff_text}\n```",
                "assistant": (
                    f"### Root Cause\nCommit `{sha}` — \"{msg}\"\n\n"
                    "Analyze the diff above: identify what was broken, why it was broken, "
                    "and confirm the patch is correct. Write a regression test to prevent regression.\n\n"
                    "### Patch Already Applied\n"
                    f"```diff\n{diff_text}\n```"
                )
            })
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"[warn] Git extraction failed: {e}", file=sys.stderr)
    return samples


# ─── Dataset Builder ─────────────────────────────────────────────────────────

def build_dataset(output_dir: str = "training/data", git_repo: str = None, max_token_len: int = 2048):
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    train_file = os.path.join(output_dir, "train.jsonl")
    val_file   = os.path.join(output_dir, "val.jsonl")

    samples = list(SEED_SAMPLES)

    if git_repo:
        print(f"[Dorvik Curator] Extracting bug-fix commits from {git_repo} …")
        git_samples = extract_from_git_repo(git_repo)
        samples.extend(git_samples)
        print(f"[Dorvik Curator] +{len(git_samples)} samples from git repo")

    formatted = []
    skipped   = 0
    for s in samples:
        combined_len = len(s["user"]) + len(s["assistant"])
        if combined_len > max_token_len * 4:  # rough chars-per-token estimate
            skipped += 1
            continue
        formatted.append({
            "messages": [
                {"role": "system",    "content": SYSTEM_PROMPT},
                {"role": "user",      "content": s["user"]},
                {"role": "assistant", "content": s["assistant"]},
            ]
        })

    if skipped:
        print(f"[Dorvik Curator] Skipped {skipped} samples exceeding max_token_len={max_token_len}")

    # 90/10 train/val split
    split = max(1, int(len(formatted) * 0.9))
    train_samples = formatted[:split]
    val_samples   = formatted[split:]

    with open(train_file, "w", encoding="utf-8") as f:
        for r in train_samples:
            f.write(json.dumps(r, ensure_ascii=False) + "\n")

    with open(val_file, "w", encoding="utf-8") as f:
        for r in val_samples:
            f.write(json.dumps(r, ensure_ascii=False) + "\n")

    print(f"[Dorvik Curator] ✓ {len(train_samples)} train  →  {train_file}")
    print(f"[Dorvik Curator] ✓ {len(val_samples)} val    →  {val_file}")
    print(f"[Dorvik Curator] Total samples: {len(formatted)} | Languages: JS/TS, Python, Go, SQL")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Dorvik BugFixer Dataset Curator")
    parser.add_argument("--out",      default="training/data", help="Output directory for JSONL files")
    parser.add_argument("--git-repo", default=None,            help="Path to a git repo to extract bug-fix commits from")
    parser.add_argument("--max-len",  type=int, default=2048,  help="Max token length per sample (approx)")
    args = parser.parse_args()
    build_dataset(output_dir=args.out, git_repo=args.git_repo, max_token_len=args.max_len)
