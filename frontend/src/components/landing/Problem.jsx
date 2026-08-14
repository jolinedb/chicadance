import { motion, useReducedMotion } from "framer-motion";
import { ListVideo, EyeOff, Target } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const CARDS = [
  {
    icon: ListVideo,
    title: "Tutorial overload",
    body: "You save twenty routines and still do not have a training plan.",
    rotate: "-rotate-2",
    shadow: "hard-shadow-sky",
    border: "border-[#9CDAFF]",
  },
  {
    icon: EyeOff,
    title: "No one to correct you",
    body: "You cannot always see the habits holding back your movement, timing, or performance.",
    rotate: "rotate-1",
    shadow: "hard-shadow-lav",
    border: "border-[#D395FF]",
  },
  {
    icon: Target,
    title: "Dreaming without a standard",
    body: "You want to audition or improve seriously, but you do not know what \u201Cgood enough\u201D actually looks like.",
    rotate: "-rotate-1",
    shadow: "hard-shadow-berry",
    border: "border-[#AD4BAD]",
  },
];

export const Problem = () => {
  const reduced = useReducedMotion();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <SectionLabel number="01">You can feel when you have outgrown random tutorials</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight max-w-3xl display-skew">
            You do not need more dances to copy. <span className="text-[#38B6FF]">You need a way to train.</span>
          </h2>
          <p className="text-base md:text-lg text-white/75 max-w-2xl mt-6">
            You can replay choreography for hours and still wonder: Is my timing right? Is my body
            line clean? Am I actually improving, or just getting better at copying one video?
          </p>
          <p className="text-base md:text-lg text-white/75 max-w-2xl mt-4">
            Real progress comes from focused technique, repetition, correction, and knowing exactly
            what to work on next.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 60, rotate: i % 2 ? 6 : -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`problem-card-${i + 1}`}
              className={`bg-[#0C0C1C] border-2 ${card.border} ${card.rotate} ${card.shadow} rounded-2xl p-8 ${i === 1 ? "md:mt-10" : ""}`}
            >
              <card.icon className="w-8 h-8 text-[#D395FF] mb-5" />
              <h3 className="font-display text-lg text-white mb-3 display-skew">{card.title}</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="font-display text-xl sm:text-2xl text-center mt-16 display-skew" data-testid="problem-endline">
            Stop practicing in circles. <span className="text-[#D395FF]">Start training with a standard.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};
