"use client";

import React, { useState } from "react";

export function DorvikWorkflowSteps() {
  const [activePrompt, setActivePrompt] = useState(
    "Fix Next.js hydration mismatch on UserDashboard.jsx and resolve PostgreSQL connection pool exhaustion."
  );
  const [isApproved, setIsApproved] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);

  return (
    <section id="workflow" className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-12 relative">
      {/* 3-Square Retro Divider */}
      <div className="w-full h-8 pattern-dot-three mb-14"></div>

      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-block px-3 py-1 bg-purple-900 border border-purple-600 text-xs font-mono text-cyan-300 font-bold mb-3">
          HOW THE AI BUG FIXER WORKS
        </div>
        <h2 className="text-white text-2xl md:text-4xl font-black mb-3">
          Autonomous from bug report to verified Pull Request
        </h2>
        <p className="text-purple-200 text-sm md:text-base font-mono">
          Eliminate hours spent hunting runtime exceptions, memory leaks, and broken dependencies.
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {/* STEP 1 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16">
          <div className="flex flex-row items-start gap-4 max-w-md">
            <span className="bg-purple-500 p-3 md:p-4 rounded-pixel-sm text-white font-black text-xl shrink-0 shadow-md">
              1
            </span>
            <div>
              <h3 className="text-white font-bold text-lg mb-2 font-mono">
                Connect Web App Repo & Error Feed
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed mb-3">
                Select your GitHub/GitLab repository. Dorvik automatically listens to Sentry errors, GitHub issues, or accepts natural language feature prompts.
              </p>
              <p className="text-purple-400 text-xs font-mono">
                Tip: Assign issues with label <span className="text-cyan-300">&quot;dorvik-fix&quot;</span> in GitHub to trigger the agent immediately.
              </p>
            </div>
          </div>

          {/* Step 1 Visual Mockup */}
          <div className="max-w-xl w-full">
            <div className="bg-[#130825] p-5 rounded-pixel-sm border-2 border-purple-800 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-fuchsia-400"></span>
                  <span className="w-2.5 h-2.5 bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 bg-cyan-400"></span>
                </div>
                <span className="text-purple-400 text-[11px]">dorvik-bugfix-pipeline</span>
              </div>

              <div className="flex flex-row gap-3 mb-3">
                <div className="bg-[#09051c] text-purple-100 p-3 basis-2/3 border-b-2 border-purple-700 flex justify-between items-center">
                  <span>acme-corp / web-saas-platform</span>
                  <span className="text-purple-500">▼</span>
                </div>
                <div className="bg-[#09051c] text-cyan-300 p-3 basis-1/3 border-b-2 border-purple-700 flex justify-between items-center">
                  <span>staging-v2</span>
                  <span className="text-purple-500">▼</span>
                </div>
              </div>

              <div className="bg-[#09051c] text-purple-200 p-3.5 border-b-2 border-purple-700 leading-relaxed">
                <span className="text-cyan-400 select-none mr-2">&gt;</span>
                {activePrompt}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-4 pattern-dot-three"></div>

        {/* STEP 2 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16">
          <div className="flex flex-row items-start gap-4 max-w-md">
            <span className="bg-amber-400 p-3 md:p-4 rounded-pixel-sm text-amber-950 font-black text-xl shrink-0 shadow-md">
              2
            </span>
            <div>
              <h3 className="text-white font-bold text-lg mb-2 font-mono">
                AI Agent Reproduces & Plans the Fix
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed mb-3">
                Dorvik clones the repo into an isolated sandbox, parses the AST, and builds a reproduction test. It designs a clean architectural fix without touching production.
              </p>
              <p className="text-purple-400 text-xs font-mono">
                Powered by multi-modal reasoning models (Gemini 3 Pro &amp; Claude 3.7).
              </p>
            </div>
          </div>

          {/* Step 2 Visual Mockup */}
          <div className="max-w-xl w-full flex flex-col gap-4 font-mono text-xs">
            <div className="flex items-start gap-3 w-full">
              <div className="w-10 h-10 bg-purple-900 border border-cyan-400 rounded-pixel-sm p-1 flex items-center justify-center shrink-0">
                <span className="text-cyan-300 font-bold">DV</span>
              </div>
              <div className="p-4 bg-purple-900/90 text-purple-100 border-2 border-purple-700 rounded-pixel-sm w-full">
                <p className="font-bold text-cyan-300 mb-1.5 flex items-center gap-2">
                  <span>Reproduction &amp; Fix Plan Generated:</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-purple-950 text-amber-400 border border-amber-400/40">
                    AST DIAGNOSIS
                  </span>
                </p>
                <p className="text-purple-200 text-xs mb-3">
                  I reproduced the hydration mismatch on line 42 and drafted a client-safe state sync with unit tests for 100% test coverage.
                </p>
                <div className="bg-[#09051c] p-2.5 px-3 border-b-2 border-cyan-400 flex items-center justify-between text-white font-bold">
                  <span>Files: UserDashboard.jsx + 2 test suites</span>
                  <span className="text-cyan-400 text-[10px]">VERIFIED</span>
                </div>
              </div>
            </div>

            {/* User Response Pill */}
            <div className="flex items-center gap-3 self-end mt-1">
              <button
                onClick={() => setIsApproved(!isApproved)}
                className={`px-4 py-2 border-2 rounded-pixel-sm font-bold transition-all cursor-pointer ${
                  isApproved
                    ? "bg-cyan-400 text-cyan-950 border-cyan-300"
                    : "bg-purple-800 text-white border-purple-500 hover:bg-purple-700"
                }`}
              >
                {isApproved ? "✓ Fix Plan Approved" : "Approve & Generate PR →"}
              </button>
              <div className="w-9 h-9 bg-fuchsia-900 border border-fuchsia-400 rounded-pixel-sm flex items-center justify-center text-fuchsia-200 font-bold shrink-0">
                DEV
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-4 pattern-dot-three"></div>

        {/* STEP 3 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16">
          <div className="flex flex-row items-start gap-4 max-w-md">
            <span className="bg-cyan-400 p-3 md:p-4 rounded-pixel-sm text-cyan-950 font-black text-xl shrink-0 shadow-md">
              3
            </span>
            <div>
              <h3 className="text-white font-bold text-lg mb-2 font-mono">
                Inspect Code &amp; Test Diff
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed mb-3">
                Review the clean diff with deletions highlighted in red/fuchsia and new logic in cyan. Check the synthesized automated tests before merging.
              </p>
            </div>
          </div>

          {/* Step 3 Visual Mockup */}
          <div className="max-w-xl w-full">
            <div className="bg-[#09051c] p-4 rounded-pixel-sm border-2 border-purple-800 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-purple-800 text-purple-400 text-[11px]">
                <span>diff --git a/src/components/UserDashboard.jsx</span>
                <span className="text-cyan-400">Jest Test Suite: PASS</span>
              </div>
              <div className="space-y-1">
                <div className="text-purple-600">@@ -4,7 +4,8 @@ function UserDashboard()</div>
                <div className="bg-fuchsia-950/40 text-fuchsia-300 px-2 py-0.5 border-l-2 border-fuchsia-500">
                  - const [token] = useState(localStorage.getItem(&apos;token&apos;));
                </div>
                <div className="bg-cyan-950/40 text-cyan-300 px-2 py-0.5 border-l-2 border-cyan-400 font-bold">
                  + const [token, setToken] = useState(null);
                </div>
                <div className="bg-cyan-950/40 text-cyan-300 px-2 py-0.5 border-l-2 border-cyan-400 font-bold">
                  + useEffect(() =&gt; setToken(localStorage.getItem(&apos;token&apos;)), []);
                </div>
                <div className="text-purple-300 px-2 py-0.5">
                  &nbsp;&nbsp;return &lt;View token=&#123;token&#125; /&gt;;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-4 pattern-dot-three"></div>

        {/* STEP 4 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16">
          <div className="flex flex-row items-start gap-4 max-w-md">
            <span className="bg-fuchsia-400 p-3 md:p-4 rounded-pixel-sm text-fuchsia-950 font-black text-xl shrink-0 shadow-md">
              4
            </span>
            <div>
              <h3 className="text-white font-bold text-lg mb-2 font-mono">
                PR Committed &amp; Verified on GitHub
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed mb-3">
                Dorvik opens a Pull Request with complete reproduction proof, commits signed code, and passes CI/CD pipeline checks automatically.
              </p>
            </div>
          </div>

          {/* Step 4 Visual Mockup */}
          <div className="max-w-xl w-full">
            <div className="bg-[#130825] p-5 rounded-pixel-sm border-2 border-purple-700 shadow-xl flex flex-col gap-4 font-mono">
              <button
                onClick={() => setIsDeployed(true)}
                className={`w-full py-3.5 px-6 rounded-pixel-sm flex items-center justify-center gap-3 font-black text-sm transition-all cursor-pointer ${
                  isDeployed
                    ? "bg-cyan-400 text-cyan-950 border-2 border-cyan-300 shadow-lg"
                    : "bg-[#642cc2] text-white hover:bg-[#784fcf] border-b-4 border-purple-950"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-currentColor"
                  style={{ imageRendering: "pixelated" }}
                >
                  <path
                    fill="currentColor"
                    d="M23 7V5h-1V4h-1V3h-1V2h-1V1h-2V0H7v1H5v1H4v1H3v1H2v1H1v2H0v11h1v2h1v1h1v1h1v1h2v1h4v-3H7v-1h3v-3H8v-1H6v-2H5v-4h1V6h2v1h3V6h2v1h3V6h2v4h1v4h-1v2h-2v1h-2v7h4v-1h2v-1h1v-1h1v-1h1v-2h1V7z"
                  />
                </svg>
                <span>
                  {isDeployed ? "PULL REQUEST #892 CREATED & ALL CHECKS PASSED" : "Publish Branch & Create Pull Request"}
                </span>
              </button>

              {isDeployed && (
                <div className="text-[11px] text-cyan-300 bg-cyan-950/40 p-2.5 border border-cyan-400 text-center animate-pulse">
                  ✓ PR #892 opened on GitHub • 3 Unit tests passed • 0 Hydration errors remaining
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
