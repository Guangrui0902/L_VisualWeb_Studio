import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  image: string;
  titleEn: string;
  titleZh: string;
  tag: string;
  featured?: boolean;
};

export function DemoCard({ href, image, titleEn, titleZh, tag, featured }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 22 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`demo-card-tilt group block border-gradient rounded-2xl overflow-hidden hover:shadow-glow-lg transition-shadow duration-500 ${
        featured ? "showcase-featured" : ""
      }`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="demo-card-inner"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className={`relative overflow-hidden ${featured ? "aspect-[16/11] lg:aspect-auto lg:min-h-[420px]" : "aspect-[16/10]"}`}>
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <div className="demo-card-shine" />
          <div className="absolute inset-0 bg-gradient-to-t from-studio via-studio/50 to-studio/10" />
          <span className="absolute top-4 left-4 label-mono px-3 py-1 rounded-lg glass text-xs">
            {tag}
          </span>
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <p className={`headline leading-tight ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
              {titleEn}
            </p>
            <p className="font-zh text-base text-ink-muted mt-1">{titleZh}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Open live demo <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}
