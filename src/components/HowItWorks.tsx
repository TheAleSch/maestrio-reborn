import { MessageText, BrainElectricity, GitFork, GitMerge } from "iconoir-react";
import type { ReactNode } from "react";

interface Step {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  roundedLeft?: boolean;
  roundedRight?: boolean;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <MessageText width={24} height={24} strokeWidth={1.5} />,
    title: "Get feedback",
    description:
      "Drop one script tag into your product. Any user — support, beta, power user — can submit feedback without leaving your app.",
    roundedLeft: true,
  },
  {
    number: "02",
    icon: <BrainElectricity width={24} height={24} strokeWidth={1.5} />,
    title: "AI triage & scores",
    description:
      "The confidence engine scores each submission. HIGH confidence goes straight to the AI agent. LOW confidence surfaces for your Kanban review.",
  },
  {
    number: "03",
    icon: <GitFork width={24} height={24} strokeWidth={1.5} />,
    title: "Maestrio open a PR",
    description:
      "Connected to GitHub, the agentic AI creates a branch, writes the fix, runs tests, and opens a pull request — all autonomously.",
  },
  {
    number: "04",
    icon: <GitMerge width={24} height={24} strokeWidth={1.5} />,
    title: "Approve or Merge",
    description:
      "High-confidence PRs auto-merge. Complex changes surface with full diff context, ready for your one-click approval from the Kanban board.",
    roundedRight: true,
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 px-6 sm:px-12 flex justify-center">
      <div className="w-full max-w-[1120px] flex flex-col gap-12 p-4 sm:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="font-dm-mono text-[12px] text-brand tracking-[1.613px] uppercase">
            How it works
          </span>
          <h2 className="font-space-grotesk font-bold text-4xl lg:text-[48px] text-white max-w-[637px] leading-tight">
            Four steps from feedback to production
          </h2>
        </div>

        {/* Steps */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ boxShadow: "6px 4px 50px 0px rgba(110,240,221,0.1)" }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className={[
                "flex flex-col gap-4 p-4 justify-center min-h-[270px] transition-all duration-200",
                "bg-level1 border border-brand-border-muted hover:bg-level1-hover hover:border-brand-border",
                step.roundedLeft
                  ? "rounded-tl-lg rounded-bl-lg sm:rounded-bl-none sm:rounded-tr-none"
                  : "",
                step.roundedRight
                  ? "rounded-br-lg rounded-tr-lg sm:rounded-tl-none"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="font-dm-mono text-[12px] text-brand tracking-[1.613px] uppercase">
                {step.number}
              </span>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg text-white/60">
                {step.icon}
              </div>
              <h3 className="font-space-grotesk font-medium text-[20px] text-white">
                {step.title}
              </h3>
              <p className="font-dm-sans font-light text-[13.6px] text-fg-muted leading-[21px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
