import { CheckCircle2, Star } from "lucide-react";

export function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue font-bold text-xs uppercase tracking-widest mb-4 block">Case Studies</span>
          <h2 className="text-4xl md:text-5xl text-navy mb-6">Results that speak for themselves</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { ind: "Retail & FMCG", title: "SKU Demand Forecasting", desc: "GBR + SARIMA reduced stockouts by 94% and cut inventory waste.", m1: "94%", l1: "Stockout Reduction", m2: "+18%", l2: "Revenue", bg: "from-blue/10 to-blue/5" },
            { ind: "Financial Services", title: "Real-time Fraud Detection", desc: "XGBoost scoring at <12ms latency across 50K daily transactions.", m1: "$2.3M", l1: "Protected", m2: "<0.3%", l2: "False Positives", bg: "from-rose-500/10 to-rose-500/5" },
            { ind: "Healthcare", title: "Clinical NLP Automation", desc: "Automated extraction from 340K clinical documents using fine-tuned BERT.", m1: "8x", l1: "Faster Processing", m2: "99.1%", l2: "Accuracy", bg: "from-teal/10 to-teal/5" }
          ].map((c, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className={`h-32 bg-gradient-to-br ${c.bg} flex items-center px-8`}>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-white/50 px-3 py-1 rounded-full backdrop-blur-md">{c.ind}</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy mb-3">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{c.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-border/50">
                    <div className="text-xl font-black text-navy">{c.m1}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">{c.l1}</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-border/50">
                    <div className="text-xl font-black text-navy">{c.m2}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">{c.l2}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyNyxion() {
  return (
    <section id="why" className="py-24 bg-slate-50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl text-navy mb-8">Why choose Nyxion Labs?</h2>
            <div className="space-y-6">
              {[
                { title: "End-to-End ML Ownership", desc: "From dirty database tables to production APIs. We handle the entire pipeline so you don't need to hire 5 different specialists." },
                { title: "Enterprise-grade MLOps", desc: "Models that degrade silently are useless. We implement automated retraining, drift detection, and CI/CD for data." },
                { title: "Explainable AI (XAI)", desc: "Black boxes don't pass compliance. We build models that explain their decisions using SHAP and LIME." },
                { title: "Business-First Metrics", desc: "We optimize for revenue, retention, and risk — not just academic metrics like F1-score." }
              ].map((w, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 text-blue"><CheckCircle2 /></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">{w.title}</h4>
                    <p className="text-slate-500 text-sm">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue/20 blur-[100px] rounded-full mix-blend-screen" />
            <div className="relative z-10">
              <h3 className="text-2xl font-display text-white mb-8">Delivering consistent excellence.</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "50+", l: "Models Shipped" },
                  { v: "35+", l: "Active Clients" },
                  { v: "8wk", l: "Avg Delivery" },
                  { v: "97%", l: "Success Rate" }
                ].map((s, i) => (
                  <div key={i} className="glass-panel-dark p-6 rounded-2xl">
                    <div className="text-3xl font-black text-white mb-1">{s.v}</div>
                    <div className="text-xs font-bold uppercase text-white/50">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
