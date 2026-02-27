import type { ReactNode } from "react";
import Link from "next/link";
import { SidebarNav } from "./SidebarNav";

// ─── Data shape ────────────────────────────────────────────────────────────────
// To add, remove, or reorder sections, edit the `sections` array in the
// individual page files (privacy/page.tsx or terms/page.tsx).
// This layout component never needs to change.

export interface LegalSection {
  /** URL-safe anchor id, e.g. "data-collection" */
  id: string;
  /** Sidebar label and section heading */
  title: string;
  /** Section body — JSX or plain text */
  content: ReactNode;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

// ─── Layout ────────────────────────────────────────────────────────────────────

export function LegalLayout({ title, lastUpdated, sections }: LegalLayoutProps) {
  const navItems = sections.map(({ id, title }) => ({ id, title }));

  return (
    <main className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Back link */}
        <Link
          href="/"
          className="font-dm-mono text-[11px] text-brand tracking-[1.6px] uppercase hover:opacity-70 transition-opacity w-fit"
        >
          ← maestrio.ai
        </Link>

        {/* Page header */}
        <div className="flex flex-col gap-2 border-b border-brand-border-muted pb-10">
          <h1 className="font-space-grotesk font-bold text-4xl lg:text-5xl text-white">
            {title}
          </h1>
          <p className="font-dm-mono text-[11px] text-fg-muted tracking-[1.4px] uppercase">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Two-column: sidebar + content */}
        <div className="flex gap-12 xl:gap-20 items-start">
          {/* Sticky sidebar — hidden on mobile */}
          <aside className="hidden lg:block w-[220px] xl:w-[260px] shrink-0 sticky top-8 self-start">
            <p className="font-dm-mono text-[10px] text-fg-muted tracking-[1.6px] uppercase mb-3 px-3">
              Contents
            </p>
            <SidebarNav items={navItems} />
          </aside>

          {/* Content */}
          <div className="flex flex-col gap-14 min-w-0 flex-1 max-w-[720px]">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-8">
                <h2 className="font-space-grotesk font-semibold text-[22px] text-white mb-4 pb-3 border-b border-brand-border-muted">
                  {section.title}
                </h2>
                <div className="font-dm-sans font-light text-[14.5px] text-fg-secondary leading-[1.8] flex flex-col gap-4">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
