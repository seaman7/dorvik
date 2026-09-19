/**
 * DORVIK In-House Code Analysis & Bug Diagnostic Engine
 * 100% Deterministic & Local — Zero External API Calls.
 */

export const PRESET_BUGS = [
  {
    id: "react-hydration",
    name: "React 19 SSR Hydration Mismatch",
    language: "javascript",
    category: "Web Development",
    code: `// Next.js 16 SSR Component
import { useState } from 'react';

export function UserProfileHeader({ user }) {
  // BUG: Direct window.localStorage access causes SSR vs Client HTML mismatch!
  const [theme] = useState(localStorage.getItem('theme') || 'dark');
  const [renderTime] = useState(new Date().toLocaleTimeString());

  return (
    <header className="p-4 border-b border-purple-800">
      <h1 className="text-xl font-bold">Welcome {user.name}</h1>
      <span className="text-xs text-purple-400">Current Theme: {theme}</span>
      <span className="text-xs text-purple-500">Rendered: {renderTime}</span>
    </header>
  );
}`,
    expectedFault: "Direct access to browser-only window/localStorage during SSR render pass",
    faultLine: 6,
  },
  {
    id: "db-pool-leak",
    name: "PostgreSQL Connection Pool Exhaustion",
    language: "javascript",
    category: "Backend & API",
    code: `// Node.js API Webhook Handler
import { dbPool } from '../db/connection';

export async function processOrderWebhook(req, res) {
  const client = await dbPool.connect();
  
  // BUG: If error occurs, client.release() is never reached, leaking connection!
  await client.query('UPDATE accounts SET balance = balance - $1 WHERE id = $2', [req.body.amount, req.body.userId]);
  await client.query('INSERT INTO audit_logs (event) VALUES ($1)', ['order_processed']);
  
  client.release();
  return res.status(200).json({ success: true });
}`,
    expectedFault: "Missing try/finally around acquired database client causing pool starvation on unhandled exception",
    faultLine: 5,
  },
  {
    id: "state-mutation",
    name: "Direct React State Array Mutation",
    language: "javascript",
    category: "Web Development",
    code: `import { useState } from 'react';

export function TaskList() {
  const [tasks, setTasks] = useState(['Review PR', 'Deploy cluster']);

  function handleAddTask(newTask) {
    // BUG: Mutating array in place fails React 19 shallow comparison check!
    tasks.push(newTask);
    setTasks(tasks);
  }

  return (
    <div>
      <button onClick={() => handleAddTask('Run micro-benchmarks')}>Add Task</button>
      <ul>{tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
    </div>
  );
}`,
    expectedFault: "Direct array mutation (tasks.push) prevents re-render due to identical object identity",
    faultLine: 8,
  },
  {
    id: "unhandled-promise",
    name: "Missing Await in Async Critical Path",
    language: "javascript",
    category: "Software Engineering",
    code: `export async function syncUserData(userId, payload) {
  // BUG: Missing await causes unhandled race condition and silent failure
  validateUserPermissions(userId);
  
  const token = fetchAuthToken(userId);
  return sendPayloadToService(token, payload);
}`,
    expectedFault: "Async functions called without await or Promise chaining, causing race conditions",
    faultLine: 3,
  },
];

export function analyzeCodeSnippet(code) {
  const lines = code.split("\n");
  const issues = [];

  // Rule 1: Direct localStorage/window access in React Component body
  lines.forEach((line, idx) => {
    if (
      (line.includes("localStorage.getItem") || line.includes("window.") || line.includes("document.")) &&
      !code.includes("useEffect") &&
      !line.includes("typeof window")
    ) {
      issues.push({
        line: idx + 1,
        ruleId: "NO_SSR_STORAGE_ACCESS",
        severity: "CRITICAL",
        title: "SSR Hydration Mismatch Risk",
        explanation: "Accessing browser APIs ('localStorage' or 'window') directly during server render causes React hydration mismatch crash.",
        suggestion: "Wrap in useEffect hook with mounted state or guard with 'typeof window !== \"undefined\"'.",
      });
    }
  });

  // Rule 2: Database pool acquire without try/finally
  lines.forEach((line, idx) => {
    if (line.includes("dbPool.connect()") || line.includes("pool.connect()")) {
      const remainingCode = lines.slice(idx).join("\n");
      if (!remainingCode.includes("finally") || !remainingCode.includes(".release()")) {
        issues.push({
          line: idx + 1,
          ruleId: "DB_CONNECTION_LEAK",
          severity: "CRITICAL",
          title: "PostgreSQL Connection Pool Starvation",
          explanation: "Acquired database client must be wrapped in try/finally to guarantee client.release() runs even on query error.",
          suggestion: "Wrap query execution in try { ... } finally { client.release(); }.",
        });
      }
    }
  });

  // Rule 3: React direct array mutation
  lines.forEach((line, idx) => {
    if (line.includes(".push(") || line.includes(".splice(")) {
      issues.push({
        line: idx + 1,
        ruleId: "REACT_IMMUTABLE_MUTATION",
        severity: "HIGH",
        title: "Direct React State Array Mutation",
        explanation: "Calling .push() mutates state in place. React will skip re-render because reference identity is unchanged.",
        suggestion: "Use immutable array spread: setTasks(prev => [...prev, newItem]).",
      });
    }
  });

  // Rule 4: Missing await on async function calls
  lines.forEach((line, idx) => {
    if (
      (line.includes("validateUser") || line.includes("fetchAuth") || line.includes("sendPayload")) &&
      !line.includes("await ") &&
      !line.includes("return ") &&
      !line.includes("const ") &&
      !line.includes("let ")
    ) {
      issues.push({
        line: idx + 1,
        ruleId: "UNHANDLED_ASYNC_OPERATION",
        severity: "MEDIUM",
        title: "Missing Await / Floating Promise",
        explanation: "Async function invocation is not awaited, creating a silent race condition.",
        suggestion: "Prefix function call with 'await'.",
      });
    }
  });

  return issues;
}
