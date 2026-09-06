import { skills } from "@/content/site";

export function SkillStrip() {
  const doubled = [...skills, ...skills];
  return (
    <div className="skillstrip" aria-hidden="true">
      <div id="skilltrack">
        <div style={{ display: "inline-block" }}>
          {doubled.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
