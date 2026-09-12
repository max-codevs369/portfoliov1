import { useState } from "react";
import { Send } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/content";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    const text = `Halo Gani, saya ${form.name}${
      form.email ? ` (${form.email})` : ""
    }.\n\n${form.message}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs text-zinc-500 mb-1.5 block">Nama</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Nama kamu"
          className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-sky-500"
        />
      </div>
      <div>
        <label className="text-xs text-zinc-500 mb-1.5 block">
          Email <span className="text-zinc-700">(opsional)</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="kamu@email.com"
          className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-sky-500"
        />
      </div>
      <div>
        <label className="text-xs text-zinc-500 mb-1.5 block">Pesan</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tulis pesan kamu..."
          rows={4}
          className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-sky-500 resize-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-emerald-500 text-zinc-950 text-sm font-medium px-5 py-2.5 hover:bg-emerald-400 transition-colors"
      >
        Kirim via WhatsApp <Send size={14} />
      </button>

      <p className="text-xs text-zinc-600">
        Tombol ini akan membuka WhatsApp dengan pesan yang sudah terisi otomatis ke nomor pribadi saya.
      </p>
    </form>
  );
}