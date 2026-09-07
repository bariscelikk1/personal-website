import { RoleRotator } from "@/components/RoleRotator";
import { AquaLink } from "@/components/AquaLink";
import { MusicPlayer } from "@/components/player/MusicPlayer";
import { SysInfo } from "@/components/SysInfo";

export function HeroSection() {
  return (
    <section id="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="online">
            <span className="dot" /> status: online · shipping since 2023
          </div>
          <div className="eyebrow">software engineer · ml researcher · istanbul</div>
          <h1 className="hero-name">
            <span className="chrome">BARIŞ</span>
            <span className="l2 holotext">ÇELIK</span>
          </h1>
          <div className="hero-role">
            &gt; <RoleRotator />
            <span style={{ color: "var(--pink)" }}>_</span>
          </div>
          <p className="hero-blurb">
            Computer engineer who trains neural nets that beat clinical baselines, ships full-stack platforms,
            and builds developer communities 200+ strong. I write optimizers from scratch for fun and full-stack
            apps for real — and I&apos;m looking for a software engineering internship.
          </p>
          <SysInfo />
          <div className="hero-cta">
            <AquaLink href="#work">◈ View my work</AquaLink>
            <AquaLink variant="pink" href="mailto:nbariscelikk@gmail.com">
              ✉ Get in touch
            </AquaLink>
            <AquaLink variant="lime" href="https://github.com/bariscelikk1" target="_blank" rel="noopener">
              ⌘ GitHub
            </AquaLink>
          </div>
        </div>

        <MusicPlayer />
      </div>
    </section>
  );
}
