import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, GraduationCap, BookOpen, Brain, Shield, Smartphone, Building2, BarChart3, Users, FileText } from "lucide-react";

const products = [
  {
    id: "eduos",
    label: "School Operations",
    name: "Nyxion EduOS",
    tagline: "The operating system for your school.",
    description:
      "A complete AI-native school management platform. Manage students, teachers, attendance, fees, and communication — all in one place, with AI built into every module.",
    accent: "from-blue/20 to-blue/5",
    accentBorder: "border-blue/20",
    accentTag: "bg-blue/10 text-blue",
    accentBtn: "bg-blue text-white hover:bg-navy",
    accentIcon: "bg-blue/10 text-blue",
    href: "https://nyxion-eduos.vercel.app",
    icon: <GraduationCap size={26} />,
    features: [
      { icon: <Brain size={15} />, text: "AI Exam Generator & Lesson Planner" },
      { icon: <Shield size={15} />, text: "Fee Management & Defaulter Prediction" },
      { icon: <Sparkles size={15} />, text: "Risk Scoring & Report Card AI" },
      { icon: <BookOpen size={15} />, text: "WhatsApp Communication Built In" },
    ],
    packages: ["Starter", "Growth", "Elite"],
    stack: ["AI-Powered", "Multi-School", "WhatsApp API", "Cloud-Hosted"],
  },
  {
    id: "learnspace",
    label: "Learning Portal",
    name: "Nyxion LearnSpace",
    tagline: "Where teaching meets AI.",
    description:
      "A student and teacher portal with live exams, assignments, grades, timetables, coursebooks, and a full suite of AI tools — for both teachers and students.",
    accent: "from-violet-500/15 to-violet-500/5",
    accentBorder: "border-violet-500/20",
    accentTag: "bg-violet-500/10 text-violet-600",
    accentBtn: "bg-violet-600 text-white hover:bg-violet-700",
    accentIcon: "bg-violet-500/10 text-violet-600",
    href: "https://nyxion-learnspace.vercel.app",
    icon: <BookOpen size={26} />,
    features: [
      { icon: <Brain size={15} />, text: "Live Exams with Anti-Cheat Protection" },
      { icon: <Sparkles size={15} />, text: "AI Chatbot with Live Student Data" },
      { icon: <BookOpen size={15} />, text: "Notes, Timetable & Coursebooks" },
      { icon: <Shield size={15} />, text: "Plagiarism Checker & Feedback Writer" },
    ],
    packages: ["Students", "Teachers", "Admins"],
    stack: ["Llama 3.3 70B", "Real-time", "Android App", "Anti-Cheat"],
  },
  {
    id: "propflow",
    label: "Property Management",
    name: "Nyxion PropFlow",
    tagline: "The builder portal for Pakistani property developers.",
    description:
      "A complete property management platform for Pakistani builders and developers. Manage inventory, bookings, installment plans, and client communications — with AI built in by default.",
    accent: "from-emerald-500/15 to-emerald-500/5",
    accentBorder: "border-emerald-500/20",
    accentTag: "bg-emerald-500/10 text-emerald-600",
    accentBtn: "bg-emerald-600 text-white hover:bg-emerald-700",
    accentIcon: "bg-emerald-500/10 text-emerald-600",
    href: "https://nyxion-propflow.vercel.app",
    icon: <Building2 size={26} />,
    features: [
      { icon: <Building2 size={15} />, text: "Property & Unit Inventory Management" },
      { icon: <BarChart3 size={15} />, text: "AI Sales Analytics & Forecasting" },
      { icon: <Users size={15} />, text: "Client CRM & Installment Tracking" },
      { icon: <FileText size={15} />, text: "Automated Booking & Agreement Docs" },
    ],
    packages: ["Starter", "Growth", "Elite"],
    stack: ["AI-Powered", "Multi-Project", "CRM Built-In", "Cloud-Hosted"],
  },
];

export function Products() {
  return (
    <section id="products" className="py-28 bg-slate-50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue font-bold text-xs uppercase tracking-widest mb-4 block">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl text-navy mb-6 leading-tight">
            Built for Pakistan.<br className="hidden md:block" /> Powered by AI.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Three platforms. One ecosystem. EduOS runs the school. LearnSpace runs the classroom. PropFlow runs the property business.
            All powered by AI — built in by default, not bolted on.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`bg-white border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${p.accentBorder}`}
            >
              {/* Accent header */}
              <div className={`bg-gradient-to-br px-7 pt-7 pb-5 ${p.accent}`}>
                <div className="flex items-start justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${p.accentTag}`}>
                    {p.label}
                  </span>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${p.accentIcon}`}>
                    {p.icon}
                  </div>
                </div>
                <h3 className="text-navy font-bold text-2xl mb-1">{p.name}</h3>
                <p className="text-slate-500 text-sm font-medium">{p.tagline}</p>
              </div>

              {/* Body */}
              <div className="px-7 py-6 flex flex-col flex-1">
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5 mb-6">
                  {p.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${p.accentIcon}`}>
                        {f.icon}
                      </div>
                      <span className="text-slate-600 text-sm">{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-1.5 mb-7">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-sm hover:-translate-y-0.5 ${p.accentBtn}`}
                  >
                    View Platform <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Android app banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-navy rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Smartphone size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">
                Available on Android
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The Nyxion LearnSpace mobile app is available on Google Play. Students and teachers can access assignments, exams, grades, timetables, and AI tools from any Android device.
              </p>
            </div>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.nyxionlabs.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy font-bold text-sm hover:bg-blue hover:text-white transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Google Play <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Packages row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: "Starter",
              price: "PKR 5,999",
              setup: "PKR 10,000",
              desc: "Small schools, up to 200 students",
              color: "border-blue/20 bg-blue/5",
              enterprise: false,
            },
            {
              name: "Growth",
              price: "PKR 15,999",
              setup: "PKR 10,000",
              desc: "Medium schools, up to 500 students",
              color: "border-violet-500/20 bg-violet-500/5",
              highlight: true,
              enterprise: false,
            },
            {
              name: "Elite",
              price: "PKR 39,999",
              setup: "PKR 15,000",
              desc: "Large schools and chains, unlimited",
              color: "border-teal/20 bg-teal/5",
              enterprise: false,
            },
            {
              name: "Enterprise",
              price: "Custom",
              setup: "Custom",
              desc: "School networks, multi-campus chains, and large institutions",
              color: "border-slate-600 bg-slate-900",
              enterprise: true,
            },
          ].map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-6 text-center relative ${pkg.color} ${pkg.highlight ? "ring-2 ring-violet-500/30" : ""}`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              {pkg.enterprise && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  For Chains
                </span>
              )}
              <p className={`font-bold text-lg mb-1 ${pkg.enterprise ? "text-white" : "text-navy"}`}>{pkg.name}</p>
              <p className={`text-2xl font-bold mb-1 ${pkg.enterprise ? "text-white" : "text-navy"}`}>
                {pkg.price === "Custom"
                  ? <span>Custom</span>
                  : <>{pkg.price}<span className="text-sm font-normal text-slate-400">/mo</span></>
                }
              </p>
              <p className={`text-xs leading-relaxed mb-3 ${pkg.enterprise ? "text-slate-400" : "text-slate-500"}`}>{pkg.desc}</p>
              {pkg.enterprise ? (
                <a
                  href="#contact"
                  className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-medium hover:bg-white/20 transition-colors"
                >
                  Contact us
                </a>
              ) : (
                <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-[11px] font-medium">
                  {pkg.setup} one-time setup
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy text-white font-bold hover:bg-blue transition-colors duration-200 shadow-lg shadow-navy/20 hover:shadow-blue/30 hover:-translate-y-0.5 transform"
          >
            Get a free demo <ArrowUpRight size={18} />
          </a>
          <p className="text-slate-400 text-sm mt-3">No credit card required. Setup in under one hour.</p>
        </div>

      </div>
    </section>
  );
}
