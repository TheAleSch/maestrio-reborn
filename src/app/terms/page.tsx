import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Maestrio",
  description: "Terms governing your use of Maestrio and its agentic AI code-fix service.",
};

// ─────────────────────────────────────────────────────────────────────────────
// To add a section: push a new object to this array.
// To remove: delete the object.
// To reorder: move objects up or down.
// The sidebar and anchors update automatically.
// ─────────────────────────────────────────────────────────────────────────────

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing <strong className="text-white">maestrio.ai</strong>,
        creating an account, submitting your email address, or using any part
        of the Service, you agree to be bound by these Terms of Service
        (&quot;Terms&quot;). If you are accepting on behalf of an organization,
        you represent that you have authority to bind that organization. If you
        do not agree, do not use the Service.
      </p>
    ),
  },
  {
    id: "description",
    title: "Description of Service",
    content: (
      <>
        <p>
          Maestrio provides an agentic AI platform that:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            Embeds a feedback widget into your software product to collect
            structured bug reports and feature requests
          </li>
          <li>
            Analyzes submissions using a confidence-scoring engine to determine
            the appropriate response path
          </li>
          <li>
            Reads authorized source code repositories via GitHub integration
          </li>
          <li>
            Uses AI (powered by Anthropic Claude or OpenAI GPT models) to
            generate code fixes, open branches, run tests, and submit pull
            requests
          </li>
          <li>
            Provides a Kanban board for managing pending and auto-resolved
            submissions
          </li>
        </ul>
        <p>
          Maestrio is currently in pre-launch. Features described on
          maestrio.ai represent planned functionality and are subject to change.
          Waitlist registration does not guarantee access to any future product.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility and Accounts",
    content: (
      <>
        <p>
          You must be at least 18 years old and capable of forming a binding
          contract to use the Service. By registering, you agree to:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>Provide accurate and complete registration information</li>
          <li>
            Keep your credentials secure and notify us immediately of any
            unauthorized access
          </li>
          <li>
            Be responsible for all activity that occurs under your account
          </li>
        </ul>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these Terms or that we determine, in our sole discretion, are
          engaging in harmful or fraudulent activity.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use Policy",
    content: (
      <>
        <p>You agree not to use the Service to:</p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            Submit repositories you do not own or are not authorized to
            modify
          </li>
          <li>
            Attempt to access other customers&apos; data or codebases
          </li>
          <li>
            Use the Service to generate malicious code, malware, or exploits
          </li>
          <li>
            Circumvent access controls, rate limits, or security mechanisms
          </li>
          <li>
            Resell or sublicense access to the Service without written
            permission
          </li>
          <li>
            Use the Service in any way that violates applicable laws or
            regulations
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the
            Service
          </li>
        </ul>
        <p>
          Violation of this policy may result in immediate account termination
          and, where applicable, referral to law enforcement.
        </p>
      </>
    ),
  },
  {
    id: "code-access",
    title: "Code Access and Repository Permissions",
    content: (
      <>
        <p>
          When you connect a GitHub repository to Maestrio, you grant us a
          limited, revocable license to:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            Read source code within the directories you specify
          </li>
          <li>
            Create branches, commits, and pull requests on your behalf
          </li>
          <li>
            Pass relevant code context to AI inference providers to generate
            fixes (see our Privacy Policy for details on how this is handled)
          </li>
        </ul>
        <p>
          This license is scoped to the repositories and directories you
          explicitly authorize. You can revoke access at any time from your
          account settings or via GitHub&apos;s OAuth application management.
          You remain solely responsible for ensuring you have the rights to
          connect any repository to the Service.
        </p>
      </>
    ),
  },
  {
    id: "ai-output",
    title: "AI-Generated Code and Output",
    content: (
      <>
        <p>
          Maestrio uses large language models to generate code fixes. You
          acknowledge that:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            AI-generated code may contain errors, security vulnerabilities, or
            unintended behavior. You are responsible for reviewing all
            AI-generated output before merging into production.
          </li>
          <li>
            Maestrio makes no warranty that generated fixes are correct,
            complete, or fit for any particular purpose.
          </li>
          <li>
            Auto-merge features (for high-confidence fixes) are opt-in. You
            configure the confidence thresholds and bear responsibility for
            enabling them.
          </li>
          <li>
            Ownership of AI-generated code incorporated into your codebase
            remains with you, subject to the terms of the underlying AI
            provider and applicable law.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          <strong className="text-white/80">Maestrio IP:</strong> The Service,
          including its software, design, branding, and documentation, is owned
          by Maestrio and protected by intellectual property laws. These Terms
          do not grant you any rights in Maestrio&apos;s IP except the limited
          right to use the Service as described herein.
        </p>
        <p>
          <strong className="text-white/80">Your IP:</strong> You retain all
          ownership rights to your source code, repositories, and feedback data.
          Nothing in these Terms transfers ownership of your code to Maestrio.
        </p>
        <p>
          <strong className="text-white/80">Third-party brands:</strong>{" "}
          Anthropic, OpenAI, GitHub, and Slack names and logos displayed on
          maestrio.ai belong to their respective owners and are used solely to
          indicate integration compatibility. Maestrio is not affiliated with or
          endorsed by those companies.
        </p>
      </>
    ),
  },
  {
    id: "byok",
    title: "Bring Your Own Keys (BYOK)",
    content: (
      <>
        <p>
          You may provide your own API keys for Anthropic or OpenAI (&quot;BYOK
          Mode&quot;). In BYOK Mode:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            AI token costs are billed directly by the relevant provider under
            your agreement with them
          </li>
          <li>
            Your usage is subject to that provider&apos;s usage policies and
            rate limits
          </li>
          <li>
            Maestrio acts as an orchestration layer only and is not responsible
            for the provider&apos;s availability or pricing
          </li>
        </ul>
        <p>
          When using Maestrio-hosted keys, token costs are included in your
          Maestrio subscription at no additional markup.
        </p>
      </>
    ),
  },
  {
    id: "payment",
    title: "Billing and Payment",
    content: (
      <>
        <p>
          Pricing and subscription terms will be published at launch.
          Pre-launch waitlist registration is free and does not create any
          payment obligation. When the Service launches:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
          <li>
            Subscriptions are billed in advance on a recurring basis
          </li>
          <li>
            All fees are non-refundable except where required by law or as
            stated in the applicable plan
          </li>
          <li>
            Failure to pay may result in suspension or termination of access
          </li>
          <li>
            We reserve the right to change pricing with 30 days&apos; notice
            to existing subscribers
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "availability",
    title: "Service Availability",
    content: (
      <p>
        We aim for high availability but do not guarantee uninterrupted access.
        The Service may be unavailable due to maintenance, updates, or events
        outside our control. We will provide advance notice of planned
        maintenance where feasible. Maestrio is not liable for losses resulting
        from Service downtime or unavailability.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
        WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
        LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, NON-INFRINGEMENT, OR ACCURACY OF AI-GENERATED OUTPUT. USE OF
        THE SERVICE IS AT YOUR SOLE RISK.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <p>
        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, MAESTRIO SHALL NOT
        BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
        PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR
        BUSINESS INTERRUPTION — ARISING OUT OF OR RELATED TO YOUR USE OF THE
        SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. MAESTRIO&apos;S
        TOTAL CUMULATIVE LIABILITY TO YOU SHALL NOT EXCEED THE GREATER OF (A)
        AMOUNTS PAID BY YOU TO MAESTRIO IN THE 12 MONTHS PRECEDING THE CLAIM,
        OR (B) USD $100.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify, defend, and hold harmless Maestrio and its
        officers, directors, employees, and agents from any claims, damages,
        losses, liabilities, costs, and expenses (including reasonable
        attorneys&apos; fees) arising out of or related to: (a) your use of the
        Service; (b) your violation of these Terms; (c) your violation of any
        third-party right, including intellectual property rights; or (d) any
        code changes merged into production as a result of Maestrio-generated
        pull requests that you approved.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law and Disputes",
    content: (
      <p>
        These Terms are governed by the laws of the State of Delaware, USA,
        without regard to conflict-of-law principles. Any dispute arising under
        these Terms shall be resolved by binding arbitration in accordance with
        the AAA Commercial Arbitration Rules, except that either party may seek
        injunctive relief in a court of competent jurisdiction for matters
        involving intellectual property or unauthorized access. You waive any
        right to participate in a class-action lawsuit or class-wide arbitration.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: (
      <p>
        We may update these Terms at any time. We will notify registered users
        of material changes by email at least 14 days before the changes take
        effect. Continued use of the Service after the effective date
        constitutes acceptance of the revised Terms. If you disagree with
        changes, you may terminate your account before the effective date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        Questions about these Terms?{" "}
        <a
          href="mailto:legal@maestrio.ai"
          className="text-brand hover:opacity-70 transition-opacity"
        >
          legal@maestrio.ai
        </a>
        <br />
        <br />
        Maestrio · maestrio.ai
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="February 2026"
      sections={sections}
    />
  );
}
