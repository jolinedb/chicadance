import { Flame, Dumbbell, Music, Star } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { IMG } from "@/lib/constants";

const SEQUENCE = [
  { icon: Flame, label: "Warm-up", img: IMG.stepWarmup, pos: "object-center" },
  { icon: Dumbbell, label: "Technical drill", img: IMG.stepDrill, pos: "object-center" },
  { icon: Music, label: "Choreography practice", img: IMG.stepChoreo, pos: "object-center" },
  { icon: Star, label: "Performance energy", img: IMG.stepPerformance, pos: "object-top" },
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
            <div
              className={`relative overflow-hidden bg-[#0C0C1C] border border-white/15 rounded-2xl p-6 pt-24 sm:pt-32 text-center ${
                i % 2 ? "rotate-1 lg:mt-8" : "-rotate-1"
              }`}
            >
              <img
                src={step.img}
                alt={`${step.label} at CHICADANCE`}
                className={`absolute inset-0 w-full h-full object-cover opacity-30 ${step.pos}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060F] via-[#06060F]/45 to-transparent" />
              <div className="relative">
                <step.icon className="w-7 h-7 text-[#9CDAFF] mx-auto mb-3" />
                <span className="font-display text-xs text-white/50 display-skew block mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-bold text-sm sm:text-base">{step.label}</p>
              </div>
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

      <Reveal delay={0.15} className="mt-24 text-center" data-testid="global-community">
        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight display-skew max-w-3xl mx-auto">
          Join dancers from <span className="text-[#38B6FF]">all over the world</span>
        </h3>
        <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto mt-6">
          Our global community's here to give feedback, share tips, and take on dance challenges
          with you.
        </p>
        {IMG.worldMap && (
          <div className="relative mt-12 rounded-2xl overflow-hidden border-2 border-[#38B6FF]/40 hard-shadow-berry">
            <img
              src={IMG.worldMap}
              alt="Map of CHICADANCE dancers around the world"
              className="w-full h-auto"
              data-testid="global-community-map"
            />
            <div
              data-testid="global-community-count-overlay"
              className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-[#06060F]/85 backdrop-blur-sm border-2 border-[#D395FF] rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 -rotate-2 hard-shadow-electric text-left"
            >
              <p className="font-display text-lg sm:text-2xl display-skew text-white leading-none">
                <span className="text-[#38B6FF]">1,500+</span> DANCERS
              </p>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] font-bold uppercase text-[#D395FF] mt-1">
                Across 40+ countries
              </p>
            </div>
          </div>
        )}
      </Reveal>
    </div>
  </section>
);
