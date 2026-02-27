import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Maestrio",
  description:
    "How Maestrio collects, uses, and protects your information, including code and repository data.",
};

// ─────────────────────────────────────────────────────────────────────────────
// To add a section: push a new object to this array.
// To remove: delete the object.
// To reorder: move objects up or down.
// The sidebar and anchors update automatically.
// ─────────────────────────────────────────────────────────────────────────────

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <p>
          Maestrio (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates{" "}
          <strong className="text-white">maestrio.ai</strong> and related
          services (collectively, the &quot;Service&quot;). This Privacy Policy
          explains how we collect, use, disclose, and safeguard your
          information when you use our Service, including when our agentic AI
          reads and processes your code repositories.
        </p>
        <p>
          By using the Service you consent to the practices described in this
          policy. If you do not agree, please discontinue use immediately.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We collect information in three ways:</p>
        <p className="text-white/80">Information you provide</p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>Email address (waitlist and account registration)</li>
          <li>Name and company name (account setup)</li>
          <li>Billing information processed by our payment provider</li>
          <li>Communications you send to our support team</li>
        </ul>
        <p className="text-white/80">Information collected automatically</p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>IP address and approximate location</li>
          <li>Browser type, operating system, and device identifiers</li>
          <li>Pages visited and interactions within the Service</li>
          <li>Crash reports and performance telemetry</li>
        </ul>
        <p className="text-white/80">Data from connected services</p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            GitHub repository metadata (names, branches, commit history) when
            you connect your account
          </li>
          <li>
            Source code files within the directories you explicitly authorize
          </li>
          <li>
            Pull request contents, diff data, and CI/CD output associated with
            Maestrio-generated PRs
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "code-and-repository-data",
    title: "Code and Repository Data",
    content: (
      <>
        <p>
          Because Maestrio&apos;s core function is to read, understand, and
          modify source code, we want to be transparent about how your code is
          handled:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            <strong className="text-white/80">Scope:</strong> We access only
            the directories and repositories you explicitly authorize. You can
            revoke access at any time from your account settings.
          </li>
          <li>
            <strong className="text-white/80">Transit:</strong> Code is
            transmitted to AI inference providers over encrypted TLS connections
            solely to generate fixes.
          </li>
          <li>
            <strong className="text-white/80">Storage:</strong> We do not
            persistently store your raw source code beyond the duration required
            to process a single fix request (typically seconds to minutes).
          </li>
          <li>
            <strong className="text-white/80">Training:</strong> Your code is
            never used to train Maestrio&apos;s models or any third-party models
            without your explicit written consent.
          </li>
          <li>
            <strong className="text-white/80">Isolation:</strong> Code
            processed for one customer is never accessible to another.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-your-information",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>Provide, operate, and improve the Service</li>
          <li>Authenticate users and enforce access controls</li>
          <li>
            Pass relevant code context to AI inference providers to generate
            fixes and pull requests
          </li>
          <li>Notify users when fixes ship and close the feedback loop</li>
          <li>Respond to support inquiries and resolve issues</li>
          <li>
            Send product updates and launch announcements (waitlist members)
          </li>
          <li>
            Generate aggregated, anonymized analytics about Service performance
          </li>
          <li>Detect and prevent fraud, abuse, and security incidents</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell your personal data. We do not use it for targeted
          advertising.
        </p>
      </>
    ),
  },
  {
    id: "ai-training",
    title: "AI Training and Model Improvement",
    content: (
      <>
        <p>
          Maestrio uses third-party AI inference APIs (currently Anthropic and
          OpenAI) to power its code-fix engine. The following applies:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            We operate under enterprise API agreements with both providers,
            which restrict use of API inputs for model training.
          </li>
          <li>
            Maestrio itself does not use your code or feedback data to train
            any machine learning model unless you expressly opt in.
          </li>
          <li>
            If you bring your own API key (BYOK), your data is governed
            directly by your agreement with the relevant AI provider.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing and Sub-processors",
    content: (
      <>
        <p>
          We share your information only as necessary to operate the Service:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            <strong className="text-white/80">AI Inference:</strong> Anthropic,
            OpenAI — receive code context to generate fixes
          </li>
          <li>
            <strong className="text-white/80">Hosting &amp; CDN:</strong> Vercel
            — serves the application
          </li>
          <li>
            <strong className="text-white/80">Source Control:</strong> GitHub —
            creates branches and pull requests on your behalf
          </li>
          <li>
            <strong className="text-white/80">Payments:</strong> Stripe —
            handles billing; we never store raw card numbers
          </li>
          <li>
            <strong className="text-white/80">Email:</strong> Resend — delivers
            transactional and waitlist emails
          </li>
        </ul>
        <p>
          We do not sell, rent, or broker your data to any third party. We may
          disclose information when required by law, court order, or to protect
          user safety.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention and Deletion",
    content: (
      <>
        <p>
          We retain personal data for as long as your account is active or as
          needed to provide the Service. Specifically:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            <strong className="text-white/80">Account data:</strong> Retained
            until account deletion plus a 30-day grace period for recovery
          </li>
          <li>
            <strong className="text-white/80">Code data:</strong> Not stored
            beyond active fix processing (see Code and Repository Data above)
          </li>
          <li>
            <strong className="text-white/80">Logs and telemetry:</strong>{" "}
            Retained for up to 90 days for security and debugging
          </li>
          <li>
            <strong className="text-white/80">Waitlist emails:</strong> Retained
            until launch or until you unsubscribe
          </li>
        </ul>
        <p>
          To request deletion of your data, email{" "}
          <a
            href="mailto:privacy@maestrio.ai"
            className="text-brand hover:opacity-70 transition-opacity"
          >
            privacy@maestrio.ai
          </a>
          . We will process your request within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <>
        <p>We implement industry-standard security measures including:</p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>TLS encryption for all data in transit</li>
          <li>Encryption at rest for stored data</li>
          <li>
            Role-based access controls limiting internal access to data
          </li>
          <li>Regular dependency audits and vulnerability scanning</li>
          <li>Isolated execution environments per customer</li>
        </ul>
        <p>
          No system is 100% secure. In the event of a breach affecting your
          personal data, we will notify you and relevant authorities as required
          by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: (
      <p>
        Maestrio is operated from the United States. If you access the Service
        from the European Economic Area, United Kingdom, or other jurisdictions
        with data protection laws, your information may be transferred to and
        processed in the U.S. We rely on Standard Contractual Clauses (SCCs)
        and other lawful transfer mechanisms where applicable. Enterprise
        customers may request a Data Processing Agreement (DPA) by contacting{" "}
        <a
          href="mailto:privacy@maestrio.ai"
          className="text-brand hover:opacity-70 transition-opacity"
        >
          privacy@maestrio.ai
        </a>
        .
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate data</li>
          <li>
            Request deletion of your data (&quot;right to be forgotten&quot;)
          </li>
          <li>Restrict or object to certain processing</li>
          <li>
            Data portability (receive your data in a structured format)
          </li>
          <li>
            Withdraw consent at any time where processing is consent-based
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact{" "}
          <a
            href="mailto:privacy@maestrio.ai"
            className="text-brand hover:opacity-70 transition-opacity"
          >
            privacy@maestrio.ai
          </a>
          . We will respond within 30 days (or the timeframe required by
          applicable law).
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <>
        <p>We use a minimal set of cookies necessary to operate the Service:</p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            <strong className="text-white/80">Session cookies:</strong> To keep
            you logged in during a browser session
          </li>
          <li>
            <strong className="text-white/80">Security cookies:</strong> CSRF
            protection tokens
          </li>
        </ul>
        <p>
          We do not use third-party advertising or tracking cookies. You can
          disable cookies in your browser settings, though core functionality
          may be affected.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy as our Service evolves. We will
        notify you of material changes by email (for registered users and
        waitlist members) and by updating the &quot;Last updated&quot; date at
        the top of this page. Continued use of the Service after changes are
        posted constitutes acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        Questions about this policy or your data? Email us at{" "}
        <a
          href="mailto:privacy@maestrio.ai"
          className="text-brand hover:opacity-70 transition-opacity"
        >
          privacy@maestrio.ai
        </a>
        .
        <br />
        <br />
        Maestrio · maestrio.ai
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="February 2026"
      sections={sections}
    />
  );
}
