export function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

export const DEVICE_ID_KEY = "portfolio-device-id";
export const USERNAME_KEY = "portfolio-chat-username";

export function getOrCreateDeviceId() {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = `dev-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
}

export function formatDateLabel(date) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.round((today - target) / 86400000);

  if (diffDays === 0) return "Hari Ini";
  if (diffDays === 1) return "Kemarin";
  return target.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: target.getFullYear() !== today.getFullYear() ? "numeric" : undefined,
  });
}

export function groupByDate(messages) {
  const groups = [];
  let currentLabel = null;
  let currentItems = [];

  for (const msg of messages) {
    const label = formatDateLabel(msg.date);
    if (label !== currentLabel) {
      if (currentItems.length) groups.push({ label: currentLabel, items: currentItems });
      currentLabel = label;
      currentItems = [msg];
    } else {
      currentItems.push(msg);
    }
  }
  if (currentItems.length) groups.push({ label: currentLabel, items: currentItems });
  return groups;
}