"use client";

import { useState } from "react";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const generate = async () => {
    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">
        Affilion AI Marketing OS
      </h1>

      <textarea
        className="w-full p-3 bg-slate-800 rounded"
        placeholder="e.g. Create Instagram ad copy for a gym business"
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        className="mt-4 bg-blue-500 px-6 py-3 rounded"
      >
        Generate AI Content
      </button>

      <div className="mt-6 p-4 bg-slate-800 rounded whitespace-pre-wrap">
        {result}
      </div>
    </div>
  );
}