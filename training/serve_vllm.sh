#!/usr/bin/env bash
# =============================================================================
# Dorvik BugFixer — vLLM Inference Server
# Serves your fine-tuned model as an OpenAI-compatible API
# on http://localhost:8000/v1
#
# The Dorvik web app (/api/agent/fix) will auto-detect and use this server.
#
# Usage:
#   bash training/serve_vllm.sh                          # merged model
#   bash training/serve_vllm.sh --lora                   # base + LoRA adapter
#   MODEL_PATH=./training/output/dorvik-bugfixer-merged \
#     bash training/serve_vllm.sh
#
# Requirements:
#   pip install vllm  (CUDA 12.1 required)
# =============================================================================

set -euo pipefail

# ── Configuration ─────────────────────────────────────────────────────────────
MODEL_PATH="${MODEL_PATH:-./training/output/dorvik-bugfixer-merged}"
LORA_PATH="${LORA_PATH:-./training/output}"
PORT="${PORT:-8000}"
HOST="${HOST:-0.0.0.0}"
GPU_UTIL="${GPU_UTIL:-0.85}"       # 85% VRAM utilization
MAX_MODEL_LEN="${MAX_MODEL_LEN:-4096}"
USE_LORA="${1:-}"                  # Pass --lora to use LoRA adapter on top of base

echo "======================================================"
echo "  Dorvik BugFixer — vLLM Inference Server"
echo "  Model:  $MODEL_PATH"
echo "  API:    http://localhost:$PORT/v1"
echo "  GPU utilization: $GPU_UTIL"
echo "======================================================"

# ── Check vllm installed ──────────────────────────────────────────────────────
if ! python3 -c "import vllm" 2>/dev/null; then
    echo ""
    echo "❌  vLLM not installed. Install with:"
    echo "    pip install vllm"
    echo ""
    echo "    Or use Ollama instead (no GPU required for smaller models):"
    echo "    ollama create dorvik-bugfixer -f training/Modelfile"
    echo "    ollama serve"
    exit 1
fi

# ── Serve with or without LoRA adapter ───────────────────────────────────────
if [[ "$USE_LORA" == "--lora" ]]; then
    echo ""
    echo "🔌  Serving base model + LoRA adapter…"
    echo "    Base:  $MODEL_PATH"
    echo "    LoRA:  $LORA_PATH"
    python3 -m vllm.entrypoints.openai.api_server \
        --model "$MODEL_PATH" \
        --enable-lora \
        --lora-modules dorvik-bugfixer="$LORA_PATH" \
        --host "$HOST" \
        --port "$PORT" \
        --gpu-memory-utilization "$GPU_UTIL" \
        --max-model-len "$MAX_MODEL_LEN" \
        --trust-remote-code \
        --served-model-name "dorvik-bugfixer"
else
    echo ""
    echo "🚀  Serving merged model…"
    python3 -m vllm.entrypoints.openai.api_server \
        --model "$MODEL_PATH" \
        --host "$HOST" \
        --port "$PORT" \
        --gpu-memory-utilization "$GPU_UTIL" \
        --max-model-len "$MAX_MODEL_LEN" \
        --trust-remote-code \
        --served-model-name "dorvik-bugfixer"
fi
