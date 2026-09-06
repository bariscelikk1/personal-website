"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = ["✦", "✧", "⋆", "★", "✩"];
const COLORS = ["#fff", "#ff9ff3", "#7df9ff", "#c7ea46"];

type Spark = { id: number; x: number; y: number; glyph: string; color: string };

/** Trailing sparkle-glyph cursor effect. Skips touch devices and reduced motion. */
export function SparkleCursor() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const lastRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    if (matchMedia("(pointer:coarse)").matches) return;

    function onMove(e: MouseEvent) {
      const now = Date.now();
      if (now - lastRef.current < 95) return;
      lastRef.current = now;
      const id = idRef.current++;
      const spark: Spark = {
        id,
        x: e.clientX + (Math.random() * 16 - 8),
        y: e.clientY + (Math.random() * 16 - 8),
        glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
      setSparks((prev) => [...prev, spark]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id));
      }, 900);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {sparks.map((s) => (
        <span
          key={s.id}
          className="spark"
          style={{ left: s.x, top: s.y, color: s.color }}
        >
          {s.glyph}
        </span>
      ))}
    </>
  );
}
