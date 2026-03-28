import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle, Phone, Mail, Calendar, MessageSquare, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

function useCalendlyScript() {
  useEffect(() => {
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
}

function openCalendly() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: "https://calendly.com/nyxion-labs" });
  } else {
    window.open("https://calendly.com/nyxion-labs", "_blank");
  }
}

function BookingCard() {
  useCalendlyScript();

  const agenda = [
    "We audit your data and assess ML readiness",
    "You get a concrete ROI projection within 48 hours",
    "We sketch a technical architecture blueprint",
    "Zero obligation, zero sales pressure",
  ];

  return (
    <div className="p-8 flex flex-col gap-8">
      {/* Top: meeting type */}
      <div className="flex items-start gap-5">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue/30 to-blue/10 border border-blue/30 flex items-center justify-center shrink-0">
          <Calendar size={28} className="text-blue-light" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-bold text-xl">Free Discovery Call</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-teal/15 border border-teal/25 text-teal text-xs font-bold">FREE</span>
          </div>
          <div className="flex items-center gap-3 text-white/40 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              30 minutes
            </span>
            <span>·</span>
            <span>Google Meet</span>
            <span>·</span>
            <span>Available this week</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/8" />

      {/* Agenda */}
      <div>
        <p className="text-white/50 text-xs uppercase font-bold tracking-wider mb-4">What we'll cover</p>
        <ul className="space-y-3">
          {agenda.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue/15 border border-blue/30 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-white/70 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/8" />

      {/* CTA */}
      <div className="space-y-3">
        <button
          onClick={openCalendly}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-blue hover:bg-blue-dark text-white font-bold text-base transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_40px_rgba(59,130,246,0.45)] hover:-translate-y-0.5"
        >
          <Calendar size={18} />
          Book Your Free Call
        </button>
        <div className="flex items-center justify-center gap-2 text-white/30 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
          Typically responds within 1 business day · No spam, ever
        </div>
      </div>

      {/* Or reach out directly */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-white/8" />
        <span className="text-white/25 text-xs font-semibold uppercase tracking-wider">or reach out directly</span>
        <div className="flex-1 h-px bg-white/8" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <a
          href="tel:03194070681"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/60 hover:text-white text-sm font-semibold"
        >
          <Phone size={15} /> 0319 407 0681
        </a>
        <a
          href="https://wa.me/923194070681"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all text-green-400 hover:text-green-300 text-sm font-semibold"
        >
          <MessageCircle size={15} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  project: z.string().min(10, "Please provide more details about your project"),
});

type FormValues = z.infer<typeof formSchema>;

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (_data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 bg-teal/20 text-teal rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl text-white font-bold mb-2">Message Received</h3>
        <p className="text-white/50 text-sm">
          We'll be in touch within 24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-blue hover:text-white text-sm font-bold transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">
            Full Name
          </label>
          <input
            {...register("name")}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue/50 transition-colors placeholder:text-white/20"
            placeholder="Jane Doe"
          />
          {errors.name && (
            <span className="text-rose-400 text-xs">{errors.name.message}</span>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">
            Work Email
          </label>
          <input
            {...register("email")}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue/50 transition-colors placeholder:text-white/20"
            placeholder="jane@company.com"
          />
          {errors.email && (
            <span className="text-rose-400 text-xs">{errors.email.message}</span>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">
          Company
        </label>
        <input
          {...register("company")}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue/50 transition-colors placeholder:text-white/20"
          placeholder="Acme Corp"
        />
        {errors.company && (
          <span className="text-rose-400 text-xs">{errors.company.message}</span>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">
          What are you trying to solve?
        </label>
        <textarea
          {...register("project")}
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue/50 transition-colors resize-none placeholder:text-white/20"
          placeholder="Tell us about the problem you're trying to solve..."
        />
        {errors.project && (
          <span className="text-rose-400 text-xs">{errors.project.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue hover:bg-blue-dark text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] flex justify-center items-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : "Send Message"}
      </button>
      <p className="text-center text-xs text-white/30">
        We protect your data. No spam, ever.
      </p>
    </form>
  );
}

export function Contact() {
  const [tab, setTab] = useState<"calendly" | "form">("calendly");

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-teal font-bold text-xs uppercase tracking-widest mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl text-white mb-5">
            Let's build your AI advantage
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Book a free discovery call or send us a message. We'll audit your data readiness and outline a concrete roadmap for your first ML deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel-dark rounded-2xl p-6 space-y-5">
              <h3 className="text-white font-bold text-lg">Contact Details</h3>

              <a
                href="tel:03194070681"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center text-blue shrink-0 group-hover:bg-blue group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-0.5">Phone</div>
                  <div className="text-white font-semibold group-hover:text-blue transition-colors">0319 407 0681</div>
                </div>
              </a>

              <a
                href="mailto:hello@nyxionlabs.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-0.5">Email</div>
                  <div className="text-white font-semibold group-hover:text-teal transition-colors">hello@nyxionlabs.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/923194070681"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-0.5">WhatsApp</div>
                  <div className="text-white font-semibold group-hover:text-green-400 transition-colors">+92 319 407 0681</div>
                </div>
              </a>

              <a
                href="https://calendly.com/nyxion-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 group-hover:bg-violet-500 group-hover:text-white transition-all">
                  <Calendar size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-0.5">Schedule</div>
                  <div className="text-white font-semibold group-hover:text-violet-400 transition-colors">calendly.com/nyxion-labs</div>
                </div>
              </a>
            </div>

            <div className="glass-panel-dark rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold">What happens next?</h3>
              {[
                { title: "Free Data Audit", desc: "We evaluate your datasets for ML readiness." },
                { title: "ROI Projection", desc: "Clear estimates on cost savings and revenue uplift." },
                { title: "Architecture Plan", desc: "A technical blueprint of how the model integrates." },
              ].map((p, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center text-blue font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">{p.title}</div>
                    <div className="text-white/40 text-xs mt-0.5">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — tab switcher */}
          <div className="lg:col-span-3">
            {/* Tab bar */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setTab("calendly")}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all",
                  tab === "calendly"
                    ? "bg-blue text-white shadow-lg shadow-blue/30"
                    : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                )}
              >
                <Calendar size={16} /> Book a Call
              </button>
              <button
                onClick={() => setTab("form")}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all",
                  tab === "form"
                    ? "bg-blue text-white shadow-lg shadow-blue/30"
                    : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                )}
              >
                <MessageSquare size={16} /> Send a Message
              </button>
            </div>

            <div className="glass-panel-dark rounded-2xl overflow-hidden">
              {tab === "calendly" ? (
                <BookingCard />
              ) : (
                <div className="p-8">
                  <ContactForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
