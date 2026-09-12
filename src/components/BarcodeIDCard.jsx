import { useState, useRef } from "react";
import { clamp } from "../utils/helpers";

export function BarcodeIDCard() {
  const [drag, setDrag] = useState({ x: 0, y: 0, active: false });
  const startRef = useRef({ x: 0, y: 0 });
  const originRef = useRef({ x: 0, y: 0 });

  const MAX_X = 44;
  const MAX_Y = 78;

  const handlePointerDown = (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    startRef.current = { x: e.clientX, y: e.clientY };
    originRef.current = { x: drag.x, y: drag.y };
    setDrag((d) => ({ ...d, active: true }));
  };

  const handlePointerMove = (e) => {
    if (!drag.active) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    setDrag({
      x: clamp(originRef.current.x + dx, -MAX_X, MAX_X),
      y: clamp(originRef.current.y + dy, 0, MAX_Y),
      active: true,
    });
  };

  const endDrag = (e) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    setDrag({ x: 0, y: 0, active: false });
  };

  const stripes = Array.from({ length: 40 });

  const anchorX = 100;
  const anchorY = 2;
  const cardX = 100 + drag.x * 0.55;
  const cardY = 60 + drag.y * 0.6;
  const sag = 14 + drag.y * 0.32 + Math.abs(drag.x) * 0.18;
  const ctrlX = (anchorX + cardX) / 2;
  const ctrlY = (anchorY + cardY) / 2 + sag;
  const ropeD = `M ${anchorX} ${anchorY} Q ${ctrlX} ${ctrlY} ${cardX} ${cardY}`;

  return (
    <div className="relative mx-auto select-none" style={{ width: "260px" }}>
      <div className="relative z-10 mx-auto h-4 w-9 rounded-t-sm border border-zinc-700 bg-zinc-800" />

      <svg
        viewBox="0 0 200 90"
        className="relative z-0 -mt-1 w-full"
        style={{ height: "60px" }}
        preserveAspectRatio="none"
      >
        <path
          d={ropeD}
          fill="none"
          stroke="#3f4a5a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d={ropeD}
          fill="none"
          stroke="#5b6a80"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`relative -mt-2 w-64 h-80 mx-auto cursor-grab active:cursor-grabbing touch-none ${
          !drag.active ? "transition-transform duration-500" : ""
        }`}
        style={{
          transform: `translate(${drag.x}px, ${drag.y}px) rotate(${drag.x * 0.06}deg)`,
          transitionTimingFunction: !drag.active
            ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
            : undefined,
        }}
      >
        <div className="absolute -inset-3 rounded-2xl border border-zinc-800" />
        <div className="relative h-full w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black">
            <img
              src="/profile/ganigustio.png"
              alt="Gani Gustio"
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>

          <div className="absolute inset-0 flex items-stretch opacity-90">
            {stripes.map((_, i) => {
              const w = i % 7 === 0 ? 3 : i % 3 === 0 ? 2 : 1;
              const on = i % 2 === 0 || i % 5 === 0;
              return (
                <div
                  key={i}
                  style={{
                    width: `${w}px`,
                    backgroundColor: on ? "rgba(5,7,10,0.94)" : "transparent",
                  }}
                  className="h-full"
                />
              );
            })}
          </div>

          <div className="absolute left-0 right-0 h-8 bg-gradient-to-b from-amber-400/0 via-amber-300/25 to-amber-400/0 scan-line" />

          <div className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-sm py-2 text-center border-t border-zinc-800">
            <span className="font-mono text-[10px] tracking-[0.2em] text-sky-300">
              ID · GANI-GUSTIO · FULLSTACK
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center font-mono text-[11px] text-zinc-600">
        tarik kartunya
      </p>
    </div>
  );
}