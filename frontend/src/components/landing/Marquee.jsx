import { Sparkle } from "lucide-react";

const ITEMS = ["TECHNIQUE", "MUSICALITY", "PERFORMANCE", "5 · 6 · 7 · 8", "TRAINEE MODE"];

export const Marquee = ({ fast = false, className = "" }) => (
  <div
    className={`relative overflow-hidden py-4 bg-[#415AB6] border-y-2 border-[#06060F] -rotate-1 scale-[1.02] ${className}`}
    aria-hidden="true"
    data-testid="editorial-marquee"
  >
    <div className={`marquee-track ${fast ? "marquee-fast" : ""}`}>
      {[0, 1].map((dup) => (
        <div key={dup} className="flex items-center shrink-0">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={`${dup}-${i}`} className="flex items-center">
              <span className="font-display text-lg sm:text-2xl text-white display-skew whitespace-nowrap px-6">
                {item}
              </span>
              <Sparkle className="w-4 h-4 text-[#D395FF]" fill="#D395FF" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
