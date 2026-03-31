import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function OurWork() {
  return (
    <section id="work" className="py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center gap-8 mb-14">
          <div>
            <span className="text-blue font-bold text-xs uppercase tracking-widest mb-4 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl text-navy leading-tight">
              Projects that moved<br className="hidden md:block" /> the needle
            </h2>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy text-white font-bold hover:bg-blue transition-colors duration-200 shadow-lg shadow-navy/20 hover:shadow-blue/30 hover:-translate-y-0.5 transform"
          >
            Start a project with us <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
