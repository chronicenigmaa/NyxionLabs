import { useState } from "react";
import { Navbar, Footer } from "@/components/layout/Shared";

export default function DeleteAccount() {
  const [form, setForm] = useState({ name: "", email: "", app: "LearnSpace", reason: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Send via mailto fallback — works without a backend
    const subject = encodeURIComponent(`Account Deletion Request — ${form.app}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nApp: ${form.app}\nReason: ${form.reason || "Not provided"}\n\nPlease delete my account and all associated data.`
    );
    window.location.href = `mailto:hello@nyxionlabs.com?subject=${subject}&body=${body}`;
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  }

  return (
    <div className="min-h-screen bg-background selection:bg-blue/30 selection:text-navy">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 block">
            Data &amp; Privacy
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">
            Delete Your Account
          </h1>
          <p className="text-slate-400 leading-relaxed">
            You can request the deletion of your account and all associated data at any time.
            We will process your request within <strong className="text-white">7 business days</strong> and
            send a confirmation to your registered email address.
          </p>
        </div>

        {/* What gets deleted */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-8">
          <h2 className="text-white font-semibold mb-4">What will be deleted</h2>
          <ul className="space-y-2">
            {[
              "Your account credentials and profile information",
              "All assignments, submissions, and grades associated with your account",
              "Attendance records linked to your account",
              "Any uploaded files and notes",
              "All AI-generated content tied to your account",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-500 text-xs mt-4 border-t border-slate-700 pt-4">
            Note: Deletion is permanent and cannot be undone. School-level records (e.g. fee history)
            managed by your school administrator are not affected by this request.
          </p>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="bg-green-900/30 border border-green-500/40 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Request Submitted</h3>
            <p className="text-slate-400 text-sm">
              Your deletion request has been sent to <strong className="text-white">hello@nyxionlabs.com</strong>.
              We will process it within 7 business days and email you a confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={e => set("name", e.target.value)}
                placeholder="Your full name"
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Registered Email Address</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => set("email", e.target.value)}
                placeholder="email@example.com"
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">App / Platform</label>
              <select
                value={form.app}
                onChange={e => set("app", e.target.value)}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
              >
                <option value="LearnSpace">Nyxion LearnSpace</option>
                <option value="EduOS">Nyxion EduOS</option>
                <option value="Both">Both platforms</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Reason for deletion <span className="text-slate-500 font-normal">(optional)</span>
              </label>
              <textarea
                value={form.reason}
                onChange={e => set("reason", e.target.value)}
                placeholder="Help us improve by letting us know why you're leaving..."
                rows={3}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
              />
            </div>

            <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4">
              <p className="text-amber-300 text-sm">
                <strong>This action is irreversible.</strong> Once deleted, your account and all associated
                data cannot be recovered. Make sure you have saved anything you need before submitting.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
            >
              {loading ? "Submitting..." : "Submit Deletion Request"}
            </button>

            <p className="text-center text-slate-500 text-xs">
              Questions? Email us at{" "}
              <a href="mailto:hello@nyxionlabs.com" className="text-blue-400 hover:underline">
                hello@nyxionlabs.com
              </a>
            </p>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}