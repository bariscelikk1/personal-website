"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "mounting memory card…",
  "loading b.celik.exe…",
  "decompressing chrome…",
  "calibrating sparkles…",
  "welcome ٩(◕‿◕)۶",
];

/** Full-screen boot sequence shown once on load, ported 1:1 from index.html. */
export function Boot() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [towerHeights, setTowerHeights] = useState<number[] | null>(null);

  // Random per-tower heights are client-only so the server and first client
  // render match; they fill in a frame after mount.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- deliberate: randomized only on the client, once, to avoid a hydration mismatch
    setTowerHeights(Array.from({ length: 14 }, () => 40 + Math.random() * 45));
  }, []);

  useEffect(() => {
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 16 + 7;
      if (p > 100) p = 100;
      setProgress(p);
      if (p >= 100) {
        clearInterval(iv);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => setHidden(true), 900);
        }, 520);
      }
    }, 230);
    return () => clearInterval(iv);
  }, []);

  if (hidden) return null;

  const msg = MESSAGES[Math.min(MESSAGES.length - 1, Math.floor(progress / 22))];

  return (
    <div id="boot" className={done ? "done" : ""} aria-hidden="true">
      <div className="boot-towers" id="towers">
        {towerHeights?.map((h, i) => (
          <i key={i} style={{ left: `${4 + i * 7}%`, animationDelay: `${i * 0.14}s`, height: `${h}%` }} />
        ))}
      </div>
      <div className="boot-word">SYSTEM</div>
      <div className="boot-sub">{msg}</div>
      <div className="boot-bar">
        <b style={{ width: `${progress}%` }} />
      </div>
      <div className="boot-kao">٩(◕‿◕)۶ memory card OK</div>
    </div>
  );
}
