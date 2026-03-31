import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, BarChart3, ShieldAlert, Zap } from "lucide-react";

function CountUp({
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(value);
        },
      });
      return () => controls.stop();
    }
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const caseSnapshots = [
  {
    Icon: BarChart3,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    tag: "Retail / FMCG",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "SKU-Level Demand Forecasting",
    subtitle: "National FMCG Distributor",
    metrics: [
      { value: "94%", label: "Stockout reduction" },
      { value: "+18%", label: "Revenue uplift" },
      { value: "8 wks", label: "To production" },
    ],
  },
  {
    Icon: ShieldAlert,
    iconBg: "bg-red-500/20",
    iconColor: "text-red-400",
    tag: "Financial Services",
    tagColor: "text-red-400 bg-red-500/10 border-red-500/20",
    title: "Real-time Fraud Detection",
    subtitle: "Sub-12ms latency · 50K+ daily txns",
    metrics: [
      { value: "Rs 2.3M", label: "Protected monthly" },
      { value: "97.4%", label: "Recall" },
      { value: "<0.3%", label: "False positive rate" },
    ],
  },
  {
    Icon: Zap,
    iconBg: "bg-teal-500/20",
    iconColor: "text-teal-400",
    tag: "Healthcare",
    tagColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    title: "Clinical NLP Automation",
    subtitle: "340K patient documents automated",
    metrics: [
      { value: "8×", label: "Faster processing" },
      { value: "99.1%", label: "Extraction accuracy" },
      { value: "ICD-10", label: "Auto-coded" },
    ],
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-navy">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-blue/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-teal/20 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Headline & CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue/30 bg-blue/10 text-blue-light text-sm font-bold tracking-wide mb-8">
              <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
              Enterprise AI Solutions
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6">
              Stop Piloting AI.<br />
              <strong className="font-semibold text-gradient">Start Deploying It.</strong>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              Nyxion Labs takes you from messy data to a production-ready AI model in 8 weeks —
              no endless pilots, no broken promises, just results you can measure.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-blue hover:bg-blue-dark text-white font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-1 flex items-center gap-2"
              >
                Start a Project <ArrowRight size={20} />
              </a>
              <a
                href="#work"
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                View Our Work
              </a>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-white/30">
                Trusted across
              </span>
              <div className="flex gap-2">
                {["Fintech", "Retail", "Healthcare", "Logistics"].map((ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-semibold"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Recent Work snapshot cards ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="glass-panel-dark rounded-3xl p-8 relative overflow-hidden">

              {/* Panel header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">Recent Work</h3>
                <a
                  href="#work"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  View all <ArrowRight size={12} />
                </a>
              </div>

              {/* Case snapshot cards */}
              <div className="space-y-4">
                {caseSnapshots.map(({ Icon, iconBg, iconColor, tag, tagColor, title, subtitle, metrics }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                    className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm leading-tight">{title}</div>
                          <div className="text-white/40 text-xs mt-0.5">{subtitle}</div>
                        </div>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${tagColor} flex-shrink-0 ml-2`}>
                        {tag}
                      </span>
                    </div>

                    {/* Metrics row */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
                      {metrics.map(({ value, label }) => (
                        <div key={label} className="text-center">
                          <div className="text-white font-black text-base">{value}</div>
                          <div className="text-white/35 text-xs mt-0.5 leading-tight">{label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue/20 blur-3xl rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    { num: 50, suffix: "+", label: "AI Models Shipped" },
    { num: 97.4, suffix: "%", decimals: 1, label: "Average Model Accuracy" },
    { num: 8, suffix: "wk", label: "Avg. Time to Production" },
    { num: 35, suffix: "+", label: "Client Engagements" },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-border relative z-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-border/50">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-display font-bold text-navy mb-2">
                <CountUp to={stat.num} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
