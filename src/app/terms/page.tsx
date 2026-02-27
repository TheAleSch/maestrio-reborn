import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Maestrio",
  description: "Terms governing your use of maestrio.ai.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="font-dm-mono text-[12px] text-fg-muted tracking-[1.2px] uppercase">
            Last updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 font-dm-sans font-light text-[15px] text-fg-secondary leading-[1.75]">
          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              1. Acceptance
            </h2>
            <p>
              By accessing <span className="text-white">maestrio.ai</span> or
              submitting your email address, you agree to these Terms of Service.
              If you do not agree, please do not use this website.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              2. Description of service
            </h2>
            <p>
              Maestrio is a pre-launch product. This website is a coming-soon
              landing page used to collect early-access registrations. No product
              or service is currently being sold or provided. Features described
              on this page represent planned functionality and are subject to
              change.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              3. Waitlist registration
            </h2>
            <p>
              Submitting your email address registers you for early-access
              updates. This does not constitute a purchase, subscription, or
              guarantee of access to any future product. We reserve the right to
              limit, defer, or cancel early-access invitations at our discretion.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              4. Intellectual property
            </h2>
            <p>
              All content on this website — including the Maestrio name, logo,
              copy, and design — is owned by Maestrio and protected by applicable
              intellectual property laws. Third-party brand names and logos
              displayed in the Integrations section belong to their respective
              owners and are used solely to indicate compatibility.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              5. Disclaimer of warranties
            </h2>
            <p>
              This website is provided &quot;as is&quot; without warranties of any kind.
              We make no representations regarding the accuracy or completeness
              of any information on this site.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              6. Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, Maestrio shall not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of this website.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              7. Changes
            </h2>
            <p>
              We may update these terms at any time. Continued use of the website
              after changes are posted constitutes acceptance of the revised
              terms.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-space-grotesk font-medium text-[18px] text-white">
              8. Contact
            </h2>
            <p>
              Questions? Reach us at{" "}
              <a
                href="mailto:legal@maestrio.ai"
                className="text-brand hover:opacity-70 transition-opacity"
              >
                legal@maestrio.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
