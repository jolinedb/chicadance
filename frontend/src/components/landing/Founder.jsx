import { Sparkle } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { IMG } from "@/lib/constants";

const RIBBON = [
  "Former K-pop trainee in Seoul",
  "Trained with industry experts from HYBE and SM",
  "Learned from choreographers and performance directors connected to BTS, RIIZE, and aespa",
];

export const Founder = () => (
  <section id="adina" className="relative py-24 sm:py-32 bg-[#0C0C1C] rounded-t-[3rem] rounded-b-[3rem] scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 bg-gradient-to-br from-[#415AB6] via-[#AD4BAD] to-[#D395FF] rounded-[2rem] -rotate-2" />
          <div
            data-testid="founder-portrait-slot"
            className="relative aspect-[4/5] rounded-[2rem] rotate-1 overflow-hidden border-2 border-white/10"
          >
            <img
              src={IMG.founder}
              alt="Adina De Bezenac, founder of CHICADANCE and former K-pop trainee"
              className="w-full h-full object-cover object-[center_70%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06060F]/85 to-transparent pt-16 pb-5 px-6">
              <p className="font-display text-xl sm:text-2xl display-skew text-white">ADINA DE BEZENAC</p>
              <p className="text-xs tracking-[0.3em] text-[#9CDAFF] font-bold uppercase mt-1">
                Founder · Former K-pop Trainee
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#9CDAFF] text-[#06060F] px-4 py-2 rounded-xl border-2 border-[#06060F] rotate-3 hard-shadow-berry">
            <span className="font-display text-xs sm:text-sm display-skew">SEOUL TRAINED</span>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionLabel number="04">From Seoul trainee to your training room</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight display-skew">
              I built the place I wish <span className="text-[#D395FF]">more dancers had access to.</span>
            </h2>
            <p className="text-base md:text-lg text-white/80 mt-6 leading-relaxed">
              I trained in the K-pop system in Seoul with industry experts connected to the
              standards behind some of the world&rsquo;s most demanding performance environments.
              What changed me was not just learning choreography. It was learning how to train: the
              drills, the details, the repetition, and the honest feedback that makes progress
              real.
            </p>
            <p className="text-base md:text-lg text-white/80 mt-4 leading-relaxed">
              CHICADANCE exists to bring that level of intention to dancers everywhere. You do not
              have to live in Korea to start taking your training seriously.
            </p>
            <div className="mt-8" data-testid="founder-signature">
              <p className="font-display text-xl text-white display-skew">Adina De Bezenac</p>
              <p className="text-sm text-[#9CDAFF] font-semibold mt-1">
                Founder, CHICADANCE · Former K-pop Trainee
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-16">
        <div className="flex flex-wrap gap-3 justify-center" data-testid="credibility-ribbon">
          {RIBBON.map((claim, i) => (
            <span
              key={claim}
              className={`flex items-center gap-2 bg-[#06060F] border border-[#D395FF]/40 text-white/85 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full ${
                i % 2 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <Sparkle className="w-3.5 h-3.5 text-[#D395FF]" fill="#D395FF" />
              {claim}
            </span>
          ))}
        </div>
        <p className="text-xs text-white/40 text-center mt-5 max-w-xl mx-auto">
          Names are shared to describe Adina&rsquo;s training background. They do not imply
          endorsement or affiliation with CHICADANCE.
        </p>
      </Reveal>
    </div>
  </section>
);
