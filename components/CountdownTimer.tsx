"use client";
import { useEffect, useState } from "react";

function getNextFridayMidnight() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 5=Fri
  const daysUntilFriday = (5 - day + 7) % 7 || 7;
  const friday = new Date(now);
  friday.setDate(now.getDate() + daysUntilFriday);
  friday.setHours(23, 59, 59, 0);
  return friday;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const deadline = getNextFridayMidnight();

    const tick = () => {
      const diff = deadline.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ d, h, m, s });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-2">
      {[
        { val: timeLeft.d, label: "j" },
        { val: timeLeft.h, label: "h" },
        { val: timeLeft.m, label: "m" },
        { val: timeLeft.s, label: "s" },
      ].map(({ val, label }, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="countdown-digit">{fmt(val)}</div>
            <span className="text-xs text-gray-400 mt-0.5">{label}</span>
          </div>
          {i < 3 && <span className="text-xl font-black text-brand-red mb-3">:</span>}
        </div>
      ))}
    </div>
  );
}
