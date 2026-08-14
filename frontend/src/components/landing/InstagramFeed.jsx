import { Instagram, ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { INSTAGRAM_URL, INSTA_GRID } from "@/lib/constants";

export const InstagramFeed = () => (
  <section className="relative py-24 sm:py-32" data-testid="instagram-feed">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <Reveal>
          <SectionLabel number="09">Latest on Instagram</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight display-skew">
            See the training <span className="text-[#D395FF]">in motion.</span>
          </h2>
          <p className="text-base md:text-lg text-white/75 max-w-lg mt-5">
            Behind the scenes, choreography clips, and dance challenges — fresh from the studio.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-follow-btn"
            className="btn-primary font-display text-base px-8 py-4 rounded-full hard-shadow-electric inline-flex items-center gap-2 whitespace-nowrap"
          >
            <Instagram className="w-5 h-5" /> Follow @adina.joline
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTA_GRID.map((src, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`instagram-post-${i + 1}`}
              className="group relative block aspect-square overflow-hidden rounded-xl border border-white/15 bg-[#0C0C1C]"
            >
              <img
                src={src}
                alt={`CHICADANCE Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#06060F]/0 group-hover:bg-[#06060F]/50 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="instagram-handle-link"
          className="inline-flex items-center gap-1 text-sm font-bold text-white/60 hover:text-[#D395FF] transition-colors duration-200 mt-10"
        >
          @adina.joline on Instagram <ArrowUpRight className="w-4 h-4" />
        </a>
      </Reveal>
    </div>
  </section>
);
