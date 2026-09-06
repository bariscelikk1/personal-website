"use client";

import { useState } from "react";
import { memoryCardSkills } from "@/content/site";
import { MemoryCardIcon } from "@/components/logos/MemoryCardIcon";

export function MemoryCard() {
  const [i, setI] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [flick, setFlick] = useState(false);
  const [barVisible, setBarVisible] = useState(false);

  function load() {
    const next = (i + 1) % memoryCardSkills.length;
    setI(next);
    setLoading(true);
    setBarVisible(false);
    setFlick(false);
    requestAnimationFrame(() => setFlick(true));
    setTimeout(() => {
      setLoading(false);
      requestAnimationFrame(() => setBarVisible(true));
    }, 380);
  }

  const s = i >= 0 ? memoryCardSkills[i] : null;

  return (
    <div className="mcard-zone reveal in">
      <div className="mcard-side">
        <button
          type="button"
          className="mcard"
          id="mcard"
          aria-label="load a skill"
          onClick={load}
        >
          <MemoryCardIcon />
        </button>
        <div className="mcard-cap">▸ click to load save</div>
      </div>
      <div className="mcard-screen">
        <div className="mcs-head">MEMORY CARD (8MB) · SLOT 1</div>
        <div className={`mcs-body${flick ? " mcs-flick" : ""}`} id="mcsBody">
          {!s && <div className="mcs-idle">▸ insert memory card to view craft data…</div>}
          {s && loading && <div className="mcs-cat">loading save…</div>}
          {s && !loading && (
            <>
              <div className="mcs-cat">
                {s.category} · save {i + 1}/{memoryCardSkills.length}
              </div>
              <div className="mcs-name">{s.name}</div>
              <div className="mcs-blurb">{s.blurb}</div>
              <div className="mcs-bar">
                <b style={{ width: barVisible ? `${s.level}%` : 0 }} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
