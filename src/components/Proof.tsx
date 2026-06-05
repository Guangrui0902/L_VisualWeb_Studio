import { motion } from "framer-motion";
import { proofPromise, proofSignUp, type ProofSection } from "../data/content";
import { Bilingual } from "./ui/Bilingual";

const h2TintClass = {
  hot: "h2-tint-hot",
  pink: "h2-tint-pink",
} as const;

function ProofStats({ section, alignEnd }: { section: ProofSection; alignEnd?: boolean }) {
  return (
    <div
      className={`mt-6 grid grid-cols-3 gap-2.5 max-w-md ${alignEnd ? "lg:ml-auto" : ""}`}
    >
      {section.stats.map((s) => (
        <div key={s.labelEn} className="beam-stat rounded-xl px-3 py-3.5 text-center">
          <p className="headline text-xl sm:text-2xl gradient-text whitespace-nowrap">{s.value}</p>
          <p className="text-[10px] sm:text-xs text-ink-muted mt-1.5 leading-tight">{s.labelEn}</p>
          <p className="font-zh text-[10px] sm:text-xs text-ink-faint mt-0.5 leading-tight">{s.labelZh}</p>
        </div>
      ))}
    </div>
  );
}

function ProofDetails({ section, delayOffset = 0 }: { section: ProofSection; delayOffset?: number }) {
  return (
    <ul className="space-y-3 list-none m-0 p-0">
      {section.details.map((item, i) => (
        <motion.li
          key={item.en}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delayOffset + i * 0.05, duration: 0.4 }}
          className="beam-stat rounded-xl p-4 sm:p-5 hover:border-accent/25 transition-colors"
        >
          <Bilingual
            as="div"
            en={item.en}
            zh={item.zh}
            enClassName="text-base font-medium text-ink leading-snug"
            zhClassName="font-zh text-sm text-ink-faint mt-2 leading-relaxed"
          />
        </motion.li>
      ))}
    </ul>
  );
}

function ProofHeading({
  section,
  alignEnd,
}: {
  section: ProofSection;
  alignEnd?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={alignEnd ? "lg:text-right lg:ml-auto max-w-xl" : "max-w-xl"}
    >
      <Bilingual
        as="p"
        en={section.labelEn}
        zh={section.labelZh}
        enClassName="label-mono text-xs mb-1"
        zhClassName="font-zh text-xs text-ink-faint mb-3"
      />
      <Bilingual
        as="div"
        en={section.titleEn}
        zh={section.titleZh}
        enClassName={`text-display-md headline ${h2TintClass[section.h2Tint]}`}
        zhClassName="font-zh text-base text-ink-muted mt-2"
      />
      <ProofStats section={section} alignEnd={alignEnd} />
    </motion.div>
  );
}

function ProofRow({
  section,
  mirrored,
}: {
  section: ProofSection;
  mirrored?: boolean;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {mirrored ? (
        <>
          <div className="order-2 lg:order-1">
            <ProofDetails section={section} />
          </div>
          <div className="order-1 lg:order-2">
            <ProofHeading section={section} alignEnd />
          </div>
        </>
      ) : (
        <>
          <ProofHeading section={section} />
          <ProofDetails section={section} delayOffset={0.05} />
        </>
      )}
    </div>
  );
}

export function Proof() {
  return (
    <section className="section-pad-compact border-t border-white/10">
      <div className="page-container space-y-10 lg:space-y-12">
        <ProofRow section={proofSignUp} />
        <ProofRow section={proofPromise} mirrored />
      </div>
    </section>
  );
}
