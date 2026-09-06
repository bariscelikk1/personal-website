import { experience } from "@/content/site";
import { XP_ICONS } from "@/components/logos/XpIcons";
import { Reveal } from "@/components/Reveal";
import { MemoryCard } from "@/components/MemoryCard";

export function AboutSection() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">./whoami</div>
          <h2 className="h2">
            <span className="holotext">COMMUNITY</span> <span className="chrome">&amp; CRAFT</span>
          </h2>
          <p style={{ maxWidth: "60ch", color: "#b9cae6" }}>
            Third-year Computer Engineering student at Yıldız Teknik Üniversitesi, but the CV only tells half
            of it. I don&apos;t just build software, I build the rooms where builders meet.
          </p>
        </Reveal>

        <div className="xp" style={{ marginTop: 30 }}>
          {experience.map((item) => {
            const Icon = XP_ICONS[item.icon];
            return (
              <Reveal as="div" className="xp-row" key={item.title}>
                <div className="xp-ico">
                  <Icon />
                </div>
                <div className="xp-when">{item.when}</div>
                <div className="xp">
                  <h3>{item.title}</h3>
                  <div className="org">{item.org}</div>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <MemoryCard />
      </div>
    </section>
  );
}
