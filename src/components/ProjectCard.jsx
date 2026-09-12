import { Code2, ChevronRight } from "lucide-react";

export function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group text-left rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
    >
      <div
        className="h-36 relative flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.accent}22, #05070A)`,
        }}
      >
        <Code2
          className="w-10 h-10 transition-transform group-hover:scale-110"
          style={{ color: project.accent }}
          strokeWidth={1.4}
        />
        <div className="absolute inset-0 opacity-20 barcode-bg" />
      </div>  
      <div className="p-5">
        <h3 className="text-zinc-100 font-medium mb-1.5">{project.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-3">
          {project.summary}
        </p>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-sky-400">
          Lihat detail <ChevronRight size={14} />
        </span>
      </div>
    </button>
  );
}