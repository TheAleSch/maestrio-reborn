type TagType = "auto" | "approve" | "human" | "customize";

const tagConfig: Record<
  TagType,
  { label: string; bg: string; border: string; text: string; dot?: string }
> = {
  auto: {
    label: "Auto-resolve",
    bg: "bg-brand-10",
    border: "border-brand-border",
    text: "text-brand",
    dot: "bg-brand",
  },
  approve: {
    label: "One-click approve",
    bg: "bg-cyan-10",
    border: "border-cyan-border",
    text: "text-sev-teal",
    dot: "bg-sev-teal",
  },
  human: {
    label: "Human Review",
    bg: "bg-sev-high-10",
    border: "border-orange-border",
    text: "text-sev-high",
    dot: "bg-sev-high",
  },
  customize: {
    label: "Customize",
    bg: "bg-neutral-10",
    border: "border-neutral-border",
    text: "text-white",
  },
};

function SevTag({ type }: { type: TagType }) {
  const c = tagConfig[type];
  return (
    <div
      className={`inline-flex items-center gap-2 ${c.bg} border ${c.border} px-2 py-1 rounded-[1px] shrink-0`}
    >
      {c.dot && <div className={`size-2 rounded-full ${c.dot}`} />}
      <span
        className={`font-dm-mono text-[12px] ${c.text} tracking-[1.613px] uppercase`}
      >
        {c.label}
      </span>
    </div>
  );
}

const levels = [
  {
    number: "01",
    tag: "auto" as TagType,
    title: "HIGH confidence · ≥70% default",
    description:
      "Fix is isolated, low risk, well-understood. The AI opens, tests, and merges the PR without any human in the loop.",
    rounded: "rounded-tl-lg",
  },
  {
    number: "02",
    tag: "approve" as TagType,
    title: "MEDIUM confidence · 40–69%",
    description:
      "AI drafts the PR with full diff and reasoning. You or your PM reviews it in the Kanban board with a single click to ship.",
    rounded: "rounded-tr-lg",
  },
  {
    number: "03",
    tag: "human" as TagType,
    title: "LOW confidence · <40%",
    description:
      "Ambiguous, high-risk, or cross-cutting changes are flagged and routed to your engineering team — never silently dropped.",
    rounded: "rounded-bl-lg",
  },
  {
    number: "04",
    tag: "customize" as TagType,
    title: "Tune thresholds per repo",
    description:
      "A startup founder might set HIGH threshold to 70% to ship fast. A payments service team might raise it to 95% for near-total human review. Your codebase, your rules.",
    rounded: "rounded-br-lg",
  },
];

export function ConfidenceLevels() {
  return (
    <section className="py-16 px-6 sm:px-12 flex justify-center">
      <div className="w-full max-w-[1120px] flex flex-col gap-12 p-4 sm:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="font-dm-mono text-[12px] text-brand tracking-[1.613px] uppercase">
            Confidence Score engine
          </span>
          <h2 className="font-space-grotesk font-bold text-4xl lg:text-[48px] text-white max-w-[637px] leading-tight">
            You decide how much Maestrio can do alone
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ boxShadow: "6px 4px 50px 0px rgba(110,240,221,0.1)" }}
        >
          {levels.map((level, i) => (
            <div
              key={i}
              className={`flex flex-col gap-4 p-4 bg-level1 border border-brand-border-muted min-h-[194px] transition-all duration-200 hover:bg-level1-hover hover:border-brand-border ${level.rounded}`}
            >
              <span className="font-dm-mono text-[12px] text-brand tracking-[1.613px] uppercase">
                {level.number}
              </span>
              <SevTag type={level.tag} />
              <h3 className="font-space-grotesk font-medium text-[20px] text-white">
                {level.title}
              </h3>
              <p className="font-dm-sans font-light text-[13.3px] text-fg-muted leading-[20.58px]">
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
