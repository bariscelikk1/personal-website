"use client";

import { useEffect, useRef, useState } from "react";

/** Cubic-eased count-up from 0 to `end`, starting once `start` flips true. */
export function useCountUp(end: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;
    let raf = 0;
    let t0: number | null = null;
    function step(ts: number) {
      if (t0 === null) t0 = ts;
      const k = Math.min(1, (ts - t0) / duration);
      const v = Math.floor((1 - Math.pow(1 - k, 3)) * end);
      setValue(v);
      if (k < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);

  return value;
}
