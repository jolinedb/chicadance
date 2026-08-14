import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionLabel } from "./Reveal";
import { SKOOL_URL } from "@/lib/constants";

const FAQS = [
  {
    q: "Is CHICADANCE for beginners?",
    a: "CHICADANCE is for dancers who want to improve with more structure and intention. The live Skool membership explains the current lesson levels and where to begin.",
  },
  {
    q: "Can online training really help me improve?",
    a: "Online training can give you structured drills, clear technique focus, and a consistent community to train with. Your progress still comes from practice, repetition, and applying the feedback and direction you receive.",
  },
  {
    q: "Will this help me audition for a K-pop agency?",
    a: "CHICADANCE can help you train more seriously and prepare your dance foundation for goals such as auditions. It does not guarantee an audition, agency interest, acceptance, or debut.",
  },
  {
    q: "What is included in the Trainee Track?",
    a: "The Trainee Track includes structured training, technique drills, and the live 1:1 elements described in the current Skool membership. Open the community page for the most current inclusions.",
  },
  {
    q: "What is the difference between Community and Trainee Track?",
    a: "The Community Membership is the $5/month entry point. The $20/month Trainee Track is the primary structured-training membership. The live Skool page has the current details for each option.",
  },
  {
    q: "Do I have to live in Korea?",
    a: "No. CHICADANCE is built so dancers can train from anywhere in the world.",
  },
  {
    q: "How do I join?",
    a: "Click any join button to open the CHICADANCE Skool community, where membership details and signup are completed.",
  },
  {
    q: "Are there refunds or a cancellation policy?",
    a: "Refund and cancellation details are managed inside the CHICADANCE Skool community. Open the community page for the current policy.",
    link: true,
  },
];

export const Faq = () => (
  <section id="faq" className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 scroll-mt-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
      <Reveal>
        <SectionLabel number="08">Questions, answered</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight display-skew">
          Before you press <span className="text-[#38B6FF]">play.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <Accordion type="single" collapsible className="space-y-4" data-testid="faq-accordion">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="bg-[#0C0C1C] border border-white/15 rounded-2xl px-6 data-[state=open]:border-[#D395FF]"
            >
              <AccordionTrigger
                data-testid={`faq-trigger-${i + 1}`}
                className="text-left font-bold text-white hover:text-[#D395FF] hover:no-underline text-sm sm:text-base"
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base">
                {faq.a}{" "}
                {faq.link && (
                  <a
                    href={SKOOL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38B6FF] underline font-semibold"
                    data-testid="faq-policy-link"
                  >
                    View the Skool community
                  </a>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
