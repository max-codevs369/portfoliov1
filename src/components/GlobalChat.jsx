import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { MessageCircle, Send } from "lucide-react";
import { getOrCreateDeviceId, formatDateLabel, groupByDate, USERNAME_KEY } from "../utils/helpers";

export function GlobalChat() {
  const [deviceId] = useState(getOrCreateDeviceId);
  const [username, setUsername] = useState("");
  const [nameConfirmed, setNameConfirmed] = useState(false);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem(USERNAME_KEY);
    if (saved) {
      setUsername(saved);
      setNameConfirmed(true);
    }
  }, []);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((doc) => {
          const data = doc.data();
          const date =
            data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date();
          return { id: doc.id, ...data, date };
        });
        setMessages(list);
        setLoading(false);
      },
      () => setLoading(false)
    );
    return () => unsub();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const confirmName = () => {
    const name = username.trim();
    if (!name) return;
    setNameConfirmed(true);
    localStorage.setItem(USERNAME_KEY, name);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft("");

    try {
      await addDoc(collection(db, "messages"), {
        text,
        name: username.trim() || "Anonim",
        deviceId,
        createdAt: serverTimestamp(),
      });
    } catch {
      // gagal kirim
    }
  };

  const grouped = groupByDate(messages);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-3.5">
        <MessageCircle size={16} className="text-sky-400" />
        <span className="text-sm font-medium text-zinc-200">Chat Global</span>
        <span className="ml-auto text-[11px] text-zinc-500 font-mono hidden sm:inline">
          realtime &middot; tersimpan permanen
        </span>
      </div>

      {!nameConfirmed ? (
        <div className="p-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan nama panggilanmu"
            className="flex-1 rounded-md bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-sky-500"
            onKeyDown={(e) => e.key === "Enter" && confirmName()}
          />
          <button
            onClick={confirmName}
            className="rounded-md bg-sky-500 text-zinc-950 text-sm font-medium px-5 py-2.5 hover:bg-sky-400 transition-colors"
          >
            Masuk ke chat
          </button>
        </div>
      ) : (
        <>
          <div
            className="h-96 overflow-y-auto px-4 py-4 space-y-1"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          >
            {loading && <p className="text-sm text-zinc-500 text-center">Memuat percakapan...</p>}
            {!loading && messages.length === 0 && (
              <p className="text-sm text-zinc-500 text-center">
                Belum ada pesan. Jadilah yang pertama menyapa!
              </p>
            )}

            {grouped.map((group) => (
              <div key={group.label}>
                <div className="flex justify-center my-3">
                  <span className="text-[11px] font-medium text-zinc-400 bg-zinc-800/80 px-3 py-1 rounded-full">
                    {group.label}
                  </span>
                </div>

                {group.items.map((m) => {
                  const isMine = m.deviceId === deviceId;
                  return (
                    <div key={m.id} className={`flex mb-1.5 ${isMine ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[75%] rounded-2xl px-3.5 py-2 ${
                          isMine
                            ? "bg-emerald-600 text-white rounded-br-sm"
                            : "bg-zinc-800 text-zinc-100 rounded-bl-sm"
                        }`}
                      >
                        {!isMine && (
                          <p className="text-xs font-semibold text-sky-300 mb-0.5">{m.name}</p>
                        )}
                        <p className="text-sm break-words whitespace-pre-wrap">{m.text}</p>
                        <p
                          className={`text-[10px] mt-1 text-right ${
                            isMine ? "text-emerald-100/70" : "text-zinc-500"
                          }`}
                        >
                          {m.date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-zinc-800 p-3">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Tulis pesan..."
              className="flex-1 rounded-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              className="rounded-full bg-emerald-500 text-zinc-950 p-2.5 hover:bg-emerald-400 transition-colors"
              aria-label="Kirim"
            >
              <Send size={16} />
            </button>
          </form>
        </>
      )}
    </div>
  );
}