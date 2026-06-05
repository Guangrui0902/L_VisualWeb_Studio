import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const child = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export function TextReveal({
  lines,
  className = "hero-title text-display-xl",
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className="block"
      aria-label={lines.join(" ")}
    >
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden pb-1">
          <motion.span variants={child} className={`block ${className}`}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
