import { Puzzle, KanbanBoard, Cpu, Key, Bell, GitCompare } from "iconoir-react";
import type { ReactNode } from "react";

const features: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Puzzle width={24} height={24} strokeWidth={1.5} />,
    title: "Feedback Widget",
    description:
      "One script tag. Lightweight, customizable, embeds in any SaaS product. Collects structured reports with metadata, screenshots, and session context.",
  },
  {
    icon: <KanbanBoard width={24} height={24} strokeWidth={1.5} />,
    title: "Kanban Board",
    description:
      "All feedback — auto-resolved, awaiting approval, or flagged — lives in a clean board. PMs and Support Leads never need to touch GitHub.",
  },
  {
    icon: <Cpu width={24} height={24} strokeWidth={1.5} />,
    title: "Agentic AI Engineer",
    description:
      "Powered by your own Claude or OpenAI key. Reads your codebase, writes targeted fixes, stays within safe directories you define.",
  },
  {
    icon: <Key width={24} height={24} strokeWidth={1.5} />,
    title: "Bring Your Own Keys or Use Ours",
    description:
      "AI token costs flow directly to Anthropic or OpenAI — or through us, no markup cost.",
  },
  {
    icon: <Bell width={24} height={24} strokeWidth={1.5} />,
    title: "Closed-loop Notifications",
    description:
      "When a user's requested fix ships, they're automatically notified. Turn complainers into advocates by closing the loop visibly.",
  },
  {
    icon: <GitCompare width={24} height={24} strokeWidth={1.5} />,
    title: "Team Analytics",
    description:
      "Track hours of dev time saved, auto-resolved vs. human-approved ratios, and feedback-to-merge velocity — per repo and per team.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 px-6 sm:px-12 flex justify-center">
      <div className="w-full max-w-[1120px] flex flex-col gap-12 p-4 sm:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="font-dm-mono text-[12px] text-brand tracking-[1.613px] uppercase">
            Features
          </span>
          <h2 className="font-space-grotesk font-bold text-4xl lg:text-[48px] text-white">
            All your team needs.
          </h2>
        </div>

        {/* Cards */}
        <div
          className="bg-level1 border border-brand-border-muted rounded-[6px] p-4 overflow-clip"
          style={{ boxShadow: "6px 4px 50px -25px rgba(110,240,221,0.1)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-2 p-4 min-h-[180px] items-start rounded-lg border border-transparent transition-all duration-200 hover:bg-level1-hover hover:border-brand-border-muted"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-[#111] rounded-[6px] text-white shrink-0">
                  {feature.icon}
                </div>
                <h3 className="font-space-grotesk font-bold text-[18px] text-white">
                  {feature.title}
                </h3>
                <p className="font-dm-sans font-light text-[13.3px] text-fg-muted leading-[21.25px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
