import { EmailForm } from "@/components/EmailForm";

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center border-b border-brand-border-muted px-6 sm:px-12 lg:px-32 pt-28 pb-20"
      style={{
        backgroundImage:
          "linear-gradient(237.047deg, rgb(7,10,0) 5.69%, rgb(0,10,5) 16.85%, rgb(0,8,3) 31.13%, rgb(0,3,5) 50.33%, rgb(0,3,5) 50.34%, rgb(2,13,7) 65.96%, rgb(0,7,6) 78.01%, rgb(9,11,5) 84.70%, rgb(2,5,3) 97.65%)",
        backgroundSize: "300% 300%",
        animation: "hero-gradient 12s ease infinite",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        {/* Eyebrow */}
        <p className="font-dm-mono text-[12px] text-brand tracking-[1.613px] uppercase">
          Coming soon · Reserve your spot
        </p>

        {/* Headline */}
        <h1 className="font-space-grotesk font-bold text-5xl sm:text-6xl lg:text-[80px] xl:text-[96px] text-white leading-tight max-w-[1050px]">
          User reported a{" "}
          <span className="text-brand-dim">bug</span>.
          <br />
          It&apos;s already{" "}
          <span className="text-brand">fixed.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-dm-sans font-light text-[18.4px] text-fg-secondary leading-[1.7] max-w-[565px]">
          Embed a feedback widget. Watch your agentic AI triage, branch, code,
          and merge — without a single human in the loop for high-confidence
          fixes.
        </p>

        {/* Email form */}
        <EmailForm hint="→ Get the news when we launch · 10 free runs" />
      </div>
    </section>
  );
}
