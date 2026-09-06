"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/content/site";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navLinks[0].href);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((s): s is HTMLElement => !!s);

    function onScroll() {
      setScrolled(window.scrollY > 60);
      const y = window.scrollY + 140;
      let cur = 0;
      sections.forEach((s, idx) => {
        if (s.offsetTop <= y) cur = idx;
      });
      setActive(navLinks[cur].href);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <div className="brand">
        ◈ BARIŞ<b>.</b>ÇELIK
      </div>
      <div className="navlinks nav-desktop">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className={active === l.href ? "active" : ""}>
            {l.label}
          </a>
        ))}
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className="nav-burger"
          onClick={() => setOpen(true)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#cfe0f5" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </Button>
        <SheetContent
          side="right"
          className="!bg-[#0a1024] !border-l !border-[rgba(166,225,250,.35)] mobile-nav"
        >
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <div style={{ padding: "60px 24px" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
