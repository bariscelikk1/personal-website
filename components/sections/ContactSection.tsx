import { AquaLink } from "@/components/AquaLink";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  return (
    <section id="contact">
      <Reveal as="div" className="wrap">
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          sign my guestbook
        </div>
        <h2 className="h2">
          <span className="holotext">LET&apos;S BUILD</span>
        </h2>
        <div className="gbook">
          <p style={{ color: "#c3d3ea", margin: 0 }}>
            Looking for a software engineering intern who ships fast, learns faster, and writes optimizers
            from scratch for the vibe? That&apos;s the one. Hit me up, I reply quick.
          </p>
          <div className="links">
            <AquaLink href="mailto:nbariscelikk@gmail.com">✉ nbariscelikk@gmail.com</AquaLink>
            <AquaLink
              variant="pink"
              href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-%C3%A7elik-12979a252/"
              target="_blank"
              rel="noopener"
            >
              in · LinkedIn
            </AquaLink>
            <AquaLink variant="lime" href="https://github.com/bariscelikk1" target="_blank" rel="noopener">
              ⌘ github/bariscelikk1
            </AquaLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
