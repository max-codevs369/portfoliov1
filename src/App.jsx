import { useState, useRef, useEffect, useMemo } from "react";
import { Instagram, Linkedin, Mail, MapPin, Download, Github } from "lucide-react";

import { NAV_ITEMS, SOCIALS, SKILLS, PROJECTS, SOCIALS as SOC } from "./data/content";
import { downloadCV } from "./utils/downloadCV";
import { useScrollSpy } from "./hooks/useScrollSpy";

import { Navbar } from "./components/Navbar";
import { TypingTerminal } from "./components/TypingTerminal";
import { BarcodeIDCard } from "./components/BarcodeIDCard";
import { TechMarquee } from "./components/TechMarquee";
import { JourneyTimeline } from "./components/JourneyTimeline";
import { SkillBar } from "./components/SkillBar";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectModal } from "./components/ProjectModal";
import { ContactForm } from "./components/ContactForm";
import { GlobalChat } from "./components/GlobalChat";

export default function App() {
  const navIds = useMemo(() => NAV_ITEMS.map((n) => n.id), []);
  const spyActive = useScrollSpy(navIds);

  const [manualActive, setManualActive] = useState(null);
  const manualTimeoutRef = useRef(null);
  const active = manualActive ?? spyActive;

  const [selectedProject, setSelectedProject] = useState(null);

  const goTo = (id) => {
    setManualActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    window.clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = window.setTimeout(() => {
      setManualActive(null);
    }, 900);
  };

  useEffect(() => {
    return () => window.clearTimeout(manualTimeoutRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        * { font-family: 'Sora', system-ui, sans-serif; }
        .font-mono, code, pre { font-family: 'JetBrains Mono', ui-monospace, monospace; }

        @keyframes caretBlink { 0%, 45% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .caret-blink { animation: caretBlink 1s steps(1) infinite; }

        @keyframes scanMove { 0% { top: -10%; } 100% { top: 105%; } }
        .scan-line { animation: scanMove 2.6s ease-in-out infinite alternate; }

        @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-track { animation: marqueeScroll 26s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        .barcode-bg {
          background-image: repeating-linear-gradient(
            90deg, #000 0px, #000 2px, transparent 2px, transparent 5px
          );
        }

        .hero-glow {
          background:
            radial-gradient(60% 50% at 20% 20%, rgba(56,189,248,0.10), transparent 60%),
            radial-gradient(45% 40% at 85% 30%, rgba(251,191,36,0.08), transparent 60%);
        }

        html { scroll-behavior: smooth; }
        ::selection { background: rgba(56, 189, 248, 0.3); }

        @media (prefers-reduced-motion: reduce) {
          .caret-blink, .scan-line, .marquee-track { animation: none !important; }
        }
      `}</style>

      <Navbar active={active} onNavigate={goTo} />

      {/* ---------------- HOME ---------------- */}
      <section
        id="home"
        className="scroll-mt-16 min-h-screen flex items-center pt-24 pb-16 px-5 sm:px-8 relative overflow-hidden hero-glow"
      >
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">
          <div>
            <p className="font-mono text-sm text-sky-400 mb-4">
              Halo, perkenalkan
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-5">
              Gani Gustio
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-md">
              Full Stack Developer yang membangun aplikasi web secara utuh dari logika di server hingga tampilan yang nyaman digunakan.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => goTo("projects")}
                className="rounded-md bg-sky-500 text-zinc-950 text-sm font-medium px-5 py-3 hover:bg-sky-400 transition-colors"
              >
                Lihat Projects
              </button>
              <button
                onClick={() => goTo("contact")}
                className="rounded-md border border-zinc-700 text-zinc-200 text-sm font-medium px-5 py-3 hover:border-zinc-500 transition-colors"
              >
                Hubungi Saya
              </button>
              <button
                onClick={downloadCV}
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 text-zinc-200 text-sm font-medium px-5 py-3 hover:border-amber-400 hover:text-amber-300 transition-colors"
              >
                <Download size={15} /> Unduh CV
              </button>
            </div>
          </div>
          <BarcodeIDCard />
        </div>
      </section>

      <TechMarquee />

      {/* ---------------- ABOUT ---------------- */}
      <section
        id="about"
        className="scroll-mt-16 py-20 px-5 sm:px-8 border-b border-zinc-900"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-sm text-sky-400 mb-3">Tentang Saya</p>
            <h2 className="text-3xl font-semibold mb-5">
              Kode adalah cara saya bercerita
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Saya Gani Gustio, seorang Full Stack Developer yang terbiasa menangani proyek secara menyeluruh. Mulai dari merancang struktur data, membangun API yang andal, hingga menyusun antarmuka yang nyaman digunakan.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Bagi saya, kode yang rapi, performa yang optimal, dan pengalaman pengguna yang nyaman bukan sekadar target, melainkan standar kerja. Di luar coding, saya senang mengeksplorasi tools baru dan mendalami dokumentasi teknis.
            </p>

            <TypingTerminal
              lines={["I'm Gani Gustio", "I'm a Full Stack Developer"]}
            />
          </div>

          <div>
            <p className="font-mono text-sm text-amber-400 mb-3">Perjalanan</p>
            <h3 className="text-xl font-semibold mb-6">
              Pendidikan &amp; Pengalaman
            </h3>
            <JourneyTimeline />
          </div>
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section
        id="skills"
        className="scroll-mt-16 py-20 px-5 sm:px-8 border-b border-zinc-900"
      >
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-sm text-sky-400 mb-3">Kemampuan</p>
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {SKILLS.map((s, i) => (
              <SkillBar key={s.name} name={s.name} percent={s.percent} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section
        id="projects"
        className="scroll-mt-16 py-20 px-5 sm:px-8 border-b border-zinc-900"
      >
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm text-sky-400 mb-3">Karya</p>
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section
        id="contact"
        className="scroll-mt-16 py-20 px-5 sm:px-8 border-b border-zinc-900"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-sm text-sky-400 mb-3">Kontak</p>
            <h2 className="text-3xl font-semibold mb-5">Mari terhubung</h2>
            <p className="text-zinc-400 leading-relaxed mb-6 max-w-sm">
              Punya proyek atau sekadar ingin ngobrol soal teknologi? Kirim
              pesan atau sapa saya lewat sosial media.
            </p>

            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-6">
              <MapPin size={15} className="text-sky-400" />
              Padang, Sumatera Barat, Indonesia
            </div>

            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-6">
              <Mail size={15} className="text-sky-400" />
              {SOCIALS.email}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2.5 text-sm text-zinc-300 hover:border-zinc-600 transition-colors"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2.5 text-sm text-zinc-300 hover:border-zinc-600 transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2.5 text-sm text-zinc-300 hover:border-zinc-600 transition-colors"
              >
                <Github size={16} /> Github
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ---------------- CHAT ---------------- */}
      <section
        id="chat"
        className="scroll-mt-16 py-20 px-5 sm:px-8 border-b border-zinc-900"
      >
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-sm text-sky-400 mb-3">Diskusi</p>
          <h2 className="text-3xl font-semibold mb-3">Chat Global</h2>
          <p className="text-zinc-400 text-sm mb-8 max-w-lg">
            Ruang obrolan terbuka untuk semua pengunjung website ini. Pesan
            tersimpan otomatis dan tidak akan hilang meski halaman di-refresh.
          </p>
          <GlobalChat />
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-10 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-zinc-500">
            <span className="text-sky-400">&lt;</span>
            Gani.Gustio
            <span className="text-sky-400">/&gt;</span>
            <span className="ml-2">© {new Date().getFullYear()}</span>
          </p>
          <div className="flex items-center gap-4 text-zinc-500">
            <a href={SOC.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-zinc-300">
              <Instagram size={18} />
            </a>
            <a href={SOC.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-zinc-300">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${SOC.email}`} aria-label="Email" className="hover:text-zinc-300">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}