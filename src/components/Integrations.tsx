/* eslint-disable @next/next/no-img-element */

function StatusTag({ live }: { live: boolean }) {
  return live ? (
    <div className="inline-flex items-center gap-2 bg-brand-10 border border-brand-border px-2 py-1 rounded-[1px]">
      <div className="size-2 rounded-full bg-brand animate-pulse" />
      <span className="font-dm-mono text-[12px] text-brand tracking-[1.613px] capitalize">
        Live
      </span>
    </div>
  ) : (
    <div className="inline-flex items-center gap-2 bg-neutral-10 border border-neutral-border px-2 py-1 rounded-[1px]">
      <div className="size-2 rounded-full bg-fg-muted" />
      <span className="font-dm-mono text-[12px] text-white tracking-[1.613px] capitalize">
        soon
      </span>
    </div>
  );
}

function BrandLogo({ slug }: { slug: string }) {
  return (
    <div className="size-9 flex items-center justify-center">
      <img
        src={`https://cdn.simpleicons.org/${slug}/ffffff`}
        alt={slug}
        width={36}
        height={36}
        className="size-9 object-contain"
      />
    </div>
  );
}

const integrations = [
  { slug: "anthropic", display: "Anthropic", live: true },
  { slug: "github", display: "GitHub", live: true },
  { slug: "openai", display: "OpenAI", live: true },
  { slug: "slack", display: "Slack", live: false },
  { slug: "notion", display: "Webhooks", live: false },
  { slug: "github", display: "Rest API", live: true },
  { slug: "github", display: "MCP Server", live: false },
  { slug: "notion", display: "Webhooks", live: false },
];

export function Integrations() {
  return (
    <section className="py-16 px-6 sm:px-12 flex justify-center">
      <div className="w-full max-w-[1120px] flex flex-col gap-12 p-4 sm:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="font-dm-mono text-[12px] text-brand tracking-[1.613px] uppercase">
            Integrations
          </span>
          <h2 className="font-space-grotesk font-bold text-4xl lg:text-[48px] text-white max-w-[637px] leading-tight">
            Plugs directly into where your team already works.
          </h2>
          <p className="font-dm-sans font-light text-[14px] text-fg-muted max-w-[440px] leading-relaxed">
            No new tools to juggle — Maestrio connects to your existing stack on
            day one.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 rounded-lg overflow-hidden">
          {integrations.map((item, i) => (
            <div
              key={`${item.slug}-${i}`}
              className="flex flex-col items-center gap-2 p-4 sm:p-6 bg-level1 border border-brand-border-muted transition-all duration-200 hover:bg-level1-hover hover:border-brand-border"
            >
              <BrandLogo slug={item.slug} />
              <span className="font-space-grotesk font-normal text-[13px] text-fg-secondary text-center uppercase tracking-wide">
                {item.display}
              </span>
              <StatusTag live={item.live} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
