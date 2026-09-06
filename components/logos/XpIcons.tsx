import { useId } from "react";

/** Faceted badge icons for the three experience rows in the About section. */

export function CoordinatorIcon() {
  const id = useId();
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2f6fa" />
          <stop offset=".5" stopColor="#b9c6d2" />
          <stop offset="1" stopColor="#7a8a99" />
        </linearGradient>
      </defs>
      <path d="M24 3 L42 13 V35 L24 45 L6 35 V13 Z" fill={`url(#${id})`} stroke="#8fa2b3" strokeWidth="1.2" />
      <path d="M24 7 L38 15 V33 L24 41 L10 33 V15 Z" fill="#071022" />
      <circle cx="24" cy="27" r="3.4" fill="#7df9ff" />
      <path d="M18 29 a9 9 0 0 1 12 0" fill="none" stroke="#2fc6ff" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.5 31 a14 14 0 0 1 19 0" fill="none" stroke="#2fc6ff" strokeWidth="1.5" strokeLinecap="round" opacity=".55" />
    </svg>
  );
}

export function CoachIcon() {
  const id = useId();
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2f6fa" />
          <stop offset=".5" stopColor="#b9c6d2" />
          <stop offset="1" stopColor="#7a8a99" />
        </linearGradient>
      </defs>
      <path d="M24 3 L42 13 V35 L24 45 L6 35 V13 Z" fill={`url(#${id})`} stroke="#8fa2b3" strokeWidth="1.2" />
      <path d="M24 7 L38 15 V33 L24 41 L10 33 V15 Z" fill="#071022" />
      <path d="M16 17 L20 25 L14 24 Z" fill="#12233d" />
      <path d="M32 17 L34 24 L28 25 Z" fill="#12233d" />
      <ellipse cx="24" cy="28" rx="10" ry="11" fill="#12233d" stroke="#2fc6ff" strokeWidth="1" />
      <circle cx="20" cy="26" r="4" fill="#eafcff" />
      <circle cx="28" cy="26" r="4" fill="#eafcff" />
      <circle cx="20" cy="26" r="1.9" fill="#2fc6ff" />
      <circle cx="28" cy="26" r="1.9" fill="#2fc6ff" />
      <path d="M24 30 l-2.4 3.4 h4.8 z" fill="#7df9ff" />
    </svg>
  );
}

export function MemberIcon() {
  const id = useId();
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2f6fa" />
          <stop offset=".5" stopColor="#b9c6d2" />
          <stop offset="1" stopColor="#7a8a99" />
        </linearGradient>
      </defs>
      <path d="M24 3 L42 13 V35 L24 45 L6 35 V13 Z" fill={`url(#${id})`} stroke="#8fa2b3" strokeWidth="1.2" />
      <path d="M24 7 L38 15 V33 L24 41 L10 33 V15 Z" fill="#071022" />
      <path d="M20 20 L13 26 L20 32" fill="none" stroke="#7df9ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 20 L35 26 L28 32" fill="none" stroke="#7df9ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="26.5" y1="19" x2="21.5" y2="33" stroke="#2fc6ff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export const XP_ICONS: Record<string, () => React.ReactElement> = {
  coordinator: CoordinatorIcon,
  coach: CoachIcon,
  member: MemberIcon,
};
