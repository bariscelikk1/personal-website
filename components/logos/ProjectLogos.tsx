import { useId } from "react";

/**
 * Chrome-badge SVG logos for the flagship project cards, ported from the
 * original hand-rolled SVG strings in index.html. Each gradient/filter id is
 * prefixed with a per-instance useId so multiple logos on one page never
 * collide (SVG <defs> ids are global to the document).
 */

const chromeStops = (
  <>
    <stop offset="0" stopColor="#f2f6fa" />
    <stop offset=".18" stopColor="#ffffff" />
    <stop offset=".5" stopColor="#b9c6d2" />
    <stop offset=".82" stopColor="#7a8a99" />
    <stop offset="1" stopColor="#cfd8e0" />
  </>
);

export function DermAiLogo() {
  const uid = useId();
  const c = `${uid}-c`;
  const g = `${uid}-g`;
  const f = `${uid}-f`;
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={c} x1="0" y1="0" x2="0" y2="1">
          {chromeStops}
        </linearGradient>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5ef2ff" />
          <stop offset="1" stopColor="#009a9a" />
        </linearGradient>
        <filter id={f} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M60 6 L104 30 V90 L60 114 L16 90 V30 Z" fill={`url(#${c})`} stroke="#8fa2b3" strokeWidth="1.5" />
      <path d="M60 12 L98 33 V87 L60 108 L22 87 V33 Z" fill="#071022" />
      <g filter={`url(#${f})`}>
        <polygon points="60,34 74,60 60,88 46,60" fill={`url(#${g})`} />
        <polygon points="60,34 74,60 60,60" fill="#9ffcff" opacity=".75" />
        <polygon points="60,88 46,60 60,60" fill="#067a7a" />
      </g>
      <rect x="44" y="58" width="32" height="3" rx="1.5" fill="#eafcff">
        <animate attributeName="y" values="38;84;38" dur="2.4s" repeatCount="indefinite" />
      </rect>
      <g stroke="#7fffd4" strokeWidth="1" fill="#7fffd4" filter={`url(#${f})`}>
        <line x1="52" y1="74" x2="60" y2="80" />
        <line x1="60" y1="80" x2="68" y2="74" />
        <circle cx="52" cy="74" r="2.4" />
        <circle cx="68" cy="74" r="2.4" />
        <circle cx="60" cy="80" r="2.4" />
      </g>
    </svg>
  );
}

export function OptimizerLogo() {
  const uid = useId();
  const c = `${uid}-c`;
  const l = `${uid}-l`;
  const b = `${uid}-b`;
  const f = `${uid}-f`;
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={c} x1="0" y1="0" x2="0" y2="1">
          {chromeStops}
        </linearGradient>
        <linearGradient id={l} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3aaeff" />
          <stop offset="1" stopColor="#ff5cf0" />
        </linearGradient>
        <radialGradient id={b} cx=".35" cy=".3" r=".85">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".4" stopColor="#cfd8e0" />
          <stop offset="1" stopColor="#5b6b7d" />
        </radialGradient>
        <filter id={f} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M60 6 L104 30 V90 L60 114 L16 90 V30 Z" fill={`url(#${c})`} stroke="#8fa2b3" strokeWidth="1.5" />
      <path d="M60 12 L98 33 V87 L60 108 L22 87 V33 Z" fill="#071022" />
      <g stroke="#3fd0ff" fill="none" opacity=".4">
        <ellipse cx="76" cy="86" rx="24" ry="8" />
        <ellipse cx="76" cy="86" rx="16" ry="5" />
        <ellipse cx="76" cy="86" rx="8" ry="3" />
      </g>
      <path
        d="M26 36 C42 42 44 74 76 86"
        stroke={`url(#${l})`}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        filter={`url(#${f})`}
      />
      <g fill="#8fd7ff">
        <circle cx="40" cy="46" r="2" opacity=".3" />
        <circle cx="50" cy="56" r="2" opacity=".45" />
        <circle cx="61" cy="68" r="2.4" opacity=".6" />
      </g>
      <circle cx="76" cy="86" r="8" fill={`url(#${b})`} filter={`url(#${f})`} />
    </svg>
  );
}

export function KortlyLogo() {
  const uid = useId();
  const c = `${uid}-c`;
  const p = `${uid}-p`;
  const f = `${uid}-f`;
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={c} x1="0" y1="0" x2="0" y2="1">
          {chromeStops}
        </linearGradient>
        <radialGradient id={p} cx=".35" cy=".3" r=".9">
          <stop offset="0" stopColor="#b6ffcf" />
          <stop offset=".5" stopColor="#2fd08a" />
          <stop offset="1" stopColor="#0a7d55" />
        </radialGradient>
        <filter id={f} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M60 8 L100 30 V86 L60 108 L20 86 V30 Z" fill={`url(#${c})`} stroke="#8090a0" strokeWidth="1.5" />
      <path d="M60 8 L100 30 V57 L20 57 V30 Z" fill="#ffffff" opacity=".14" />
      <polygon points="40,84 80,84 92,58 28,58" fill="#0a2b4d" stroke="#39b6ff" strokeWidth="1.6" />
      <line x1="60" y1="58" x2="60" y2="84" stroke="#39b6ff" strokeWidth="1.4" />
      <line x1="33" y1="71" x2="87" y2="71" stroke="#39b6ff" strokeWidth="1" opacity=".7" />
      <g filter={`url(#${f})`}>
        <path
          d="M60 24 C68 24 72 31 68 39 L60 52 L52 39 C48 31 52 24 60 24 Z"
          fill={`url(#${p})`}
          stroke="#0a7d55"
          strokeWidth=".5"
        />
        <circle cx="60" cy="34" r="3.2" fill="#eafff5" />
      </g>
    </svg>
  );
}

export function AirlineLogo() {
  const uid = useId();
  const c = `${uid}-c`;
  const f = `${uid}-f`;
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={c} x1="0" y1="0" x2="0" y2="1">
          {chromeStops}
        </linearGradient>
        <filter id={f} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M60 6 L104 30 V90 L60 114 L16 90 V30 Z" fill={`url(#${c})`} stroke="#8fa2b3" strokeWidth="1.5" />
      <path d="M60 12 L98 33 V87 L60 108 L22 87 V33 Z" fill="#071022" />
      <g stroke="#39b6ff" fill="none" opacity=".85">
        <circle cx="52" cy="66" r="24" />
        <ellipse cx="52" cy="66" rx="24" ry="9" />
        <ellipse cx="52" cy="66" rx="11" ry="24" />
        <ellipse cx="52" cy="66" rx="19" ry="24" opacity=".5" />
        <line x1="28" y1="66" x2="76" y2="66" />
      </g>
      <path
        d="M28 92 Q66 44 96 30"
        stroke="#9bff5b"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 4"
        strokeLinecap="round"
        filter={`url(#${f})`}
      >
        <animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite" />
      </path>
      <g filter={`url(#${f})`}>
        <polygon points="84,46 102,26 97,48 88,52" fill={`url(#${c})`} stroke="#8fa2b3" strokeWidth=".6" />
        <polygon points="97,48 102,26 91,45" fill="#eef4fa" />
      </g>
    </svg>
  );
}

export const PROJECT_LOGOS: Record<string, () => React.ReactElement> = {
  dermai: DermAiLogo,
  optimizer: OptimizerLogo,
  kortly: KortlyLogo,
  airline: AirlineLogo,
};
