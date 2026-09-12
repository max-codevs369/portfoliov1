import { useState, useEffect } from "react";

export function TypingTerminal({ lines }) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIndex % lines.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 65);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 35);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setLineIndex((i) => (i + 1) % lines.length);
      }, 350);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, lineIndex, lines]);

  return (
    <div className="rounded-lg border border-zinc-800 bg-black shadow-2xl shadow-black/60 overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-950 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-xs text-zinc-500">gani@portfolio: ~</span>
      </div>
      <div className="p-5 min-h-[120px]">
        <p className="text-zinc-500">
          <span className="text-sky-400">gani@dev</span>
          <span className="text-zinc-600">:</span>
          <span className="text-amber-400">~</span>
          <span className="text-zinc-600">$</span> whoami
        </p>
        <p className="mt-2 text-zinc-100">
          {text}
          <span className="inline-block w-[2px] h-[1em] bg-sky-400 ml-0.5 align-middle caret-blink" />
        </p>
      </div>
    </div>
  );
}