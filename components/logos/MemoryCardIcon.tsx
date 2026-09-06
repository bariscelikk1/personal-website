import { useId } from "react";

/** The PS2-style memory-card SVG used as the clickable skill-loader button. */
export function MemoryCardIcon() {
  const id = useId();
  return (
    <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dbe6f2" />
          <stop offset=".5" stopColor="#9fb2c6" />
          <stop offset="1" stopColor="#6f8296" />
        </linearGradient>
      </defs>
      <rect x="10" y="6" width="80" height="120" rx="12" fill={`url(#${id})`} stroke="#5f7186" strokeWidth="1.5" />
      <rect x="18" y="16" width="64" height="46" rx="6" fill="#0b1a30" stroke="#39b6ff" strokeWidth="1" />
      <text
        x="50"
        y="44"
        fill="#7df9ff"
        fontFamily="var(--term)"
        fontSize="16"
        textAnchor="middle"
      >
        SKILL
      </text>
      <g stroke="#5f7186" strokeWidth="2">
        <line x1="24" y1="78" x2="76" y2="78" />
        <line x1="24" y1="86" x2="76" y2="86" />
        <line x1="24" y1="94" x2="76" y2="94" />
      </g>
      <rect x="30" y="116" width="40" height="15" rx="2" fill="#0b1a30" stroke="#5f7186" />
      <g fill="#39b6ff">
        <rect x="34" y="119" width="3" height="9" />
        <rect x="40" y="119" width="3" height="9" />
        <rect x="46" y="119" width="3" height="9" />
        <rect x="52" y="119" width="3" height="9" />
        <rect x="58" y="119" width="3" height="9" />
      </g>
    </svg>
  );
}
