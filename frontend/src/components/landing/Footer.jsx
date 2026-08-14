import { Sparkle, Mail, ExternalLink } from "lucide-react";
import { SKOOL_URL } from "@/lib/constants";

export const Footer = () => (
  <footer className="border-t border-white/10 py-14 bg-[#06060F]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Sparkle className="w-5 h-5 text-[#D395FF]" fill="#D395FF" />
            <span className="font-display text-lg text-white display-skew">
              CHICA<span className="text-[#38B6FF]">DANCE</span>
            </span>
          </div>
          <p className="text-sm text-white/50 mt-3 max-w-sm">
            Online K-pop dance academy. Train like a professional trainee, from anywhere in the
            world.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-skool-link"
            className="flex items-center gap-2 text-white/70 hover:text-[#D395FF] transition-colors duration-200 font-semibold"
          >
            <ExternalLink className="w-4 h-4" /> CHICADANCE Skool Community
          </a>
          <a
            href="mailto:adinadebez@gmail.com"
            data-testid="footer-email-link"
            className="flex items-center gap-2 text-white/70 hover:text-[#D395FF] transition-colors duration-200 font-semibold"
          >
            <Mail className="w-4 h-4" /> adinadebez@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 mt-10 pt-8 space-y-2">
        <p className="text-xs text-white/40">© 2026 CHICADANCE. All rights reserved.</p>
        <p className="text-xs text-white/40">
          CHICADANCE provides dance training and education. It does not guarantee auditions, agency
          placement, or professional outcomes.
        </p>
      </div>
    </div>
  </footer>
);
