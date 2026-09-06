import { projects } from "@/content/site";
import { PROJECT_LOGOS } from "@/components/logos/ProjectLogos";
import { Reveal } from "@/components/Reveal";

export function WorkSection() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">select a title · press ✕</div>
          <h2 className="h2">
            <span className="chrome">FLAGSHIP</span> <span className="holotext">BUILDS</span>
          </h2>
          <p style={{ maxWidth: "56ch", color: "#b9cae6" }}>
            Four projects, zero filler. From deep-learning diagnostics to a full production platform.
          </p>
        </Reveal>

        <div className="proj-grid" style={{ marginTop: 40 }}>
          {projects.map((p) => {
            const Logo = PROJECT_LOGOS[p.slug];
            return (
              <Reveal
                as="a"
                key={p.slug}
                className="card"
                href={p.href}
                target="_blank"
                rel="noopener"
              >
                <div className="card-media">
                  <span className={`badge${p.badgeColor ? ` ${p.badgeColor}` : ""}`}>{p.badge}</span>
                  <span className="glyph" data-proj={p.slug}>
                    <Logo />
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-meta">{p.meta}</div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="stack">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
