"use client";

import { useReveal } from "@/hooks/useReveal";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Reveal<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as ElementType;
  const { ref, inView } = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={`reveal${inView ? " in" : ""}${className ? ` ${className}` : ""}`} {...rest}>
      {children}
    </Tag>
  );
}
