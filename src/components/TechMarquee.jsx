import { useState } from "react";
import { TECH_STACK } from "../data/content";

function TechBadge({ tech }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 shrink-0">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white p-1.5 overflow-hidden">
        {!failed ? (
          <img
            src={`https://cdn.simpleicons.org/${tech.slug}`}
            alt={tech.name}
            className="h-full w-full object-contain"
            loading="lazy"
            draggable={false}
            onError={() => setFailed(true)}
          />
        ) : (
          <span
            className="flex h-full w-full items-center justify-center rounded-sm font-mono text-[10px] font-semibold text-white"
            style={{ backgroundColor: tech.color }}
          >
            {tech.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </span>
      <span className="text-sm text-zinc-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

export function TechMarquee() {
  const loop = [...TECH_STACK, ...TECH_STACK];
  return (
    <div className="border-y border-zinc-900 bg-zinc-950/60 py-6 overflow-hidden">
      <div className="marquee-track flex items-center gap-3 w-max">
        {loop.map((t, i) => (
          <TechBadge key={`${t.name}-${i}`} tech={t} />
        ))}
      </div>
    </div>
  );
}