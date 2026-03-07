/* eslint-disable @next/next/no-img-element */

import { Globe, Plus } from "iconoir-react";
import type { SVGProps } from "react";

function StatusTag({ live }: { live: boolean }) {
  return live ? (
    <div className="inline-flex items-center gap-2 bg-brand-10 border border-brand-border px-2 py-1 rounded-[1px]">
      <div className="relative size-2 shrink-0">
        <div className="absolute inset-0 rounded-full bg-brand animate-ping opacity-60" />
        <div className="relative size-2 rounded-full bg-brand" style={{ boxShadow: "0 0 6px 2px rgba(0,255,115,0.1)" }} />
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

function WebhooksIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M11.511375 12.19873125h-4.6786125c-0.4309625 2.5502625 -3.4610625 3.67765 -5.454175 2.0292875 -1.38245 -1.143325 -1.6228125 -3.1710375 -0.54598125 -4.6058875 0.2589125 -0.34485625 0.79405 -0.28010625 0.96325 0.11654375 0.078525 0.1840875 0.052875 0.39608125 -0.0672875 0.55613125 -0.29220625 0.386975 -0.4495625 0.85904375 -0.44798125 1.34394375 0 1.7242875 1.86659375 2.8019625 3.3598625 1.93981875 0.69303125 -0.40011875 1.11995625 -1.139575 1.11995625 -1.93981875 0 -0.309275 0.2507 -0.5599875 0.55998125 -0.559975h5.1909875c0.43106875 -0.7466375 1.50875 -0.7466375 1.93981875 0 0.43106875 0.7466375 -0.10776875 1.67993125 -0.9699125 1.67993125 -0.40011875 0 -0.76984375 -0.2134625 -0.96990625 -0.559975Zm-7.990875 0.559975c0.84846875 0.0003 1.3891125 -0.906275 0.98555625 -1.65263125l2.5038 -4.0696375c0.16180625 -0.26329375 0.079725 -0.6078875 -0.18339375 -0.76996875 -1.46834375 -0.90394375 -1.4075125 -3.0584375 0.1095 -3.87809375 1.1532125 -0.62308125 2.59265625 -0.1271625 3.11736875 1.07400625 0.17243125 0.3952375 0.70805625 0.45560625 0.964125 0.10865625 0.11884375 -0.16101875 0.1427625 -0.37320625 0.0627375 -0.5566375 -1.03658125 -2.36961875 -4.24963125 -2.72850625 -5.78349375 -0.6459875 -1.03489375 1.40506875 -0.8218625 3.36851875 0.49030625 4.51893125l-2.2357125 3.63145625h-0.03079375c-0.86214375 0.00064375 -1.4002875 0.93434375 -0.96865625 1.68065625 0.20001875 0.34584375 0.56913125 0.55895 0.96865625 0.55925Zm8.9596375 -4.47981875c-0.4317375 0.00003125 -0.8594875 0.0829625 -1.25995 0.2442875l-2.2343125 -3.63215c0.40951875 -0.758675 -0.15581875 -1.67615625 -1.01760625 -1.651475 -0.8617875 0.02468125 -1.3736875 0.973025 -0.9214125 1.7070125 0.2038875 0.33089375 0.56479375 0.53241875 0.9534625 0.5324375h0.0308l2.50449375 4.0703375c0.16231875 0.26286875 0.5068625 0.34461875 0.76996875 0.18269375 1.4678 -0.9048375 3.36468125 0.118575 3.41439375 1.84214375 0.03640625 1.26218125 -0.97713125 2.304975 -2.2398375 2.3044875 -0.431075 0 -0.70049375 0.46665 -0.48495625 0.8399625 0.10003125 0.1732625 0.28489375 0.27999375 0.48495625 0.27999375 2.586425 -0.001125 4.20173125 -2.8017125 2.90755 -5.0410625 -0.6001125 -1.03838125 -1.70823125 -1.67815 -2.90755 -1.67866875Z" strokeWidth="0.0625"/>
    </svg>
  );
}

function McpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" fill="none" {...props}>
      <path d="M18 84.8528L85.8822 16.9706C95.2548 7.59798 110.451 7.59798 119.823 16.9706C129.196 26.3431 129.196 41.5391 119.823 50.9117L68.5581 102.177" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
      <path d="M69.2652 101.47L119.823 50.9117C129.196 41.5391 144.392 41.5391 153.765 50.9117L154.118 51.2652C163.491 60.6378 163.491 75.8338 154.118 85.2063L92.7248 146.6C89.6006 149.724 89.6006 154.789 92.7248 157.913L105.331 170.52" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
      <path d="M102.853 33.9411L52.6482 84.1457C43.2756 93.5183 43.2756 108.714 52.6482 118.087C62.0208 127.459 77.2167 127.459 86.5893 118.087L136.794 67.8822" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
    </svg>
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
  { kind: "icon", Icon: WebhooksIcon, display: "Webhooks", live: false },
  { kind: "icon", Icon: Globe, display: "REST API", live: true },
  { kind: "icon", Icon: McpIcon, display: "MCP Server", live: false },
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
