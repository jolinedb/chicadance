import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Problem } from "@/components/landing/Problem";
import { Shift } from "@/components/landing/Shift";
import { TrainingLoop } from "@/components/landing/TrainingLoop";
import { Founder } from "@/components/landing/Founder";
import { Offer } from "@/components/landing/Offer";
import { Community } from "@/components/landing/Community";
import { IntroVideo } from "@/components/landing/IntroVideo";
import { Audition } from "@/components/landing/Audition";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export default function Landing() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.12, anchors: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div data-testid="landing-page">
      <div className="noise-overlay" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Shift />
        <TrainingLoop />
        <Founder />
        <Offer />
        <Community />
        <IntroVideo />
        <Audition />
        <Marquee fast className="rotate-1" />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
