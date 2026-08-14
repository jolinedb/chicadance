import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SKOOL_URL, IMG } from "@/lib/constants";

export const FinalCta = () => {
  const reduced = useReducedMotion();
  return (
    <section className="relative pt-14 sm:pt-20 pb-28 sm:pb-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.finalCtaTraining} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#06060F]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#06060F_78%)]" />
      </div>

      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <span className="inline-block bg-[#AD4BAD] text-white font-bold text-xs sm:text-sm tracking-[0.2em] px-4 py-2 rounded-full rotate-1 mb-8">
          YOUR NEXT COUNT STARTS NOW
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.95] display-skew" data-testid="final-cta-headline">
          Train like a trainee. <span className="text-[#D395FF]">From wherever you are.</span>
        </h2>
        <p className="text-base md:text-lg text-white/80 mt-6 font-medium">
          You already have the dream. Now give it a training rhythm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-primary-cta"
            className="btn-primary font-display text-base sm:text-lg px-8 py-4 rounded-full hard-shadow-electric inline-flex items-center justify-center gap-2"
          >
            Join the Trainee Track · $20/mo
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-secondary-cta"
            className="btn-ghost font-bold text-base px-8 py-4 rounded-full border-2 border-white/40 text-white inline-flex items-center justify-center"
          >
            Start with Community · $5/mo
          </a>
        </div>
        <p className="text-sm text-white/50 mt-8" data-testid="final-microcopy">
          You will complete your membership inside the CHICADANCE Skool community.
        </p>
      </motion.div>
    </section>
  );
};
