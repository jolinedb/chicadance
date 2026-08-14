import { Sparkle, Music2 } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

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
          {/* Founder portrait slot — replace src when Adina's photo is supplied */}
          <div className="absolute -inset-3 bg-gradient-to-br from-[#415AB6] via-[#AD4BAD] to-[#D395FF] rounded-[2rem] -rotate-2" />
          <div
            data-testid="founder-portrait-slot"
            className="relative aspect-[4/5] rounded-[2rem] rotate-1 overflow-hidden bg-[#06060F] border-2 border-white/10 flex flex-col items-center justify-center gap-6 p-10 text-center"
          >
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,#415AB6_0%,transparent_50%),radial-gradient(circle_at_70%_80%,#AD4BAD_0%,transparent_50%)]" />
            <Music2 className="relative w-10 h-10 text-[#D395FF]" />
            <p className="relative font-display text-3xl sm:text-4xl display-skew text-white">
              ADINA<br />DE BEZENAC
            </p>
            <p className="relative text-xs tracking-[0.3em] text-[#9CDAFF] font-bold uppercase">
              Portrait coming soon
            </p>
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
