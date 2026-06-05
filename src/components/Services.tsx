import { motion } from "framer-motion";
import { Globe, Camera, Search } from "lucide-react";
import { pillars } from "../data/content";
import { Bilingual } from "./ui/Bilingual";

const icons = [Globe, Camera, Search];

export function Services() {
  return (
    <section id="services" className="section-pad border-t border-white/10">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <p className="label-mono mb-4">Capabilities</p>
          <Bilingual
            as="h2"
            en="One contact. Full stack."
            zh="一人对接，三件交付。"
            enClassName="text-display-lg headline h2-tint-violet"
            zhClassName="zh-sub text-xl mt-3"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={p.titleEn}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group border-gradient rounded-2xl p-8 sm:p-10 relative overflow-hidden hover:border-white/20 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon className="w-10 h-10 text-accent relative z-10" strokeWidth={1.5} />
                <span className="absolute top-6 right-6 font-mono text-5xl font-bold text-white/[0.04] group-hover:text-accent/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Bilingual
                  as="h3"
                  en={p.titleEn}
                  zh={p.titleZh}
                  enClassName="headline text-2xl sm:text-3xl mt-8 relative z-10"
                  zhClassName="zh-sub text-base mt-2 relative z-10"
                />
                <Bilingual
                  as="p"
                  en={p.descEn}
                  zh={p.descZh}
                  enClassName="mt-4 text-base text-ink-muted relative z-10 leading-relaxed"
                  zhClassName="zh-sub text-sm mt-2 relative z-10"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
