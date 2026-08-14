import { ArrowRight, Play } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { SKOOL_URL, IMG, INTRO_VIDEO_URL } from "@/lib/constants";

export const Community = () => (
  <section className="relative py-24 sm:py-32 bg-[#0C0C1C] rounded-t-[3rem] rounded-b-[3rem] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <Reveal>
            <SectionLabel number="06">You are not training alone</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight display-skew">
              Join dancers who decided to <span className="text-[#D395FF]">take themselves seriously.</span>
            </h2>
            <p className="font-display text-6xl sm:text-7xl lg:text-8xl mt-8 display-skew" data-testid="community-count">
              <span className="text-[#38B6FF]">1,500+</span>
              <span className="block text-lg sm:text-xl text-white/70 mt-1 font-sans font-bold tracking-[0.2em] skew-x-0">
                MEMBERS
              </span>
            </p>
            <p className="text-base md:text-lg text-white/75 mt-6 max-w-lg">
              From bedroom practice sessions to big audition goals, CHICADANCE is a place to keep
              showing up, learn with intention, and build confidence beside dancers who get it.
            </p>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="community-cta"
              className="btn-primary font-display text-base px-8 py-4 rounded-full hard-shadow-electric inline-flex items-center gap-2 mt-8"
            >
              Meet the CHICADANCE Community
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="mt-8" data-testid="community-intro-video-block">
              <p className="flex items-center gap-2 text-xs tracking-[0.25em] font-bold uppercase text-[#9CDAFF] mb-3">
                <Play className="w-4 h-4" fill="#9CDAFF" />
                Video intro to the course &amp; community
              </p>
              <div className="rounded-2xl overflow-hidden border-2 border-[#38B6FF] hard-shadow-electric -rotate-1 bg-black">
                <video
                  data-testid="community-intro-video"
                  src={INTRO_VIDEO_URL}
                  poster="/intro-video-poster.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative h-[420px] sm:h-[500px]" data-testid="community-collage">
          <div className="absolute top-0 left-0 w-[70%] rotate-[-4deg] rounded-2xl overflow-hidden border-2 border-[#D395FF] hard-shadow-electric">
            <img src={IMG.studioFloor} alt="CHICADANCE dancer training in a Seoul practice studio" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[70%] rotate-[3deg] rounded-2xl overflow-hidden border-2 border-[#38B6FF] hard-shadow-berry">
            <img src={IMG.greenScreen} alt="CHICADANCE dancer filming choreography content" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-[42%] left-[38%] bg-[#D395FF] text-[#06060F] px-4 py-2 rounded-xl border-2 border-[#06060F] rotate-[-6deg] hard-shadow-sky">
            <span className="font-display text-xs sm:text-sm display-skew">INSIDE SKOOL</span>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
