"use client";

import { useEffect, useState } from "react";
import { roles } from "@/content/site";

export function RoleRotator() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 250);
    }, 2200);
    return () => clearInterval(iv);
  }, []);

  return (
    <span
      className="roleword"
      style={{ opacity: visible ? 1 : 0, transition: "opacity .3s" }}
    >
      {roles[i]}
    </span>
  );
}
