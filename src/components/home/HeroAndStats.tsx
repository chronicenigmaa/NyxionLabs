import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldAlert, Zap } from "lucide-react";

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
              Stop Piloting AI.<br/>
              <strong className="font-semibold text-gradient">Start Deploying It.</strong>
            </h1>
            
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              Nyxion Labs takes you from messy data to a production-ready AI model in 8 weeks — no endless pilots, no broken promises, just results you can measure.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#contact" className="px-8 py-4 rounded-xl bg-blue hover:bg-blue-dark text-white font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-1 flex items-center gap-2">
                Start a Project <ArrowRight size={20} />
              </a>
              <a href="#work" className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-all duration-300 backdrop-blur-sm">
                View Our Work
              </a>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-white/30">Trusted across</span>
              <div className="flex gap-2">
                {['Fintech', 'Retail', 'Healthcare', 'Logistics'].map(ind => (
                  <span key={ind} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-semibold">{ind}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="glass-panel-dark rounded-3xl p-8 relative overflow-hidden group hover:border-blue/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-4">
                <span className="flex items-center gap-2 text-xs font-bold text-teal bg-teal/10 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" /> What We Ship
                </span>
              </div>

              <h3 className="text-white font-bold text-lg mb-8">Built for Production</h3>

              <div className="space-y-6">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue/20 text-blue flex items-center justify-center"><BarChart3 size={20} /></div>
                    <div>
                      <div className="text-white font-bold text-sm">Demand Forecast Ensembles</div>
                      <div className="text-teal text-xs font-bold mt-1">Sub-hour retraining cycles</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center"><ShieldAlert size={20} /></div>
                    <div>
                      <div className="text-white font-bold text-sm">Fraud Detection Scoring</div>
                      <div className="text-red-400 text-xs font-bold mt-1">Sub-12ms inference latency</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/20 text-teal flex items-center justify-center"><Zap size={20} /></div>
                    <div>
                      <div className="text-white font-bold text-sm">Production-grade MLOps</div>
                      <div className="text-teal text-xs font-bold mt-1">Monitoring, drift alerts & CI/CD from day one</div>
                    </div>
                  </div>
                </div>
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
    { headline: '3 Clients', sub: '100% delivered on time' },
    { headline: '8-Week', sub: 'From data to production' },
    { headline: 'Production-grade', sub: 'MLOps from day one' },
    { headline: 'Zero', sub: 'Failed deployments' },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-border relative z-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-border/50">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-navy mb-2">
                {stat.headline}
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
