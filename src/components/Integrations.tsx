/* eslint-disable @next/next/no-img-element */

import { Globe, NetworkRight, Plus, ServerConnection } from "iconoir-react";
import type { SVGProps } from "react";

function StatusTag({ live }: { live: boolean }) {
  return live ? (
    <div className="inline-flex items-center gap-2 bg-brand-10 border border-brand-border px-2 py-1 rounded-[1px]">
      <div className="relative size-2 shrink-0">
        <div className="absolute inset-0 rounded-full bg-brand animate-ping opacity-60" />
        <div className="relative size-2 rounded-full bg-brand" style={{ boxShadow: "0 0 6px 2px #00ff73" }} />
      </div>
      <span className="font-dm-mono text-[12px] text-brand tracking-[1.613px] capitalize">
        Live
      </span>
    </div>
  ) : (
    <div className="inline-flex items-center gap-2 bg-neutral-10 border border-neutral-border px-2 py-1 rounded-[1px]">
      <span className="font-dm-mono text-[12px] text-fg-muted tracking-[1.613px] capitalize">
        soon
      </span>
    </div>
  );
}

type IconoirComponent = React.ComponentType<SVGProps<SVGSVGElement>>;

type Integration =
  | { kind: "brand"; slug: string; display: string; live: boolean }
  | { kind: "icon"; Icon: IconoirComponent; display: string; live: boolean };

function IntegrationLogo({ item }: { item: Integration }) {
  if (item.kind === "brand") {
    return (
      <div className="size-9 flex items-center justify-center">
        <img
          src={`https://cdn.simpleicons.org/${item.slug}`}
          alt={item.display}
          width={36}
          height={36}
          className="size-9 object-contain brightness-0 invert"
        />
      </div>
    );
  }
  return (
    <div className="size-9 flex items-center justify-center text-white">
      <item.Icon width={36} height={36} />
    </div>
  );
}

const integrations: Integration[] = [
  { kind: "brand", slug: "anthropic", display: "Anthropic", live: true },
  { kind: "brand", slug: "github", display: "GitHub", live: true },
  { kind: "brand", slug: "openai", display: "OpenAI", live: true },
  { kind: "brand", slug: "slack", display: "Slack", live: false },
  { kind: "icon", Icon: NetworkRight, display: "Webhooks", live: false },
  { kind: "icon", Icon: Globe, display: "Rest API", live: true },
  { kind: "icon", Icon: ServerConnection, display: "MCP Server", live: false },
  { kind: "icon", Icon: Plus, display: "More coming...", live: false },
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
        <div className="grid grid-cols-2 sm:grid-cols-4 rounded-lg overflow-hidden border border-brand-border-muted gap-px bg-brand-border-muted">
          {integrations.map((item, i) => (
            <div
              key={`${item.display}-${i}`}
              className="flex flex-col items-center gap-2 p-4 sm:p-6 bg-level1 transition-colors duration-200 hover:bg-level1-hover"
            >
              <IntegrationLogo item={item} />
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
