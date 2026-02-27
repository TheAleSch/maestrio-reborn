"use client";

import { useEffect, useState } from "react";

export interface NavItem {
  id: string;
  title: string;
}

export function SidebarNav({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-10% 0px -80% 0px" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="flex flex-col gap-0.5">
      {items.map((item, i) => {
        const active = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={[
              "group flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-150",
              active
                ? "bg-brand-10 border border-brand-border"
                : "hover:bg-level1-hover border border-transparent",
            ].join(" ")}
          >
            <span
              className={[
                "font-dm-mono text-[10px] tracking-[1.4px] shrink-0 tabular-nums",
                active ? "text-brand" : "text-fg-muted",
              ].join(" ")}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={[
                "font-dm-sans text-[13px] leading-tight",
                active ? "text-white" : "text-fg-muted group-hover:text-white",
              ].join(" ")}
            >
              {item.title}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
