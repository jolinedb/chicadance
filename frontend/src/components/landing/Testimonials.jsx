import { ArrowRight, Play, Instagram } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { SKOOL_URL } from "@/lib/constants";

// embeddable: Instagram allows /embed rendering. When false we show a click-through card
// (Instagram has embedding disabled for that specific reel).
const REELS = [
  { id: "DSly_l0DjS2", embeddable: false },
  { id: "DTNUh-1iPBS", embeddable: true },
];

const reelUrl = (id) => `https://www.instagram.com/reel/${id}/`;

export const Testimonials = () => (
  <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16" data-testid="testimonials-section">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
      <Reveal className="text-center">
        <SectionLabel number="09">In their words</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight display-skew max-w-3xl mx-auto">
          Real dancers, <span className="text-[#D395FF]">real progress.</span>
        </h2>
        <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto mt-6">
          Hear straight from the community &mdash; these are dancers training with CHICADANCE.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 mt-14 max-w-3xl mx-auto">
        {REELS.map((reel, i) => (
          <Reveal key={reel.id} delay={i * 0.15} className={i % 2 ? "rotate-1" : "-rotate-1"}>
            {reel.embeddable ? (
              <div className="rounded-2xl overflow-hidden border-2 border-[#38B6FF] hard-shadow-electric bg-black">
                <iframe
                  title={`CHICADANCE testimonial ${i + 1}`}
                  data-testid={`testimonial-reel-${i + 1}`}
                  src={`https://www.instagram.com/reel/${reel.id}/embed`}
                  className="w-full h-[560px] sm:h-[620px]"
                  frameBorder="0"
                  scrolling="no"
                  allowtransparency="true"
                  allow="encrypted-media"
                />
              </div>
            ) : (
              <a
                href={reelUrl(reel.id)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`testimonial-reel-${i + 1}`}
                className="group relative flex flex-col items-center justify-center h-[560px] sm:h-[620px] rounded-2xl overflow-hidden border-2 border-[#D395FF] hard-shadow-berry bg-gradient-to-br from-[#160B24] via-[#0C0C1C] to-[#0A1730] text-center p-8"
              >
                <span className="w-20 h-20 rounded-full bg-[#38B6FF] flex items-center justify-center hard-shadow-electric transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-9 h-9 text-[#06060F] ml-1" fill="#06060F" />
                </span>
                <p className="font-display text-2xl sm:text-3xl uppercase display-skew text-white mt-8 leading-tight">
                  Dancer <span className="text-[#D395FF]">testimonial</span>
                </p>
                <p className="text-sm text-white/70 mt-4 max-w-xs">
                  Watch this member share their CHICADANCE experience on Instagram.
                </p>
                <span className="inline-flex items-center gap-2 font-bold text-sm text-[#9CDAFF] border-2 border-[#38B6FF]/50 rounded-full px-5 py-2.5 mt-8 transition-colors group-hover:bg-[#38B6FF] group-hover:text-[#06060F]">
                  <Instagram className="w-4 h-4" />
                  Watch on Instagram
                </span>
              </a>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="text-center">
        <a
          href={SKOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="testimonials-cta"
          className="btn-primary font-display text-base px-8 py-4 rounded-full hard-shadow-electric inline-flex items-center gap-2 mt-14"
        >
          Join them inside CHICADANCE
          <ArrowRight className="w-5 h-5" />
        </a>
      </Reveal>
    </div>
  </section>
);
