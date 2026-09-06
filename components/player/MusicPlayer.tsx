"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import tracksData from "@/content/tracks.json";

type Track = { t: string; a: string; p: string; img: string };
const TRACKS = tracksData as Track[];

const ICON_PLAY = (
  <svg viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const ICON_PAUSE = (
  <svg viewBox="0 0 24 24">
    <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
  </svg>
);

/**
 * The turntable + CD rack music player. Ported from index.html's vanilla-JS
 * player: Spotify 30-second previews, volume fade-in on play, auto-start of
 * "aruarian dance" on the first real user gesture (browsers block true
 * autoplay), and a scrollable rack of covers synced to the active track.
 *
 * `cur` is tracked in a ref (curRef) as well as state: the play/pause/ended
 * handlers are registered once and must always see the latest track index,
 * which a plain state closure inside a single-run useEffect would not give.
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rackRef = useRef<HTMLDivElement | null>(null);
  const fadeRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const curRef = useRef(-1);
  const [cur, setCurState] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [errored, setErrored] = useState(false);

  function setCur(idx: number) {
    curRef.current = idx;
    setCurState(idx);
  }

  const startIdx = Math.max(
    0,
    TRACKS.findIndex((t) => /aruarian/i.test(t.t)),
  );

  function play(idx: number) {
    const audio = audioRef.current;
    if (!audio) return;
    if (idx === curRef.current && !audio.paused) {
      audio.pause();
      return;
    }
    if (idx !== curRef.current) {
      setCur(idx);
      audio.src = TRACKS[idx].p;
      const el = rackRef.current?.querySelector<HTMLElement>(`[data-idx="${idx}"]`);
      el?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
    audio.volume = 0;
    setErrored(false);
    const pr = audio.play();
    if (pr && pr.catch) pr.catch(() => setErrored(true));

    if (fadeRef.current) clearInterval(fadeRef.current);
    let v = 0;
    fadeRef.current = setInterval(() => {
      v = Math.min(0.75, v + 0.06);
      audio.volume = v;
      if (v >= 0.75 && fadeRef.current) clearInterval(fadeRef.current);
    }, 50);
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function autoKick() {
      if (audio!.paused) play(startIdx);
    }
    const kickTimer = setTimeout(autoKick, 400);

    const gEvents: (keyof WindowEventMap)[] = ["pointerdown", "keydown", "touchstart"];
    function firstGesture(e: Event) {
      const target = e.target as HTMLElement | null;
      if (target?.closest?.(".player")) return;
      autoKick();
    }
    gEvents.forEach((ev) => window.addEventListener(ev, firstGesture, { capture: true, passive: true }));

    function onPlay() {
      setPlaying(true);
      gEvents.forEach((ev) => window.removeEventListener(ev, firstGesture, true));
    }
    function onPause() {
      setPlaying(false);
    }
    function onEnded() {
      play((curRef.current + 1) % TRACKS.length);
    }
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      clearTimeout(kickTimer);
      gEvents.forEach((ev) => window.removeEventListener(ev, firstGesture, true));
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      if (fadeRef.current) clearInterval(fadeRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const track = cur >= 0 ? TRACKS[cur] : null;

  return (
    <div className="player">
      <div className="turntable">
        <div
          className={`disc-card${playing ? " playing" : ""}`}
          id="disc"
          onClick={() => (cur < 0 ? play(0) : play(cur))}
        >
          <div className="disc-inner">
            <div className={`disc-ring${track ? " has" : ""}`} id="discRing">
              {track && (
                <Image id="discArt" className="disc-art" src={track.img} alt="" fill sizes="280px" unoptimized />
              )}
            </div>
            <div className="disc-tag" id="npTitle">
              {track ? track.t : "NUJABES"}
            </div>
            <div className="disc-tag2" id="npArtist">
              {track ? track.a : "tap a track to play ♪"}
            </div>
          </div>
        </div>
      </div>

      <div className="player-ctrls">
        <button
          className="pbtn"
          id="prevBtn"
          aria-label="previous"
          onClick={() => play(((cur < 0 ? 0 : cur) - 1 + TRACKS.length) % TRACKS.length)}
        >
          <svg viewBox="0 0 24 24">
            <path d="M7 6v12H5V6zm13 0v12l-9-6z" />
          </svg>
        </button>
        <button
          className="pbtn big"
          id="playBtn"
          aria-label="play/pause"
          onClick={() => (cur < 0 ? play(0) : playing ? audioRef.current?.pause() : play(cur))}
        >
          {playing ? ICON_PAUSE : ICON_PLAY}
        </button>
        <button
          className="pbtn"
          id="nextBtn"
          aria-label="next"
          onClick={() => play(((cur < 0 ? 0 : cur) + 1) % TRACKS.length)}
        >
          <svg viewBox="0 0 24 24">
            <path d="M4 6v12l9-6zm13 0h2v12h-2z" />
          </svg>
        </button>
      </div>

      <div className="pmini" id="pStatus" style={{ textAlign: "center" }}>
        {playing ? (
          "▶ now playing · nujabes radio · 30s preview"
        ) : errored ? (
          "▸ click anywhere to play"
        ) : (
          <>
            nujabes radio · 30s preview ·{" "}
            <a href="https://open.spotify.com/playlist/37i9dQZF1E4BO0EW30VEmk" target="_blank" rel="noopener">
              on spotify ↗
            </a>
          </>
        )}
      </div>
      <div className="rack-head">
        <b>{TRACKS.length} tracks</b> · scroll &amp; tap to play
      </div>
      <div className="cd-rack" id="cdRack" ref={rackRef}>
        {TRACKS.map((t, idx) => (
          <button
            key={t.p}
            type="button"
            className={`cd${idx === cur ? " active" : ""}`}
            data-idx={idx}
            title={`${t.t} · ${t.a}`}
            onClick={() => play(idx)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- 50 tiny lazy thumbnails; next/image's overhead isn't worth it here */}
            <img src={t.img} alt="" loading="lazy" />
            <span className="lbl">{t.t}</span>
          </button>
        ))}
      </div>
      <audio ref={audioRef} preload="none" />
    </div>
  );
}
