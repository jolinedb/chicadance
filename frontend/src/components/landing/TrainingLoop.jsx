import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Repeat, MessageSquare } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const STEPS = [
  {
    num: "01",
    icon: BookOpen,
    title: "LEARN THE STANDARD",
    body: "Train with focused K-pop dance lessons and technique drills designed to sharpen the foundations behind stronger performance.",
    color: "#38B6FF",
  },
  {
    num: "02",
    icon: Repeat,
    title: "PRACTICE WITH PURPOSE",
    body: "Use a clear training rhythm instead of endlessly jumping between random choreography videos.",
    color: "#D395FF",
  },
  {
    num: "03",
    icon: MessageSquare,
    title: "GET DIRECTION",
    body: "Inside the Trainee Track, access the live 1:1 elements included with membership and use feedback to understand what to work on next.",
    color: "#AD4BAD",
  },
];

export const TrainingLoop = () => {
  const reduced = useReducedMotion();
  return (
    <section id="track" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <SectionLabel number="03">The CHICADANCE training loop</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl uppercase leading-tight display-skew">
            Train. <span className="text-[#38B6FF]">Get clear.</span>{" "}
            <span className="text-[#D395FF]">Repeat.</span>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={reduced ? { opacity: 1 } : { opacity: 0, x: i % 2 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`training-step-${i + 1}`}
              className={`flex flex-col sm:flex-row gap-6 sm:gap-10 items-start bg-[#0C0C1C] border-2 rounded-3xl p-8 sm:p-10 ${
                i % 2 ? "sm:ml-16 lg:ml-32 rotate-1" : "sm:mr-16 lg:mr-32 -rotate-1"
              }`}
              style={{ borderColor: step.color, boxShadow: `6px 6px 0 ${step.color}` }}
            >
              <span className="font-display text-5xl sm:text-7xl text-stroke display-skew shrink-0">
                {step.num}
              </span>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  <h3 className="font-display text-xl sm:text-2xl display-skew">{step.title}</h3>
                </div>
                <p className="text-white/75 text-base md:text-lg max-w-xl">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="font-display text-xl sm:text-2xl text-center mt-16 display-skew" data-testid="training-result-line">
            More intention in every count.{" "}
            <span className="text-[#9CDAFF]">More confidence in every performance.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};
