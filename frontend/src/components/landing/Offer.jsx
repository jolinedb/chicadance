import { Check, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { SKOOL_URL } from "@/lib/constants";

const TRACK_INCLUDES = [
  "Structured trainee-level dance training",
  "Technique drills and focused practice",
  "A clear training environment inside Skool",
  "Live 1:1 elements, as described in the live membership",
  "A global community of dancers taking their growth seriously",
];

export const Offer = () => (
  <section id="membership" className="relative py-14 sm:py-16 scroll-mt-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
      <Reveal>
        <SectionLabel number="05">Pick your way in</SectionLabel>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight max-w-3xl display-skew">
          Start where you are. <span className="text-[#38B6FF]">Train toward where you want to be.</span>
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-8 mt-8 items-start">
        <Reveal className="lg:col-span-3 relative" data-testid="offer-trainee-card">
          <div className="absolute -top-4 left-8 z-10 bg-[#AD4BAD] text-white font-display text-xs sm:text-sm px-4 py-2 rounded-full -rotate-2 border-2 border-[#06060F] display-skew">
            MOST SERIOUS TRAINING PATH
          </div>
          <div className="bg-[#0C0C1C] border-2 border-[#D395FF] rounded-3xl p-6 hard-shadow-lav -rotate-1">
            <h3 className="font-display text-2xl sm:text-3xl display-skew">CHICADANCE Trainee Track</h3>
            <p className="mt-3">
              <span className="font-display text-4xl sm:text-5xl text-[#D395FF] display-skew">$20</span>
              <span className="text-white/60 font-semibold">/month</span>
            </p>
            <p className="text-white/75 mt-3 text-sm md:text-base">
              For dancers ready to train with structure, build stronger technique, and access the
              live 1:1 elements included in the Trainee Track.
            </p>
            <ul className="mt-4 space-y-2">
              {TRACK_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85 text-sm md:text-base">
                  <span className="w-5 h-5 rounded-full bg-[#38B6FF] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#06060F]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="offer-trainee-cta"
              className="btn-primary font-display text-base sm:text-lg w-full mt-5 px-8 py-3 rounded-full hard-shadow-electric inline-flex items-center justify-center gap-2"
            >
              Enter Trainee Mode
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2 lg:mt-10" data-testid="offer-community-card">
          <div className="bg-[#0C0C1C] border-2 border-[#9CDAFF]/50 rounded-3xl p-6 rotate-1 hard-shadow-sky">
            <h3 className="font-display text-xl sm:text-2xl display-skew">CHICADANCE Community</h3>
            <p className="mt-3">
              <span className="font-display text-3xl sm:text-4xl text-[#9CDAFF] display-skew">$5</span>
              <span className="text-white/60 font-semibold">/month</span>
            </p>
            <p className="text-white/75 mt-3 text-sm md:text-base">
              For dancers who want to enter the community, connect with the world of CHICADANCE,
              and begin their training journey.
            </p>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="offer-community-cta"
              className="btn-ghost font-bold w-full mt-6 px-8 py-3.5 rounded-full border-2 border-[#9CDAFF] text-[#9CDAFF] inline-flex items-center justify-center"
            >
              Join the Community
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="text-sm text-white/50 text-center mt-6" data-testid="offer-supporting-copy">
          Membership details, current inclusions, and billing are completed securely inside Skool.
        </p>
      </Reveal>
    </div>
  </section>
);
