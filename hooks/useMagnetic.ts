"use client";

import { useEffect, useRef } from "react";

/** Nudges an element toward the cursor on hover; no-ops on touch devices. */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof matchMedia !== "undefined" && matchMedia("(pointer:coarse)").matches) return;

    function onMove(e: MouseEvent) {
      const r = el!.getBoundingClientRect();
      el!.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${
        (e.clientY - r.top - r.height / 2) * 0.28
      }px)`;
    }
    function onLeave() {
      el!.style.transform = "";
    }
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
}
