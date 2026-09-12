import { JOURNEY } from "../data/content";

export function JourneyTimeline() {
  return (
    <div>
      {JOURNEY.map((j, i) => {
        const Icon = j.icon;
        const isLast = i === JOURNEY.length - 1;
        return (
          <div key={i} className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 shadow-sm shadow-black/40">
                <Icon size={18} className="text-sky-400" />
              </div>
              {!isLast && (
                <div className="w-px flex-1 min-h-[3rem] bg-zinc-800 my-2" />
              )}
            </div>

            <div className={`flex-1 min-w-0 ${isLast ? "pb-1" : "pb-9"} pt-1.5`}>
              <p className="font-mono text-xs text-amber-400 mb-1.5">
                {j.period}
              </p>
              <h4 className="text-zinc-100 font-medium leading-snug">
                {j.title}
              </h4>
              <p className="text-sm text-zinc-500 mt-0.5 mb-2.5">{j.place}</p>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                {j.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}