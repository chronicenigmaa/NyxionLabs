import { motion } from "framer-motion";
import { 
  BarChart3, FileText, Camera, ShieldAlert, 
  Wrench, LineChart, Search, Database, Code, Rocket, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <BarChart3 size={28} />,
    color: "text-blue",
    bgColor: "bg-blue/10",
    title: "Demand Forecasting & Supply Chain",
    desc: "Predictive ensembles (XGBoost, SARIMA) that reduce stockouts and optimize inventory holding costs.",
    tags: ["Time-Series", "Predictive", "Ops"]
  },
  {
    icon: <FileText size={28} />,
    color: "text-teal",
    bgColor: "bg-teal/10",
    title: "NLP & Document Intelligence",
    desc: "Transformer models (BERT, LLMs) to automate document processing, sentiment analysis, and data extraction.",
    tags: ["LLMs", "OCR", "Classification"]
  },
  {
    icon: <Camera size={28} />,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    title: "Computer Vision & Quality Control",
    desc: "CNNs and Vision Transformers for automated defect detection, safety monitoring, and visual search.",
    tags: ["Object Detection", "CNNs"]
  },
  {
    icon: <ShieldAlert size={28} />,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    title: "Fraud Detection & Risk Scoring",
    desc: "Real-time anomaly detection using Isolation Forests to block fraudulent transactions instantly.",
    tags: ["Anomaly Detection", "Real-time"]
  },
  {
    icon: <Wrench size={28} />,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    title: "Predictive Maintenance",
    desc: "IoT sensor analysis predicting equipment failures before they happen, reducing unplanned downtime.",
    tags: ["IoT Data", "LSTM", "Survival"]
  },
  {
    icon: <LineChart size={28} />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    title: "AI Business Intelligence",
    desc: "Conversational agents connected to your data warehouse allowing you to ask natural language questions.",
    tags: ["RAG", "SQL Gen", "Agents"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue font-bold text-xs uppercase tracking-widest mb-4 block">Core Capabilities</span>
          <h2 className="text-4xl md:text-5xl text-navy mb-6">Expertise across the AI spectrum</h2>
          <p className="text-slate-500 text-lg">We don't just build models; we build robust, scalable solutions integrated directly into your business workflows.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white border border-border rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-blue/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue to-teal opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${s.bgColor} ${s.color}`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map(t => (
                  <span key={t} className={`text-xs font-bold px-3 py-1 rounded-full ${s.bgColor} ${s.color}`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: <Search />, title: "Discovery & Scoping", desc: "We define the exact business problem, identify data sources, and establish clear success metrics." },
  { icon: <Database />, title: "Data Audit & Architecture", desc: "We clean, structure, and pipeline your data, ensuring it's ready for enterprise-grade ML." },
  { icon: <Code />, title: "Model Development", desc: "Iterative training of custom models focusing on accuracy, explainability, and efficiency." },
  { icon: <Rocket />, title: "Deployment & Monitoring", desc: "We deploy the model via API and set up drift monitoring to ensure long-term performance." },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue font-bold text-xs uppercase tracking-widest mb-4 block">Methodology</span>
            <h2 className="text-4xl md:text-5xl text-navy mb-6">A proven framework for AI success</h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Most AI projects fail because they start with the model instead of the problem. We flip that. Our methodology guarantees that every model we deploy drives measurable business value.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-blue font-bold hover:text-navy transition-colors">
              Discuss your roadmap <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-blue/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue/5 text-blue flex items-center justify-center mb-4 border border-blue/10 font-display font-bold text-xl">
                  {i+1}
                </div>
                <h4 className="text-navy font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
