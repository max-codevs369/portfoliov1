import { useEffect } from "react";
import { Code2, X, ExternalLink, Github } from "lucide-react";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl"
      >
        <div
          className="h-32 flex items-center justify-center relative"
          style={{
            background: `linear-gradient(135deg, ${project.accent}33, #05070A)`,
          }}
        >
          <Code2 className="w-10 h-10" style={{ color: project.accent }} strokeWidth={1.4} />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-zinc-300 hover:text-white bg-black/30 rounded-full p-1.5"
            aria-label="Tutup"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-zinc-50 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-md border border-zinc-800 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.demo}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-sky-500 text-zinc-950 text-sm font-medium py-2.5 hover:bg-sky-400 transition-colors"
            >
              Live demo <ExternalLink size={14} />
            </a>
            <a
              href={project.github}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md border border-zinc-700 text-zinc-200 text-sm font-medium py-2.5 hover:border-zinc-500 transition-colors"
            >
              <Github size={14} /> Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}