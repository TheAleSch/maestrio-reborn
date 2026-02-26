import { ArrowRight } from "iconoir-react";

export function CTA() {
  return (
    <section className="py-16 px-6 sm:px-12 flex justify-center">
      <div className="w-full max-w-[1120px] flex flex-col items-center gap-12 p-4 sm:p-8">
        {/* Headline */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-[58px] text-white text-center leading-tight">
            Be the first in line when
          </h2>
          <span className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-[58px] text-brand text-center leading-tight">
            Maestrio
          </span>
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-[58px] text-white text-center leading-tight">
            Launches
          </h2>
        </div>

        {/* Email form */}
        <div className="flex flex-col gap-2.5 w-full max-w-[438px]">
          <div className="flex h-12">
            <input
              type="email"
              placeholder="mybest@email.com"
              className="flex-1 min-w-0 bg-muted-bg border-l border-t border-b border-muted-border rounded-l-md px-4 text-[14px] text-fg-muted font-inter focus:outline-none focus:border-brand-border placeholder:text-fg-muted transition-colors"
            />
            <button className="flex items-center gap-2 bg-brand px-6 sm:px-8 rounded-r-md font-inter font-medium text-[14px] text-over-primary hover:bg-brand-dim transition-colors shrink-0">
              SIGN UP
              <ArrowRight width={16} height={16} strokeWidth={2} />
            </button>
          </div>
          <p className="font-dm-mono text-[12.5px] text-fg-muted text-center">
            Get 10 free runs
          </p>
        </div>
      </div>
    </section>
  );
}
