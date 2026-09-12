import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { NAV_ITEMS } from "../data/content";
import { downloadCV } from "../utils/downloadCV";

export function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-zinc-800 bg-black/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="font-mono text-sm sm:text-base text-zinc-100 flex items-center gap-1"
        >
          <span className="text-sky-400">&lt;</span>
          Gani<span className="text-sky-400">.</span>Gustio
          <span className="text-sky-400">/&gt;</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                active === item.id
                  ? "text-zinc-50 bg-zinc-900"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute left-3.5 right-3.5 -bottom-[1px] h-[2px] bg-sky-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={downloadCV}
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 px-3.5 py-2 text-sm font-medium text-zinc-200 hover:border-sky-500 hover:text-sky-300 transition-colors"
          >
            <Download size={14} /> CV
          </button>
        </div>

        <button
          className="md:hidden text-zinc-200 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Buka menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black/95 px-5 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-left px-2 py-2.5 rounded-md text-sm font-medium ${
                active === item.id
                  ? "bg-zinc-900 text-sky-300"
                  : "text-zinc-400"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              downloadCV();
            }}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md border border-zinc-700 px-3.5 py-2.5 text-sm font-medium text-zinc-200"
          >
            <Download size={14} /> Unduh CV
          </button>
        </div>
      )}
    </header>
  );
}