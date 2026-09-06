"use client";

import { useEffect, useState } from "react";

/**
 * localStorage-backed visitor counter. Renders nothing until mounted so the
 * server-rendered markup (which can't know localStorage) never mismatches
 * the client.
 */
export function VisitorCounter() {
  const [digits, setDigits] = useState<string[] | null>(null);

  useEffect(() => {
    const base = 13370;
    const add = Math.floor(Math.random() * 40);
    const key = "bcvisits";
    let n = +(localStorage.getItem(key) || 0);
    n = n ? n + 1 : base + add;
    localStorage.setItem(key, String(n));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads/writes localStorage, which only exists on the client
    setDigits(String(n).padStart(6, "0").split(""));
  }, []);

  return (
    <div className="counter" id="counter">
      {digits?.map((d, i) => <b key={i}>{d}</b>)}
    </div>
  );
}
