import { Play, ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SKOOL_URL, INTRO_VIDEO_URL } from "@/lib/constants";

const REASONS = [
  "See a real trainee-style session from start to finish",
  "Steal the daily training rhythm you can copy from your room",
  "Feel the energy of the CHICADANCE community before you join",
  "Understand exactly what's waiting for you inside the course",
];

export const IntroVideo = () => (
  <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16" data-testid="intro-video-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal x={-70} className="relative">
          <div className="absolute -inset-2 bg-gradient-to-br from-[#38B6FF] to-[#AD4BAD] rounded-3xl rotate-2 opacity-70 blur-[2px]" />
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#38B6FF] hard-shadow-electric -rotate-1 bg-black">
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
        </Reveal>

        <Reveal x={70} delay={0.15}>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-[#38B6FF] text-[#06060F] font-bold text-xs tracking-[0.2em] px-3 py-1.5 rounded-full uppercase">
              <Play className="w-3.5 h-3.5" fill="#06060F" />
              Press play
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight display-skew" data-testid="intro-video-headline">
            How to train like a <span className="text-[#D395FF]">K-pop trainee</span> from home
          </h2>
          <p className="text-base md:text-lg text-white/75 mt-6 max-w-lg">
            Take two minutes and watch how a real session runs. This is the exact rhythm CHICADANCE
            dancers train with every week &mdash; no studio, no agency, just you and a plan.
          </p>
          <ul className="mt-8 space-y-4" data-testid="intro-video-reasons">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-white font-semibold">
                <span className="w-6 h-6 rounded-full bg-[#38B6FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#06060F]" />
                </span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="intro-video-cta"
            className="btn-primary font-display text-base px-8 py-4 rounded-full hard-shadow-electric inline-flex items-center gap-2 mt-10"
          >
            Join and start training
            <ArrowRight className="w-5 h-5" />
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);
