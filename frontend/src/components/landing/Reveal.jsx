import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 40, className = "", ...rest }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const SectionLabel = ({ number, children }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="font-display text-xs sm:text-sm text-[#38B6FF] display-skew">{number}</span>
    <span className="h-px w-10 bg-[#38B6FF]/50" />
    <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#9CDAFF] uppercase">
      {children}
    </span>
  </div>
);
