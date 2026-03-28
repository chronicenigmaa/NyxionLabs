import { motion } from "framer-motion";

const industries = [
  { icon: "🛍️", name: "Retail & FMCG", desc: "SKU demand forecasting, dynamic pricing, inventory optimization, and customer lifetime value prediction." },
  { icon: "🏦", name: "Financial Services", desc: "Real-time fraud scoring, credit risk assessment, algorithmic trading signals, and churn prevention." },
  { icon: "🏥", name: "Healthcare", desc: "Patient outcome prediction, medical image analysis, and clinical NLP automation." },
  { icon: "🏭", name: "Manufacturing", desc: "Predictive maintenance, quality control vision, and supply chain intelligence." },
  { icon: "📡", name: "Telecom & Media", desc: "Subscriber churn prediction, network anomaly detection, and multilingual sentiment." },
  { icon: "🏛️", name: "Public Sector", desc: "Document intelligence, public safety analytics, and procurement fraud detection." },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-navy">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-light font-bold text-xs uppercase tracking-widest mb-4 block">Domain Expertise</span>
          <h2 className="text-4xl md:text-5xl text-white mb-6">Built for your industry</h2>
          <p className="text-white/50 text-lg">We bring domain-specific models trained to understand the unique nuances of your vertical.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="glass-panel-dark rounded-2xl p-8 hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{ind.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{ind.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tech = [
  "Python", "TensorFlow", "PyTorch", "scikit-learn", 
  "Hugging Face", "XGBoost", "Spark", "FastAPI", 
  "Docker", "Kubernetes", "AWS SageMaker", "MLflow"
];

export function TechStack() {
  return (
    <section className="py-24 bg-slate-50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-navy font-bold mb-4">Enterprise-grade Stack</h2>
          <p className="text-slate-500">We utilize the modern AI ecosystem to build scalable, secure solutions.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tech.map((t, i) => (
            <div key={i} className="bg-white border border-border rounded-xl p-4 text-center hover:border-blue/30 hover:shadow-md transition-all font-bold text-slate-700 text-sm">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
