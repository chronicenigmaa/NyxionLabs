import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

function DotGridIcon({ light }: { light: boolean }) {
  const fill = light ? "#0A0A0A" : "#FFFFFF";
  return (
    <svg width="26" height="26" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="78" r="4" fill={fill} opacity="0.2" />
      <circle cx="36" cy="64" r="4" fill={fill} opacity="0.4" />
      <circle cx="36" cy="78" r="4" fill={fill} opacity="0.4" />
      <circle cx="50" cy="50" r="4" fill={fill} opacity="0.6" />
      <circle cx="50" cy="64" r="4" fill={fill} opacity="0.6" />
      <circle cx="50" cy="78" r="4" fill={fill} opacity="0.6" />
      <circle cx="64" cy="36" r="4" fill={fill} opacity="0.8" />
      <circle cx="64" cy="50" r="4" fill={fill} opacity="0.8" />
      <circle cx="64" cy="64" r="4" fill={fill} opacity="0.8" />
      <circle cx="64" cy="78" r="4" fill={fill} opacity="0.8" />
      <circle cx="78" cy="22" r="4" fill={fill} />
      <circle cx="78" cy="36" r="4" fill={fill} />
      <circle cx="78" cy="50" r="4" fill={fill} />
      <circle cx="78" cy="64" r="4" fill={fill} />
      <circle cx="78" cy="78" r="4" fill={fill} />
    </svg>
  );
}

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Our Work", href: "#work" },
  { name: "Why Us", href: "#why" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className={cn(
              "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105",
              scrolled ? "bg-gray-100" : "bg-white/10"
            )}
          >
            <DotGridIcon light={scrolled} />
          </div>
          <span
            className={cn(
              "text-lg font-extrabold tracking-tight",
              scrolled ? "text-navy" : "text-white"
            )}
          >
            NYXION{" "}
            <span
              className={cn(
                "font-light",
                scrolled ? "text-gray-400" : "text-white/50"
              )}
            >
              LABS
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-1 border border-white/20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                scrolled
                  ? "text-slate-600 hover:text-navy hover:bg-slate-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className={cn(
              "px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5",
              scrolled
                ? "bg-navy text-white hover:bg-blue shadow-lg shadow-navy/20"
                : "bg-white text-navy hover:bg-blue hover:text-white"
            )}
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2", scrolled ? "text-navy" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full p-3 rounded-lg bg-navy text-white text-center font-bold"
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050a14] pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="lg:col-span-2 max-w-sm">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <DotGridIcon light={false} />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                NYXION{" "}
                <span className="font-light text-white/40">LABS</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Nyxion Labs builds custom AI, ML, and Deep Learning solutions for
              forward-thinking enterprises. We turn complex data into measurable
              competitive advantage.
            </p>
          </div>

          <div>
            <h4 className="text-white/70 text-xs font-bold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                  Demand Forecasting
                </a>
              </li>
              <li>
                <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                  NLP & Document AI
                </a>
              </li>
              <li>
                <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                  Fraud Detection
                </a>
              </li>
              <li>
                <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                  Predictive Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/70 text-xs font-bold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#work" className="text-white/40 hover:text-white text-sm transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#why" className="text-white/40 hover:text-white text-sm transition-colors">
                  Why Nyxion
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/40 hover:text-white text-sm transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Nyxion Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-bold tracking-wider">
              SOC2
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-bold tracking-wider">
              ISO 27001
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-bold tracking-wider">
              GDPR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}