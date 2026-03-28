import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { Send, AlertTriangle, TrendingUp, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = ['Demand Forecast', 'Sentiment NLP', 'Fraud Detection', 'Predictive Maint.', 'AI BI Chat'];

// Dummy Data for Demos
const demandData = [
  { week: 'W1', actual: 1200, forecast: 1150 },
  { week: 'W2', actual: 1350, forecast: 1300 },
  { week: 'W3', actual: 1280, forecast: 1250 },
  { week: 'W4', actual: 1400, forecast: 1450 },
  { week: 'W5', actual: null, forecast: 1600 },
  { week: 'W6', actual: null, forecast: 2100 },
  { week: 'W7', actual: null, forecast: 1950 },
  { week: 'W8', actual: null, forecast: 1300 },
];

const fleets = [
  { id: 'T-800', name: 'Turbine Generator Alpha', baseRul: 45, status: 'good' },
  { id: 'C-3PO', name: 'Conveyor Belt System 3', baseRul: 12, status: 'warning' },
  { id: 'R-2D2', name: 'Robotic Welding Arm', baseRul: 3, status: 'critical' },
  { id: 'H-900', name: 'Hydraulic Press Main', baseRul: 88, status: 'good' },
];

export function InteractiveDemos() {
  const [activeTab, setActiveTab] = useState(0);

  // Sentiment State
  const [sentText, setSentText] = useState("bohot acha product hai, delivery thodi late thi lekin quality zabardast hai");
  const sentScores = useMemo(() => {
    const t = sentText.toLowerCase();
    if (t.includes('bekaar') || t.includes('terrible') || t.includes('slow')) {
      return { pos: 15, neg: 75, neu: 10, label: 'Negative', color: 'bg-rose-500' };
    }
    if (t.includes('acha') || t.includes('zabardast') || t.includes('great')) {
      return { pos: 82, neg: 8, neu: 10, label: 'Positive', color: 'bg-teal' };
    }
    return { pos: 30, neg: 20, neu: 50, label: 'Neutral', color: 'bg-slate-400' };
  }, [sentText]);

  // Fraud State
  const [fAmount, setFAmount] = useState(4280);
  const [fMismatch, setFMismatch] = useState('1');
  const [fVelocity, setFVelocity] = useState(8);
  const [fDevice, setFDevice] = useState('0');
  
  const fraudScore = useMemo(() => {
    let s = 5;
    if (fAmount > 1000) s += 15;
    if (fAmount > 5000) s += 25;
    if (fMismatch === '1') s += 30;
    if (fDevice === '0') s += 20;
    if (fVelocity > 5) s += 15;
    return Math.min(s, 99);
  }, [fAmount, fMismatch, fDevice, fVelocity]);

  // Chat State
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([{ role: 'bot', text: '👋 Ask me anything about revenue, risk, operations, or customers.' }]);

  const sendChat = (override?: string) => {
    const text = override || chatInput;
    if (!text) return;
    setMessages(p => [...p, { role: 'user', text }]);
    setChatInput("");
    
    setTimeout(() => {
      let reply = "Based on the connected warehouse, I found several insights regarding this.";
      const t = text.toLowerCase();
      if (t.includes("revenue")) reply = "Revenue is currently tracking at +9% vs last quarter. The demand forecasting model predicts a spike in week 6 driving $1.72M.";
      if (t.includes("fraud")) reply = "Today there have been 14 high-risk transactions blocked automatically, protecting approximately $12,400 in potential chargebacks.";
      if (t.includes("maintenance")) reply = "Robotic Welding Arm R-2D2 has a critical RUL of 3 days. I recommend scheduling maintenance immediately to avoid downtime.";
      
      setMessages(p => [...p, { role: 'bot', text: reply }]);
    }, 800);
  };

  return (
    <section id="demos" className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <span className="text-teal-dark font-bold text-xs uppercase tracking-widest mb-4 block">Interactive Experience</span>
          <h2 className="text-4xl md:text-5xl text-navy mb-4">Real models. Real data.<br/>Try them now.</h2>
          <p className="text-slate-500 text-lg">Interact with simulated deployments of our core capabilities.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
          {TABS.map((t, i) => (
            <button 
              key={t}
              onClick={() => setActiveTab(i)} 
              className={cn(
                "px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap outline-none", 
                activeTab === i 
                  ? "bg-navy text-white shadow-lg shadow-navy/10" 
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-navy"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Demo Content Container */}
        <div className="bg-slate-50 rounded-3xl border border-border p-4 md:p-8">
          <AnimatePresence mode="wait">
            
            {/* DEMO 1: Demand */}
            {activeTab === 0 && (
              <motion.div key="demo0" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-blue font-bold text-xs uppercase tracking-widest mb-2">Gradient Boosting + SARIMA</div>
                  <h3 className="text-3xl text-navy mb-4">SKU Demand Forecasting</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">A gradient-boosted ensemble trained on 3 years of transactional history. Outputs 8-week forecasts with confidence intervals and reorder triggers.</p>
                  <ul className="space-y-3 mb-8 text-sm text-slate-600 font-medium">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-blue" /> SKU-level weekly forecasts</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-blue" /> Seasonal spike detection</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-blue" /> Auto-reorder triggers</li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-navy">Forecast vs Actual</h4>
                    <span className="text-xs font-bold px-2 py-1 bg-teal/10 text-teal-dark rounded-md">Live Model</span>
                  </div>
                  <div className="h-48 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={demandData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                        <RechartsTooltip cursor={{fill: 'rgba(59,130,246,0.05)'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold'}} />
                        <Bar dataKey="actual" fill="#cbd5e1" radius={[4,4,0,0]} name="Actual Sales" />
                        <Bar dataKey="forecast" fill="#3b82f6" radius={[4,4,0,0]} name="AI Forecast" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-50 p-3 rounded-xl border border-border/50">
                      <div className="text-lg font-black text-navy">$1.72M</div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">8-wk Revenue</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-border/50">
                      <div className="text-lg font-black text-rose-500">4</div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Stockout Risks</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-border/50">
                      <div className="text-lg font-black text-navy">94.2%</div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Accuracy</div>
                    </div>
                  </div>
                  <div className="bg-blue/5 border-l-2 border-blue p-3 rounded-r-lg text-xs text-blue-dark font-medium leading-relaxed">
                    <strong>Insight:</strong> Holiday season creates +38% demand spike in weeks 6–7. Pre-order 5,000 units by Friday.
                  </div>
                </div>
              </motion.div>
            )}

            {/* DEMO 2: Sentiment */}
            {activeTab === 1 && (
              <motion.div key="demo1" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-teal font-bold text-xs uppercase tracking-widest mb-2">Multilingual Transformer</div>
                  <h3 className="text-3xl text-navy mb-4">Sentiment & Intent Analysis</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">A fine-tuned multilingual BERT classifies reviews across 12 languages — extracting sentiment, topics, and intent for automated routing.</p>
                  <ul className="space-y-3 mb-8 text-sm text-slate-600 font-medium">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-teal" /> English, Urdu, Arabic supported</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-teal" /> Topic & entity extraction</li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <h4 className="font-bold text-navy mb-4">Analyse Customer Review</h4>
                  <textarea 
                    value={sentText}
                    onChange={e => setSentText(e.target.value)}
                    className="w-full p-4 bg-slate-50 border border-border rounded-xl mb-4 text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/20 transition-all resize-none"
                    rows={4}
                  />
                  <div className="flex gap-2 mb-6">
                    <button onClick={() => setSentText("The product quality is outstanding, fast delivery, will reorder!")} className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-slate-50 text-slate-600 font-medium">English +</button>
                    <button onClick={() => setSentText("delivery bohot slow hai, bilkul bekaar service")} className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-slate-50 text-slate-600 font-medium">Urdu -</button>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-navy">Detected Sentiment:</span>
                      <span className={cn("text-xs font-bold px-2 py-1 rounded-md text-white", sentScores.color)}>{sentScores.label}</span>
                    </div>
                    
                    {[
                      { l: 'Positive', v: sentScores.pos, c: 'bg-teal' },
                      { l: 'Neutral', v: sentScores.neu, c: 'bg-slate-300' },
                      { l: 'Negative', v: sentScores.neg, c: 'bg-rose-500' }
                    ].map(s => (
                      <div key={s.l} className="flex items-center gap-3">
                        <span className="w-16 text-xs text-slate-500 font-medium">{s.l}</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div animate={{ width: `${s.v}%` }} className={cn("h-full rounded-full", s.c)} />
                        </div>
                        <span className="w-8 text-right text-xs font-bold text-navy">{s.v}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* DEMO 3: Fraud */}
            {activeTab === 2 && (
              <motion.div key="demo2" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-rose-500 font-bold text-xs uppercase tracking-widest mb-2">Isolation Forest Ensemble</div>
                  <h3 className="text-3xl text-navy mb-4">Real-time Fraud Detection</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">Scores transactions in under 12ms with explainable SHAP features — blocking bad actors without interrupting good customers.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-navy">Transaction Scorer</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Amount ($)</label>
                      <input type="number" value={fAmount} onChange={e => setFAmount(Number(e.target.value))} className="w-full p-2.5 bg-slate-50 border border-border rounded-lg text-sm font-medium" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Velocity (txns/hr)</label>
                      <input type="number" value={fVelocity} onChange={e => setFVelocity(Number(e.target.value))} className="w-full p-2.5 bg-slate-50 border border-border rounded-lg text-sm font-medium" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Country Mismatch</label>
                      <select value={fMismatch} onChange={e => setFMismatch(e.target.value)} className="w-full p-2.5 bg-slate-50 border border-border rounded-lg text-sm font-medium">
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Device Status</label>
                      <select value={fDevice} onChange={e => setFDevice(e.target.value)} className="w-full p-2.5 bg-slate-50 border border-border rounded-lg text-sm font-medium">
                        <option value="1">Known</option>
                        <option value="0">New/Suspicious</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-border/50 text-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Calculated Risk Score</div>
                    <div className={cn("text-5xl font-display font-bold transition-colors", fraudScore > 75 ? "text-rose-500" : fraudScore > 40 ? "text-amber-500" : "text-teal")}>
                      {fraudScore}
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full mt-4 overflow-hidden">
                      <motion.div 
                        animate={{ width: `${fraudScore}%` }} 
                        className={cn("h-full", fraudScore > 75 ? "bg-rose-500" : fraudScore > 40 ? "bg-amber-500" : "bg-teal")} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DEMO 4: Predictive */}
            {activeTab === 3 && (
              <motion.div key="demo3" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-2">LSTM Time-Series</div>
                  <h3 className="text-3xl text-navy mb-4">Predictive Maintenance</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">Neural networks on multivariate sensor data predict equipment failure 7–30 days in advance, preventing costly unplanned downtime.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <h4 className="font-bold text-navy mb-4 flex items-center justify-between">
                    Equipment Fleet Health
                    <span className="text-xs text-slate-400 font-normal">Live Updates</span>
                  </h4>
                  <div className="space-y-3">
                    {fleets.map(f => (
                      <div key={f.id} className="flex items-center justify-between p-4 rounded-xl border border-border hover:shadow-md transition-all">
                        <div className="flex items-center gap-3">
                          <div className={cn("w-3 h-3 rounded-full", f.status === 'critical' ? 'bg-rose-500 animate-pulse' : f.status === 'warning' ? 'bg-amber-500' : 'bg-teal')} />
                          <div>
                            <div className="text-sm font-bold text-navy">{f.name}</div>
                            <div className="text-[10px] text-slate-400 uppercase">{f.id}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={cn("text-lg font-black", f.status === 'critical' ? 'text-rose-500' : 'text-navy')}>{f.baseRul}</div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase">Days RUL</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* DEMO 5: Chat */}
            {activeTab === 4 && (
              <motion.div key="demo4" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-indigo-500 font-bold text-xs uppercase tracking-widest mb-2">LLM + Data Warehouse RAG</div>
                  <h3 className="text-3xl text-navy mb-4">AI Business Intelligence</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">Ask plain-language questions about your enterprise data. The AI connects to databases and models to return instant KPIs and insights.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Revenue forecast this month?", "Any fraud alerts today?", "Equipment needing maintenance?"].map(q => (
                      <button key={q} onClick={() => sendChat(q)} className="text-xs px-3 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium border border-indigo-100 transition-colors">
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-border flex flex-col h-[400px]">
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <h4 className="font-bold text-navy text-sm">Enterprise Data Assistant</h4>
                    <span className="w-2 h-2 bg-teal rounded-full" />
                  </div>
                  
                  <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
                    {messages.map((m, i) => (
                      <div key={i} className={cn("max-w-[85%] rounded-xl p-3 text-sm", m.role === 'user' ? "bg-slate-100 text-navy self-end rounded-tr-sm" : "bg-navy text-white self-start rounded-tl-sm")}>
                        {m.text}
                      </div>
                    ))}
                  </div>

                  <div className="p-3 border-t border-border bg-slate-50 rounded-b-2xl flex gap-2">
                    <input 
                      type="text" 
                      value={chatInput} 
                      onChange={e => setChatInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && sendChat()}
                      placeholder="Ask a question..." 
                      className="flex-1 p-2.5 bg-white border border-border rounded-lg text-sm focus:outline-none focus:border-indigo-500"
                    />
                    <button onClick={() => sendChat()} className="p-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
