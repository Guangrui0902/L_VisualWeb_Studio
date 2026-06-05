import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { brand, hero, heroStats } from "../data/content";
import { Bilingual } from "./ui/Bilingual";
import { TextReveal } from "./ui/TextReveal";
export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-20">
      <div className="page-container relative z-10 w-full">
        <div className="hero-monument-inner max-w-[920px]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label-mono mb-8"
          >
            {brand.serviceEn}
          </motion.p>

          <h1 className="hero-title-group headline leading-[0.9] tracking-[-0.045em]">
            <TextReveal
              lines={[hero.line1]}
              className="text-display-xl hero-headline hero-headline-line1 block"
            />
            <span className="block overflow-hidden pb-1 mt-2">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-display-xl block hero-headline hero-headline-line2"
              >
                {hero.line2}
                <span className="hero-headline-dot">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-rule mt-10 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="mt-10 max-w-xl"
          >
            <Bilingual
              as="p"
              en={hero.subEn}
              zh={hero.subZh}
              enClassName="text-body-lg text-ink-muted leading-relaxed"
              zhClassName="zh-sub text-lg mt-5"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <Link to="/pricing" className="btn-pricing group">
              <span className="btn-pricing-shine" aria-hidden />
              View packages & pricing
              <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a href="#showcase" className="btn-outline">
              See live demos
            </a>
          </motion.div>
        </div>

        {/* Full container width — not capped at 920px */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42 }}
          className="hero-stat-strip mt-16 sm:mt-20 lg:mt-24"
        >
          {heroStats.map((s, i) => (
            <motion.li
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`hero-stat-item hero-stat-item--${i + 1}`}
            >
              <span className="hero-stat-index">0{i + 1}</span>
              <span className="hero-stat-value">{s.v}</span>
              <span className="hero-stat-label-en">{s.labelEn}</span>
              <span className="hero-stat-label-zh">{s.labelZh}</span>
            </motion.li>
          ))}
        </motion.ul>

        <p className="label-mono text-ink-faint/60 mt-8 lg:mt-10 hidden lg:block">{brand.taglineEn} · {brand.taglineZh}</p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-faint pointer-events-none z-10">
        <span className="label-mono text-[10px]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
          <ArrowDown className="w-5 h-5 text-accent/70" strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
}
