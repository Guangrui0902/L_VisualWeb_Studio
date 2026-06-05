import { useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { demos } from "../data/content";
import { Bilingual } from "./ui/Bilingual";
import { WorkMedia } from "./ui/WorkMedia";

function WorkCard({
  index,
  titleEn,
  titleZh,
  href,
  image,
  tag,
  isActive,
  onActivate,
}: {
  index: number;
  titleEn: string;
  titleZh: string;
  href: string;
  image: string;
  tag: string;
  isActive: boolean;
  onActivate: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 280, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 280, damping: 22 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(-py * 12);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onActivate}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
      }}
      className={`work-card ${isActive ? "is-active" : ""}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="work-card-inner group">
        <div className="work-card-media">
          <WorkMedia src={image} alt={titleEn} className="work-card-img" />
          <div className="work-card-media-overlay" />
          <span className="work-card-index" aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="work-card-body">
          <span className="label-mono text-[10px] text-accent/90">{tag}</span>
          <h3 className="headline text-xl sm:text-2xl mt-3 tracking-tight group-hover:text-accent transition-colors duration-300">
            {titleEn}
          </h3>
          <p className="font-zh text-sm text-ink-muted mt-2 leading-relaxed">{titleZh}</p>
          <span className="work-card-cta mt-5">
            Open live demo
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </a>
    </motion.article>
  );
}

export function Showcase() {
  const [active, setActive] = useState(0);

  return (
    <section id="showcase" className="section-pad work-section border-t border-white/[0.06]">
      <div className="page-container relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-14"
        >
          <div className="max-w-3xl">
            <p className="label-mono mb-5">Live work</p>
            <Bilingual
              as="h2"
              en="This is what we ship."
              zh="这就是我们交付的标准。"
              enClassName="text-display-lg headline tracking-tight h2-tint-cyan"
              zhClassName="zh-sub text-xl mt-4"
            />
            <div className="hero-rule mt-10 max-w-xs" />
          </div>
          <p className="label-mono text-[10px] text-ink-faint hidden sm:block">
            Scroll →
          </p>
        </motion.div>

        <div className="work-rail-outer">
          <div className="work-rail">
            {demos.map((d, i) => (
              <WorkCard
                key={d.titleEn}
                index={i}
                titleEn={d.titleEn}
                titleZh={d.titleZh}
                href={d.href}
                image={d.image}
                tag={d.tag}
                isActive={active === i}
                onActivate={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
