"use client";

import type { AnchorHTMLAttributes } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "pink" | "lime" };

/** The site's chrome-edged CTA button, with the magnetic hover effect. */
export function AquaLink({ variant, className = "", ...props }: Props) {
  const ref = useMagnetic<HTMLAnchorElement>();
  const cls = ["aqua", variant, className].filter(Boolean).join(" ");
  return <a ref={ref} className={cls} {...props} />;
}
