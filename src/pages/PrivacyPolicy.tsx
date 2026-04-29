import { Navbar, Footer } from "@/components/layout/Shared";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-slate-700">{title}</h2>
    <div className="space-y-3 text-slate-400 leading-relaxed text-sm">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background selection:bg-blue/30 selection:text-navy">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 block">
            Legal
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">
            Last updated: <strong className="text-white">April 2026</strong>
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed">
            This Privacy Policy explains how Nyxion Labs ("we", "us", or "our") collects, uses, stores,
            and protects your personal information when you use our products — Nyxion EduOS, Nyxion
            LearnSpace, and the Nyxion mobile application (collectively, the "Services").
          </p>
        </div>

        <Section title="1. Who We Are">
          <p>
            Nyxion Labs is a software company that builds AI-native school management and learning
            platforms for educational institutions in Pakistan and beyond.
          </p>
          <p>
            For any privacy-related questions, contact us at:{" "}
            <a href="mailto:hello@nyxionlabs.com" className="text-blue-400 hover:underline">
              hello@nyxionlabs.com
            </a>
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect the following categories of information:</p>
          <div className="space-y-3 mt-2">
            {[
              {
                label: "Account Information",
                desc: "Name, email address, role (student, teacher, or admin), school affiliation, class, roll number, and password (stored as a secure hash).",
              },
              {
                label: "Academic Data",
                desc: "Assignments, submissions, grades, exam attempts, attendance records, and notes uploaded by teachers.",
              },
              {
                label: "Financial Data (EduOS only)",
                desc: "Fee payment records, payment status, and outstanding balances associated with student accounts.",
              },
              {
                label: "Usage Data",
                desc: "Pages visited, features used, login timestamps, and device/browser information for performance and security purposes.",
              },
              {
                label: "AI Interactions",
                desc: "Prompts submitted to AI tools (exam generators, chatbot, plagiarism checker) to provide and improve the service.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-white font-medium text-sm mb-1">{label}</p>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="space-y-2 mt-2">
            {[
              "Provide, operate, and maintain the Services",
              "Authenticate users and manage account access",
              "Enable teachers to manage assignments, exams, attendance, and grades",
              "Enable students to submit work and view their academic progress",
              "Power AI features such as exam generation, plagiarism detection, and the AI chatbot",
              "Send important notifications (e.g. assignment deadlines, exam schedules)",
              "Analyse usage patterns to improve platform performance and features",
              "Comply with legal obligations",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="4. Data Sharing">
          <p>
            We do <strong className="text-white">not</strong> sell, rent, or trade your personal
            information to third parties.
          </p>
          <p>We may share data only in the following limited circumstances:</p>
          <ul className="space-y-2 mt-2">
            {[
              "With your school administrator, who manages your institution's account on EduOS or LearnSpace",
              "With infrastructure providers (Railway for hosting, Groq for AI processing) solely to operate the Services — these providers are contractually bound to protect your data",
              "If required by law, court order, or governmental authority",
              "In the event of a merger or acquisition, with notice provided to affected users",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="5. Data Storage and Security">
          <p>
            Your data is stored on secure cloud infrastructure hosted by Railway. We implement
            industry-standard security measures including:
          </p>
          <ul className="space-y-2 mt-2">
            {[
              "Passwords are hashed using bcrypt — we never store plain-text passwords",
              "All data is transmitted over HTTPS/TLS encryption",
              "Authentication tokens are issued as signed JWTs with expiry",
              "Database access is restricted to authorised services only",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            While we take reasonable precautions, no system is 100% secure. We encourage users to
            keep their credentials confidential and report any suspected security issues to{" "}
            <a href="mailto:hello@nyxionlabs.com" className="text-blue-400 hover:underline">
              hello@nyxionlabs.com
            </a>
            .
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain your personal data for as long as your account is active or as needed to
            provide the Services.
          </p>
          <p>
            If you request account deletion, we will permanently delete your account and all
            associated personal data within <strong className="text-white">7 business days</strong>.
            Some anonymised, aggregated data (e.g. usage statistics) may be retained for analytical
            purposes and cannot be linked back to you.
          </p>
          <p>
            School administrators may retain academic records independently in accordance with their
            institution's data retention policies.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the right to:</p>
          <ul className="space-y-2 mt-2">
            {[
              "Access the personal data we hold about you",
              "Correct inaccurate or incomplete information",
              "Request deletion of your account and associated data",
              "Object to certain processing of your data",
              "Receive a copy of your data in a portable format",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email us at{" "}
            <a href="mailto:hello@nyxionlabs.com" className="text-blue-400 hover:underline">
              hello@nyxionlabs.com
            </a>{" "}
            or use our{" "}
            <a href="/delete-account" className="text-blue-400 hover:underline">
              account deletion page
            </a>
            .
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            Our Services are used in school environments and may be accessed by students under the
            age of 18. We do not knowingly collect personal data from children without verifiable
            consent from a parent, guardian, or school administrator.
          </p>
          <p>
            School administrators are responsible for ensuring that student accounts are created
            in compliance with applicable laws and with appropriate authorisation.
          </p>
        </Section>

        <Section title="9. Cookies and Tracking">
          <p>
            We use minimal cookies and local storage solely for authentication (storing your session
            token) and user preferences. We do not use advertising cookies or third-party tracking
            technologies.
          </p>
        </Section>

        <Section title="10. Third-Party Services">
          <p>Our Services integrate with the following third-party providers:</p>
          <div className="space-y-2 mt-2">
            {[
              { name: "Railway", purpose: "Cloud infrastructure and database hosting" },
              { name: "Groq (Llama 3.3 70B)", purpose: "AI processing for exam generation, chatbot, and analysis features" },
              { name: "Vercel", purpose: "Frontend hosting for web applications" },
              { name: "WhatsApp Business API", purpose: "School communication and parent notifications (EduOS only)" },
            ].map(({ name, purpose }) => (
              <div key={name} className="flex items-start gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="text-white">{name}</strong>
                  <span className="text-slate-400"> — {purpose}</span>
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the
            "Last updated" date at the top of this page. For significant changes, we will notify
            users via email or an in-app notice.
          </p>
          <p>
            Continued use of the Services after changes are posted constitutes your acceptance of
            the updated policy.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or how
            we handle your data, please contact us:
          </p>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 mt-3">
            <p className="text-white font-semibold mb-1">Nyxion Labs</p>
            <p className="text-slate-400 text-sm">
              Email:{" "}
              <a href="mailto:hello@nyxionlabs.com" className="text-blue-400 hover:underline">
                hello@nyxionlabs.com
              </a>
            </p>
            <p className="text-slate-400 text-sm mt-1">
              Website:{" "}
              <a href="https://nyxionlabs.com" className="text-blue-400 hover:underline">
                nyxionlabs.com
              </a>
            </p>
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}