const stats = [
  { value: "<15m", label: "avg bug-to-merged-PR time" },
  { value: "0 loc", label: "written by your team" },
  { value: "1-click", label: "approval for complex changes" },
  { value: "BYOK", label: "bring your own keys" },
];

export function Stats() {
  return (
    <section className="flex justify-center px-6 sm:px-12 py-16">
      <div className="border-t border-b border-brand-border-muted w-full max-w-[1038px]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`flex flex-col gap-1.5 items-center py-9 px-4 sm:px-6 ${
                i < stats.length - 1 ? "border-r border-brand-border-muted" : ""
              }`}
            >
              <span className="font-space-mono font-bold text-[32px] sm:text-[41.6px] text-brand leading-none">
                {stat.value}
              </span>
              <span className="font-dm-sans font-light text-[13.1px] text-fg-muted text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
