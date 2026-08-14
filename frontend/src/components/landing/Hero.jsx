import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe, Users, Sparkle } from "lucide-react";
import { SKOOL_URL, IMG } from "@/lib/constants";

const lineAnim = (reduced, i) => ({
  initial: reduced ? { y: 0 } : { y: "110%" },
  animate: { y: 0 },
  transition: { duration: 0.9, delay: 0.25 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
});

export const Hero = () => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, reduced ? 1.08 : 1.22]);

  return (
    <section ref={ref} id="top" className="relative h-screen min-h-[620px] flex items-end overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={IMG.heroDancers}
          alt="CHICADANCE dancers training under blue and magenta stage light"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#06060F] via-[#06060F]/55 to-[#06060F]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#415AB6]/30 via-transparent to-[#AD4BAD]/25" />

      <motion.div
        className="absolute top-24 right-6 sm:top-28 sm:right-12 rotate-6"
        initial={reduced ? {} : { opacity: 0, scale: 0.5, rotate: 25 }}
        animate={{ opacity: 1, scale: 1, rotate: 6 }}
        transition={{ duration: 0.8, delay: 1.1, type: "spring", bounce: 0.5 }}
      >
        <div
          data-testid="trainee-mode-badge"
          className="bg-[#D395FF] text-[#06060F] px-4 py-2 rounded-xl border-2 border-[#06060F] hard-shadow-electric flex items-center gap-2"
        >
          <Sparkle className="w-4 h-4" fill="#06060F" />
          <span className="font-display text-xs sm:text-sm display-skew">TRAINEE MODE: ON</span>
        </div>
      </motion.div>

      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
        {["5", "6", "7", "8"].map((n, i) => (
          <motion.span
            key={n}
            initial={reduced ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 + i * 0.15, duration: 0.5 }}
            className="font-display text-2xl text-white/70 display-skew"
          >
            {n}
            <span className="beat-dot inline-block w-2 h-2 rounded-full bg-[#38B6FF] ml-2 align-middle" style={{ animationDelay: `${i * 0.22}s` }} />
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 pt-24 w-full">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block bg-[#38B6FF] text-[#06060F] font-bold text-xs sm:text-sm tracking-[0.2em] px-4 py-2 rounded-full -rotate-2 mb-6"
          data-testid="hero-eyebrow"
        >
          YOUR TRAINEE ERA STARTS HERE
        </motion.div>

        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] uppercase max-w-5xl" data-testid="hero-headline">
          <span className="block overflow-hidden pb-1">
            <motion.span className="block display-skew" {...lineAnim(reduced, 0)}>
              Stop Guessing.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span className="block display-skew text-[#D395FF]" {...lineAnim(reduced, 1)}>
              Start Training
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span className="block display-skew" {...lineAnim(reduced, 2)}>
              Like a K-pop Trainee.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-sm md:text-base text-white/85 max-w-2xl mt-4 font-medium"
          data-testid="hero-subheadline"
        >
          Structured K-pop dance training, technique drills, and real feedback from a former
          trainee, built for dancers who are ready to level up from anywhere in the world.
        </motion.p>

        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex flex-col sm:flex-row gap-3 mt-5"
        >
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-primary-cta"
            className="btn-primary font-display text-base sm:text-lg px-8 py-3.5 rounded-full hard-shadow-electric inline-flex items-center justify-center gap-2"
          >
            Join the Trainee Track · $20/mo
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-secondary-cta"
            className="btn-ghost font-bold text-base px-8 py-3.5 rounded-full border-2 border-white/30 text-white inline-flex items-center justify-center"
          >
            Explore the Community · $5/mo
          </a>
        </motion.div>

        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-6 text-sm text-white/70 font-semibold"
          data-testid="hero-trust-strip"
        >
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#9CDAFF]" /> 1,500+ dancers in the community
          </span>
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#9CDAFF]" /> Train from anywhere
          </span>
          <span className="text-[#D395FF] italic">
            For dancers who want real structure, not another tutorial spiral.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

