import { useState } from "react";
import { Menu, X, Sparkle } from "lucide-react";
import { SKOOL_URL } from "@/lib/constants";

const NAV = [
  { label: "The Track", href: "#track" },
  { label: "Meet Adina", href: "#adina" },
  { label: "Membership", href: "#membership" },
  { label: "FAQ", href: "#faq" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#06060F]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" data-testid="header-logo" className="flex items-center gap-2">
          <Sparkle className="w-5 h-5 text-[#D395FF]" fill="#D395FF" />
          <span className="font-display text-lg sm:text-xl text-white display-skew">
            CHICA<span className="text-[#38B6FF]">DANCE</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-semibold text-white/80 hover:text-[#D395FF] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-member-link"
            className="text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200"
          >
            Already a member?
          </a>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-join-cta"
            className="btn-primary font-display text-sm px-6 py-3 rounded-full hard-shadow-electric"
          >
            Join Trainee Track
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden bg-[#06060F]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-bold text-white py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-join-cta"
            className="btn-primary font-display text-base block text-center px-6 py-4 rounded-full mt-4"
          >
            Join Trainee Track
          </a>
        </div>
      )}
    </header>
  );
};
