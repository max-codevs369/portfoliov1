import { useState, useRef, useEffect } from "react";

export function SkillBar({ name, percent, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-zinc-300">{name}</span>
        <span className="font-mono text-xs text-sky-400">
          {visible ? percent : 0}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-zinc-900 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-amber-400 transition-all duration-[1200ms] ease-out"
          style={{ width: visible ? `${percent}%` : "0%" }}
        />
      </div>
    </div>
  );
}