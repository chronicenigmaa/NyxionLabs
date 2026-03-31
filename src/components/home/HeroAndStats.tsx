import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

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

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue/30 bg-blue/10 text-blue-light text-sm font-bold tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
            Enterprise AI Solutions
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6">
            Stop Piloting AI.<br />
            <strong className="font-semibold text-gradient">Start Deploying It.</strong>
          </h1>

          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Nyxion Labs takes you from messy data to a production-ready AI model in 8 weeks —
            no endless pilots, no broken promises, just results you can measure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
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

          <div className="flex items-center justify-center gap-4 flex-wrap">
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
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    { num: 10, suffix: "+", label: "AI Models Shipped" },
    { num: 97.4, suffix: "%", decimals: 1, label: "Average Model Accuracy" },
    { num: 8, suffix: "wk", label: "Avg. Time to Production" },
    { num: 8, suffix: "+", label: "Client Engagements" },
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
