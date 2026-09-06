"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/site";
import { useCountUp } from "@/hooks/useCountUp";
import { Reveal } from "@/components/Reveal";

function Stat({
  count,
  suffix,
  label,
  start,
  variant,
}: {
  count: number;
  suffix: string;
  label: string;
  start: boolean;
  variant: "chrome" | "holotext";
}) {
  const value = useCountUp(count, start);
  return (
    <div className="stat">
      <b className={variant}>
        {value.toLocaleString()}
        {suffix}
      </b>
      <small>{label}</small>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setStart(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="stats" style={{ paddingTop: 0 }}>
      <div className="wrap" ref={ref}>
        <Reveal>
          <div className="eyebrow">the numbers don&apos;t lie</div>
          <div className="stats">
            {stats.map((s, i) => (
              <Stat
                key={s.label}
                count={s.count}
                suffix={s.suffix}
                label={s.label}
                start={start}
                variant={i % 2 === 0 ? "holotext" : "chrome"}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
