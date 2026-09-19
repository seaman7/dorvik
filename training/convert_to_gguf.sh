#!/usr/bin/env bash
# =============================================================================
# Dorvik BugFixer — GGUF Converter
# Converts merged HuggingFace weights → quantized GGUF for Ollama / llama.cpp
#
# Usage:
#   bash training/convert_to_gguf.sh
#   bash training/convert_to_gguf.sh --quant Q5_K_M  # higher quality, bigger
#
# Requirements:
#   - git clone https://github.com/ggerganov/llama.cpp.git (done automatically)
#   - Python 3.10+ with pip available
# =============================================================================

set -euo pipefail

MERGED_DIR="${MERGED_DIR:-training/output/dorvik-bugfixer-merged}"
OUTPUT_DIR="${OUTPUT_DIR:-training/output}"
QUANT="${1:-Q4_K_M}"   # Default Q4_K_M = best quality/size tradeoff
LLAMA_CPP_DIR="./llama.cpp"

echo "======================================================"
echo "  Dorvik BugFixer — GGUF Conversion"
echo "  Source:  $MERGED_DIR"
echo "  Output:  $OUTPUT_DIR/dorvik-bugfixer-$QUANT.gguf"
echo "  Quant:   $QUANT"
echo "======================================================"

# ── Step 1: Clone llama.cpp if not present ──────────────────────────────────
if [ ! -d "$LLAMA_CPP_DIR" ]; then
    echo ""
    echo "⬇️   Cloning llama.cpp …"
    git clone https://github.com/ggerganov/llama.cpp.git "$LLAMA_CPP_DIR" --depth 1
fi

# ── Step 2: Build llama.cpp quantize binary ──────────────────────────────────
if [ ! -f "$LLAMA_CPP_DIR/build/bin/quantize" ]; then
    echo ""
    echo "🔨  Building llama.cpp quantize binary…"
    cmake "$LLAMA_CPP_DIR" -B "$LLAMA_CPP_DIR/build" -DLLAMA_CUBLAS=OFF 2>/dev/null || \
    cmake "$LLAMA_CPP_DIR" -B "$LLAMA_CPP_DIR/build"
    cmake --build "$LLAMA_CPP_DIR/build" --config Release --target quantize -j"$(nproc)"
fi

# ── Step 3: Install conversion requirements ──────────────────────────────────
echo ""
echo "📦  Installing conversion requirements…"
pip install -q gguf sentencepiece transformers torch

# ── Step 4: Convert HF weights → F16 GGUF ───────────────────────────────────
echo ""
echo "🔄  Converting HuggingFace weights to F16 GGUF…"
F16_GGUF="$OUTPUT_DIR/dorvik-bugfixer-F16.gguf"
python3 "$LLAMA_CPP_DIR/convert_hf_to_gguf.py" \
    "$MERGED_DIR" \
    --outfile "$F16_GGUF" \
    --outtype f16
echo "✅  F16 GGUF: $F16_GGUF"

# ── Step 5: Quantize to target format ────────────────────────────────────────
echo ""
echo "⚡  Quantizing to $QUANT…"
QUANT_GGUF="$OUTPUT_DIR/dorvik-bugfixer-$QUANT.gguf"
"$LLAMA_CPP_DIR/build/bin/quantize" "$F16_GGUF" "$QUANT_GGUF" "$QUANT"
echo "✅  Quantized GGUF: $QUANT_GGUF"

# ── Step 6: Update Modelfile with correct path ───────────────────────────────
MODELFILE="training/Modelfile"
QUANT_GGUF_RELATIVE="${QUANT_GGUF#./}"
sed -i "s|^FROM .*|FROM ./$QUANT_GGUF_RELATIVE|" "$MODELFILE"
echo "✅  Updated Modelfile FROM path → ./$QUANT_GGUF_RELATIVE"

# ── Done ──────────────────────────────────────────────────────────────────────
echo ""
echo "======================================================"
echo "  DONE! Next steps:"
echo ""
echo "  1. Create Ollama model:"
echo "     ollama create dorvik-bugfixer -f training/Modelfile"
echo ""
echo "  2. Test it:"
echo "     ollama run dorvik-bugfixer"
echo "     > Fix this Node.js bug: ..."
echo ""
echo "  3. Start the web app (it auto-connects):"
echo "     npm run dev"
echo "======================================================"
