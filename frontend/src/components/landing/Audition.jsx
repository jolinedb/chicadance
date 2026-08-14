import { Flame, Dumbbell, Music, Star } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const SEQUENCE = [
  { icon: Flame, label: "Warm-up" },
  { icon: Dumbbell, label: "Technical drill" },
  { icon: Music, label: "Choreography practice" },
  { icon: Star, label: "Performance energy" },
];

export const Audition = () => (
  <section className="relative py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
      <Reveal>
        <SectionLabel number="07">Practice to performance</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight max-w-3xl display-skew">
          Audition preparation starts <span className="text-[#AD4BAD]">before the audition.</span>
        </h2>
        <p className="text-base md:text-lg text-white/75 max-w-2xl mt-6">
          If auditioning is part of your dream, your training deserves more than random practice.
          CHICADANCE helps you build stronger technique, discipline, musicality, and confidence so
          you can show up more prepared.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {SEQUENCE.map((step, i) => (
          <Reveal key={step.label} delay={i * 0.12} data-testid={`audition-step-${i + 1}`}>
            <div className={`bg-[#0C0C1C] border border-white/15 rounded-2xl p-6 text-center ${i % 2 ? "rotate-1 lg:mt-8" : "-rotate-1"}`}>
              <step.icon className="w-7 h-7 text-[#9CDAFF] mx-auto mb-3" />
              <span className="font-display text-xs text-white/40 display-skew block mb-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-bold text-sm sm:text-base">{step.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="text-sm text-white/50 border-l-4 border-[#AD4BAD] pl-4 mt-12 max-w-2xl" data-testid="audition-disclaimer">
          CHICADANCE does not guarantee agency auditions, placements, or debut outcomes. It gives
          you a more structured place to train toward your goals.
        </p>
      </Reveal>
    </div>
  </section>
);
