import { X, Check } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const BEFORE = ["Random routines", "Guessing at technique", "Practicing alone with no plan", "Stuck at the same level"];
const AFTER = ["Structured drills", "Clear technique focus", "Feedback and direction", "A training rhythm you can keep"];

export const Shift = () => (
  <section className="relative py-24 sm:py-32 bg-[#0C0C1C] rounded-t-[3rem] rounded-b-[3rem]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <Reveal>
        <SectionLabel number="02">The shift</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight max-w-3xl display-skew">
          The trainee standard, <span className="text-[#9CDAFF]">brought to your room.</span>
        </h2>
        <p className="text-base md:text-lg text-white/75 max-w-2xl mt-6">
          CHICADANCE gives you a structured place to train like a serious dancer. Learn the drills,
          habits, technique, and performance details that turn &ldquo;I love dancing&rdquo; into
          visible progress.
        </p>
        <p className="text-sm md:text-base text-white/55 max-w-2xl mt-4">
          This is not a promise of an agency audition or a shortcut to debut. It is a real training
          environment for dancers who want to build their level with more clarity and intention.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-16 items-start">
        <Reveal className="relative" data-testid="shift-before-card">
          <div className="absolute -inset-2 border-2 border-dashed border-white/15 rounded-3xl rotate-1" />
          <div className="relative bg-[#06060F] border-2 border-white/15 rounded-3xl p-8 -rotate-1">
            <span className="inline-block bg-white/10 text-white/60 font-bold text-xs tracking-[0.2em] px-3 py-1.5 rounded-full mb-6">
              BEFORE CHICADANCE
            </span>
            <ul className="space-y-4">
              {BEFORE.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/55">
                  <X className="w-5 h-5 text-white/30 shrink-0" />
                  <span className="line-through decoration-white/25">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative md:mt-12" data-testid="shift-after-card">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#38B6FF] via-[#D395FF] to-[#AD4BAD] rounded-3xl rotate-2 opacity-70 blur-[2px]" />
          <div className="relative bg-[#0C0C1C] border-2 border-[#D395FF] rounded-3xl p-8 rotate-1 hard-shadow-electric">
            <span className="inline-block bg-[#D395FF] text-[#06060F] font-display text-xs tracking-wide px-3 py-1.5 rounded-full mb-6 -rotate-2 display-skew">
              IN TRAINEE MODE
            </span>
            <ul className="space-y-4">
              {AFTER.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white font-semibold">
                  <span className="w-6 h-6 rounded-full bg-[#38B6FF] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-[#06060F]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
