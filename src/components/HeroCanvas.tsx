import { motion } from "framer-motion";

/** Abstract studio craft — no client thumbnails, no orbit cards */
export function HeroCanvas() {
  return (
    <div className="hero-canvas" aria-hidden>
      <div className="hero-canvas-grid" />
      <div className="hero-canvas-orb hero-canvas-orb-a" />
      <div className="hero-canvas-orb hero-canvas-orb-b" />
      <motion.div
        className="hero-canvas-plane hero-canvas-plane-a"
        animate={{ y: [0, -12, 0], rotateX: [62, 64, 62] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-canvas-shard hero-canvas-shard-a"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] text-accent/80">48h preview</span>
        <span className="font-mono text-[9px] text-ink-faint mt-2">Sydney · EN/ZH</span>
      </motion.div>
      <motion.div
        className="hero-canvas-shard hero-canvas-shard-b"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="font-mono text-[10px] text-ink-muted">Mobile-first</span>
        <span className="font-mono text-[9px] text-ink-faint mt-2">SEO · GBP · Forms</span>
      </motion.div>
      <motion.div
        className="hero-canvas-shard hero-canvas-shard-c"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="font-mono text-[10px] text-ink-muted">Fixed packages</span>
        <span className="font-mono text-[9px] text-ink-faint mt-2">from $980 AUD</span>
      </motion.div>
      <div className="hero-canvas-scan" />
    </div>
  );
}
