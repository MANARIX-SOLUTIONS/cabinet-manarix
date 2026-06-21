"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

function getHashId(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1);
}

export function useActiveSection() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sectionLinks = NAV_ITEMS.flatMap((link) => {
      const id = getHashId(link.href);
      return id ? [{ href: link.href, id }] : [];
    });

    const elements = sectionLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveId("");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 120) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const targetId = visible[0]?.target.id;
        if (targetId) {
          const match = sectionLinks.find((link) => link.id === targetId);
          if (match) setActiveId(match.href);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    window.addEventListener("scroll", handleScroll, { passive: true });
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return activeId;
}
