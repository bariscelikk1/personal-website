const ROWS: [string, string][] = [
  ["school", "YTÜ · Computer Engineering"],
  ["based", "Istanbul, Turkey"],
  ["status", "open to SWE internships"],
  ["stack", "Python · TypeScript · Next.js · TensorFlow"],
];

/**
 * A skimmable terminal-style readout of the facts a recruiter scans for
 * first — school, location, availability, stack — styled as part of the
 * "device" the site pretends to be rather than a bolted-on info card.
 */
export function SysInfo() {
  return (
    <div className="sysinfo" aria-label="Quick facts">
      <div className="sysinfo-head">&gt; sys.info</div>
      {ROWS.map(([k, v]) => (
        <div className="sysinfo-row" key={k}>
          <span className="sysinfo-k">{k}</span>
          <span className="sysinfo-v">{v}</span>
        </div>
      ))}
    </div>
  );
}
