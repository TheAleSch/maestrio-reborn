import { EmailForm } from "@/components/EmailForm";

export function CTA() {
  return (
    <section id="signup" className="py-16 px-6 sm:px-12 flex justify-center">
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
        <EmailForm hint="Get 10 free runs" className="items-center" />
      </div>
    </section>
  );
}
