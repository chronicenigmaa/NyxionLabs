import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Retail & FMCG", "Financial Services", "Healthcare", "Manufacturing", "Telecom"];

const projects = [
  {
    industry: "Retail & FMCG",
    accent: "from-blue/20 to-blue/5",
    accentBorder: "border-blue/20",
    accentTag: "bg-blue/10 text-blue",
    label: "Demand Forecasting",
    title: "SKU-Level Demand Forecasting for a National FMCG Distributor",
    summary:
      "A gradient-boosted ensemble trained on 3 years of transactional history with SARIMA for seasonality. Deployed as a REST microservice with automated weekly retraining and drift alerts.",
    stack: ["XGBoost", "SARIMA", "FastAPI", "MLflow", "Docker"],
    metrics: [
      { value: "94%", label: "Stockout Reduction" },
      { value: "+18%", label: "Revenue Uplift" },
      { value: "8 wks", label: "To Production" },
    ],
  },
  {
    industry: "Financial Services",
    accent: "from-rose-500/15 to-rose-500/5",
    accentBorder: "border-rose-500/20",
    accentTag: "bg-rose-500/10 text-rose-600",
    label: "Fraud Detection",
    title: "Real-time Transaction Fraud Scoring at Sub-12ms Latency",
    summary:
      "XGBoost + Isolation Forest ensemble scoring every transaction with SHAP explanations for compliance. Deployed on AWS SageMaker with auto-scaling to handle 50K+ daily transactions.",
    stack: ["XGBoost", "Isolation Forest", "SHAP", "SageMaker", "Kafka"],
    metrics: [
      { value: "₨2.3M", label: "Protected Monthly" },
      { value: "97.4%", label: "Recall" },
      { value: "<0.3%", label: "False Positive Rate" },
    ],
  },
  {
    industry: "Healthcare",
    accent: "from-teal/20 to-teal/5",
    accentBorder: "border-teal/20",
    accentTag: "bg-teal/10 text-teal-700",
    label: "NLP & Document AI",
    title: "Clinical NLP Automation Across 340,000 Patient Documents",
    summary:
      "Fine-tuned BERT for named entity recognition and ICD-10 code extraction from unstructured clinical notes. Reduced manual coding backlog by 8× while maintaining 99.1% accuracy.",
    stack: ["BERT", "Hugging Face", "spaCy", "FastAPI", "PostgreSQL"],
    metrics: [
      { value: "340K", label: "Docs Automated" },
      { value: "8×", label: "Faster Processing" },
      { value: "99.1%", label: "Extraction Accuracy" },
    ],
  },
  {
    industry: "Manufacturing",
    accent: "from-amber-500/15 to-amber-500/5",
    accentBorder: "border-amber-500/20",
    accentTag: "bg-amber-500/10 text-amber-700",
    label: "Predictive Maintenance",
    title: "LSTM-Powered Failure Prediction for Turbine Fleet Operator",
    summary:
      "PyTorch LSTM on multivariate sensor streams predicts equipment failure 7–30 days in advance. Integrated with SCADA systems via MQTT; alerts dispatched to maintenance teams in real time.",
    stack: ["PyTorch", "LSTM", "MQTT", "Grafana", "InfluxDB"],
    metrics: [
      { value: "71%", label: "Unplanned Downtime Cut" },
      { value: "14 days", label: "Avg Advance Warning" },
      { value: "$1.2M", label: "Annual Savings" },
    ],
  },
  {
    industry: "Telecom",
    accent: "from-violet-500/15 to-violet-500/5",
    accentBorder: "border-violet-500/20",
    accentTag: "bg-violet-500/10 text-violet-700",
    label: "Churn Prediction",
    title: "Subscriber Churn Prediction & Retention Automation for Regional Telco",
    summary:
      "Gradient boosting model on 18-month subscriber behaviour data. Integrated with the CRM to trigger personalized retention offers 14 days before predicted churn — fully automated.",
    stack: ["LightGBM", "SHAP", "Airflow", "Salesforce CRM", "Redshift"],
    metrics: [
      { value: "23%", label: "Churn Rate Reduced" },
      { value: "+$4.1M", label: "ARR Retained" },
      { value: "88%", label: "Model Precision" },
    ],
  },
  {
    industry: "Retail & FMCG",
    accent: "from-green-500/15 to-green-500/5",
    accentBorder: "border-green-500/20",
    accentTag: "bg-green-500/10 text-green-700",
    label: "Computer Vision",
    title: "Vision-Based Quality Control Deployed on the Factory Floor",
    summary:
      "YOLOv8 model trained on 60K product images to detect surface defects in real time on a production conveyor. Replaced manual QC inspection with sub-100ms camera inference.",
    stack: ["YOLOv8", "OpenCV", "ONNX", "Edge GPU", "Raspberry Pi"],
    metrics: [
      { value: "99.3%", label: "Defect Detection" },
      { value: "82ms", label: "Inference Latency" },
      { value: "60%", label: "QC Cost Reduction" },
    ],
  },
];

export function OurWork() {
  const [active, setActive] = useState("All");

  const visible = projects.filter(
    (p) => active === "All" || p.industry === active
  );

  return (
    <section id="work" className="py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <span className="text-blue font-bold text-xs uppercase tracking-widest mb-4 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl text-navy leading-tight">
              Projects that moved<br className="hidden md:block" /> the needle
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
                  active === f
                    ? "bg-navy text-white border-navy shadow-md"
                    : "bg-white text-slate-500 border-border hover:border-navy/40 hover:text-navy"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "group bg-white border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col",
                  p.accentBorder
                )}
              >
                {/* Accent header */}
                <div className={cn("bg-gradient-to-br px-6 pt-6 pb-4", p.accent)}>
                  <span
                    className={cn(
                      "inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3",
                      p.accentTag
                    )}
                  >
                    {p.label}
                  </span>
                  <h3 className="text-navy font-bold text-base leading-snug">
                    {p.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="px-6 py-5 flex flex-col flex-1">
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {p.summary}
                  </p>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="mt-auto grid grid-cols-3 gap-2 pt-4 border-t border-border/60">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-lg font-black text-navy leading-none mb-1">
                          {m.value}
                        </div>
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA row */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy text-white font-bold hover:bg-blue transition-colors duration-200 shadow-lg shadow-navy/20 hover:shadow-blue/30 hover:-translate-y-0.5 transform"
          >
            Start a project like this <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
