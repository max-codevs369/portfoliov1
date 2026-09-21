import { GraduationCap, Briefcase } from "lucide-react";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "chat", label: "Chat" },
];

export const SOCIALS = {
  instagram: "https://instagram.com/ganzeventeen",
  linkedin: "https://www.linkedin.com/in/gani-gustioa75a393b6",
  email: "ghani170807@gmail.com",
  github: "https://github.com/max-codevs369",
};

export const EMAILJS = {
  serviceId: "",
  templateId: "",
  publicKey: "",
};

export const SKILLS = [
  { name: "JavaScript", percent: 85 },
  { name: "TypeScript", percent: 80 },
  { name: "React.js", percent: 85 },
  { name: "Next.js", percent: 78 },
  { name: "Node.js", percent: 85 },
  { name: "Laravel", percent: 95 },
  { name: "PHP", percent: 95 },
  { name: "Java", percent: 85 },
  { name: "C#", percent: 80 },
  { name: "Dart", percent: 83 },
  { name: "C", percent: 90},
  { name: "C++", percent: 80},
  { name: "Go", percent: 80 },
  { name: "MySQL", percent: 95 },
  { name: "Redis", percent: 80 },
  { name: "Tailwind CSS", percent: 92 },
  { name: "Bootstrap CSS", percent: 90},
  { name: "Git", percent: 95 },
];

export const TECH_STACK = [
  { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "#000000" },
  { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
  { name: "Laravel", slug: "laravel", color: "#FF2D20" },
  { name: "PHP", slug: "php", color: "#777BB4" },
  { name: "Dart", slug: "dart", color: "#0175C2" },
  { name: "C++", slug: "cplusplus", color: "#00599C" },
  { name: "Go", slug: "go", color: "#00ADD8" },
  { name: "MySQL", slug: "mysql", color: "#4479A1" },
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "Redis", slug: "redis", color: "#DC382D" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "#38BDF8" },
  { name: "Bootstrap", slug: "bootstrap", color: "#7952B3" },
  { name: "Git", slug: "git", color: "#F05032" },
  { name: "GitHub", slug: "github", color: "#181717" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Postman", slug: "postman", color: "#FF6C37" },
];

export const JOURNEY = [
  {
    period: "2023 — 2026",
    title: "SMK Negeri 1 Lintau Buo",
    place: "Rekayasa Perangkat Lunak",
    desc: "Menempuh pendidikan kejuruan dengan fokus pada dasar pemrograman, struktur data, basis data, dan logika algoritma sebagai fondasi menjadi developer.",
    icon: GraduationCap,
  },
  {
    period: "Jan — Apr 2026",
    title: "Backend Developer (Magang)",
    place: "Appskep Indonesia",
    desc: "Magang sebagai backend developer, membangun sebuah website CV builder, mulai dari merancang struktur basis data hingga membangun logika aplikasinya, serta berkolaborasi dengan tim untuk merilis fitur produk.",
    icon: Briefcase,
  },
  {
    period: "2026 — Sekarang",
    title: "Politeknik Negeri Padang",
    place: "D3 Manajemen Informatika, Teknologi Informasi",
    desc: "Melanjutkan pendidikan di jenjang diploma dengan fokus pada manajemen sistem informasi, pengembangan perangkat lunak, dan penerapan teknologi informasi dalam dunia kerja.",
    icon: GraduationCap,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "GenZ Chat — PWA Messaging App",
    summary: "Aplikasi chat real-time berbasis PWA, terinspirasi dari WhatsApp.",
    description: "Progressive Web App untuk perpesanan real-time antar pengguna terdaftar, dengan pengalaman dan alur penggunaan yang terinspirasi dari WhatsApp. Mendukung chat teks secara langsung, namun difokuskan murni pada fitur perpesanan.",
    tech: ["Laravel", "PHP", "MySQL", "PWA", "WebSocket"],
    accent: "#8B5CF6",
    github: "#",
    demo: "https://genz-chat.alwaysdata.net",
  },
  {
    id: 2,
    title: "Task Flow — Kanban App",
    summary: "Aplikasi manajemen tugas dengan papan kanban drag-and-drop.",
    description:
      "Aplikasi produktivitas tim berbasis papan kanban. Pengguna bisa membuat board, memindahkan kartu tugas antar kolom, serta berkolaborasi dengan anggota tim lain melalui pembaruan status secara langsung.",
    tech: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    accent: "#FBBF24",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "DevBlog CMS",
    summary: "Sistem manajemen konten untuk blog teknis pribadi.",
    description:
      "CMS ringan khusus untuk menulis artikel teknis dengan dukungan markdown, syntax highlighting untuk cuplikan kode, serta sistem tag dan pencarian artikel.",
    tech: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    accent: "#818CF8",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Inventory API — Go",
    summary: "REST API manajemen inventaris berkinerja tinggi.",
    description:
      "Layanan backend untuk mencatat stok barang, mutasi gudang, dan laporan inventaris. Dibangun dengan Go untuk performa tinggi dan konkurensi yang efisien, terhubung ke PostgreSQL.",
    tech: ["Go", "PostgreSQL", "Docker", "REST API"],
    accent: "#34D399",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "RealTime Chat Rooms",
    summary: "Aplikasi obrolan multi-ruangan dengan koneksi live.",
    description:
      "Aplikasi chat dengan banyak ruangan diskusi, indikator pengguna online, dan riwayat pesan tersimpan. Menjadi dasar dari fitur chat global yang ada pada portofolio ini.",
    tech: ["React", "Node.js", "WebSocket", "Redis"],
    accent: "#FB7185",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Company Profile — Laravel",
    summary: "Website company profile dengan panel admin CMS.",
    description:
      "Website company profile dinamis lengkap dengan panel admin untuk mengelola berita, layanan, dan galeri, dibangun di atas Laravel dengan Blade dan MySQL.",
    tech: ["Laravel", "MySQL", "Blade", "Tailwind"],
    accent: "#F97316",
    github: "#",
    demo: "#",
  },
  {
    id: 7,
    title: "Resumate — AI CV Builder",
    summary: "Platform pembuat CV bergaya Canva dengan analisis skor ATS berbasis AI.",
    description:
      "Platform pembuat CV yang dinamis, dilengkapi dashboard untuk mengelola dan menyusun CV secara fleksibel — mirip Canva, namun difokuskan khusus untuk pembuatan CV. Tersedia skema free dan premium, di mana pengguna premium mendapat analisis skor seberapa ATS-friendly (Applicant Tracking System) CV mereka menggunakan AI, membantu meningkatkan peluang CV lolos seleksi otomatis sebelum sampai ke perusahaan.",
    tech: ["Laravel", "PHP", "MySQL", "REST API"],
    accent: "#F59E0B",
    github: "#",
    demo: "#",
  },
  {
    id: 8,
    title: "FinTrack Money - Pengelola Keuangan",
    summary: "Aplikasi pengelolaan keuangan pribadi dengan pencatatan otomatis.",
    description:
      "Aplikasi untuk mengelola keuangan pribadi, mencatat pemasukan dan pengeluaran secara terstruktur, serta menyediakan fitur cetak laporan keuangan. Dibangun dengan arsitektur terpisah antara frontend dan backend untuk performa yang optimal, memungkinkan pengguna memantau kondisi finansial mereka secara ringkas dan mudah dipahami.",
    tech: ["React", "Go", "Redis"],
    accent: "#10B981",
    image: "/projects/fintrack-money.png",
    github: "#",
    demo: "#",
  },
  {
    id: 9,
    title: "WA Chatbot — Auto Reply Assistant",
    summary: "Bot WhatsApp yang membalas pesan secara otomatis sesuai konfigurasi.",
    description:
      "Bot WhatsApp untuk membalas pesan masuk secara otomatis berdasarkan aturan dan skenario yang telah dikonfigurasi sebelumnya. Terhubung langsung ke WhatsApp melalui Baileys tanpa bergantung pada WhatsApp Business API resmi, sehingga lebih ringan dan fleksibel untuk digunakan. Cocok untuk keperluan customer service, FAQ otomatis, atau pengelolaan pesan pribadi tanpa perlu membalas secara manual satu per satu.",
    tech: ["Next.js", "Node.js", "Baileys"],
    accent: "#22C55E",
    github: "#",
    demo: "#",
  },
];

export const WHATSAPP_NUMBER = "6285363364853";
