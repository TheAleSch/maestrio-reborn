import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Maestrio",
  description: "How Maestrio collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black px-6 sm:px-12 lg:px-32 py-24">
      <div className="max-w-[720px] mx-auto flex flex-col gap-10">
        {/* Back */}
        <Link
          href="/"
          className="font-dm-mono text-[12px] text-brand tracking-[1.613px] uppercase hover:opacity-70 transition-opacity w-fit"
        >
          ← Back
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-3">
          <h1 className="font-space-grotesk font-bold text-4xl text-white">
            Privacy Policy
          </h1>
          <p className="font-dm-mono text-[12px] text-fg-muted tracking-[1.2px] uppercase">
            Last updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 font-dm-sans font-light text-[15px] text-fg-secondary leading-[1.75]">
          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              1. Who we are
            </h2>
            <p>
              Maestrio (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates{" "}
              <span className="text-white">maestrio.ai</span>. This page explains
              how we handle personal information submitted through our website.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              2. Information we collect
            </h2>
            <p>
              We collect only the email address you voluntarily submit through
              our early-access waitlist form. We do not use cookies, analytics
              trackers, or any third-party tracking scripts beyond what our
              hosting platform (Vercel) collects by default for operational
              purposes.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              3. How we use your information
            </h2>
            <p>Your email address is used solely to:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
              <li>Notify you when Maestrio launches.</li>
              <li>Send occasional product updates you opted into.</li>
            </ul>
            <p>
              We do not sell, rent, or share your email address with any third
              party for marketing purposes.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              4. Data retention
            </h2>
            <p>
              We retain your email address until you request deletion or
              unsubscribe. To remove your data, email us at{" "}
              <a
                href="mailto:privacy@maestrio.ai"
                className="text-brand hover:opacity-70 transition-opacity"
              >
                privacy@maestrio.ai
              </a>{" "}
              and we will delete it within 30 days.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              5. Security
            </h2>
            <p>
              We take reasonable measures to protect your information. However,
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              6. Changes to this policy
            </h2>
            <p>
              We may update this policy as our product evolves. Material changes
              will be communicated to waitlist subscribers via email.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              7. Contact
            </h2>
            <p>
              Questions? Reach us at{" "}
              <a
                href="mailto:privacy@maestrio.ai"
                className="text-brand hover:opacity-70 transition-opacity"
              >
                privacy@maestrio.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
