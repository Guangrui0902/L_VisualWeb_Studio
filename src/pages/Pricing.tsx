import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, X, ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { packages, addOnSections, paymentTerms, type FeatureItem, type PackageTier } from "../data/pricing";
import { brand } from "../data/content";

const defaultId = packages.find((p) => p.highlight)?.id ?? packages[0].id;

function FeatureRow({ item }: { item: FeatureItem }) {
  return (
    <li
      className={`pricing-feature-row flex items-start gap-2.5 py-2 border-b border-white/[0.06] last:border-0 ${
        item.included ? "" : "opacity-55"
      }`}
    >
      {item.included ? (
        <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
      ) : (
        <X className="w-3.5 h-3.5 text-ink-faint shrink-0 mt-0.5" strokeWidth={1.5} />
      )}
      <div className="min-w-0 flex-1">
        <p className="text-base text-ink leading-snug">
          <span>{item.labelEn}</span>
          <span className="font-zh text-ink-faint text-sm ml-2">· {item.labelZh}</span>
        </p>
        {(item.detailEn || item.detailZh) && (
          <p className="text-xs sm:text-sm text-accent/90 mt-1 font-mono leading-snug">
            {item.detailEn}
            {item.detailZh && (
              <span className="font-zh text-ink-faint ml-1.5">{item.detailZh}</span>
            )}
          </p>
        )}
      </div>
    </li>
  );
}

function PackageSectionAccordion({
  section,
  isOpen,
  onToggle,
}: {
  section: PackageTier["sections"][0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const included = section.items.filter((i) => i.included).length;
  const isRollup = section.rollup === true;

  return (
    <div
      className={`pricing-accordion-section border-b border-white/[0.06] last:border-0 ${
        isRollup ? "pricing-rollup-section" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="pricing-accordion-trigger w-full flex items-center gap-3 py-3.5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <ChevronDown
          className={`w-4 h-4 text-accent shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />
        <div className="min-w-0 flex-1">
          <p className="text-base font-medium text-ink leading-tight">{section.titleEn}</p>
          <p className="font-zh text-sm text-ink-faint mt-0.5">{section.titleZh}</p>
        </div>
        <span className="font-mono text-xs text-ink-faint shrink-0 tabular-nums">
          {included}/{section.items.length}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul
              className={`pb-3 pl-7 list-none m-0 p-0 ${
                isRollup ? "pricing-rollup-list" : "pricing-feature-grid"
              }`}
            >
              {section.items.map((item) => (
                <FeatureRow key={`${section.titleEn}-${item.labelEn}`} item={item} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PackageDetailPanel({ pkg }: { pkg: PackageTier }) {
  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set([pkg.sections[0]?.titleEn].filter(Boolean))
  );
  const [expandAll, setExpandAll] = useState(false);

  useEffect(() => {
    setOpenSections(new Set([pkg.sections[0]?.titleEn].filter(Boolean)));
    setExpandAll(false);
  }, [pkg.id, pkg.sections]);

  const totalIncluded = pkg.sections.reduce(
    (n, s) => n + s.items.filter((i) => i.included).length,
    0
  );
  const totalItems = pkg.sections.reduce((n, s) => n + s.items.length, 0);

  const toggleSection = (title: string) => {
    if (expandAll) return;
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const handleExpandAll = () => {
    if (expandAll) {
      setExpandAll(false);
      setOpenSections(new Set([pkg.sections[0]?.titleEn].filter(Boolean)));
    } else {
      setExpandAll(true);
      setOpenSections(new Set(pkg.sections.map((s) => s.titleEn)));
    }
  };

  return (
    <motion.section
      key={pkg.id}
      id="package-detail-panel"
      role="tabpanel"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="pricing-detail-panel mt-8 rounded-xl overflow-hidden border border-white/12"
    >
      <div
        className={`pricing-detail-head px-5 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4 ${
          pkg.highlight ? "bg-accent/[0.08] border-b border-accent/15" : "bg-studio-soft border-b border-white/10"
        }`}
      >
        <div className="min-w-0">
          <h2 className="headline text-xl sm:text-2xl">{pkg.nameEn}</h2>
          <p className="font-zh text-base text-ink-faint">{pkg.nameZh}</p>
          <p className="text-sm text-ink-muted mt-1.5 max-w-lg">{pkg.taglineEn}</p>
          <p className="font-zh text-sm text-ink-faint mt-1 line-clamp-2">{pkg.taglineZh}</p>
          <p className="font-mono text-xs text-accent mt-1.5">{pkg.deliveryEn}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="headline text-3xl sm:text-4xl gradient-text">${pkg.price}</p>
          <p className="text-xs text-ink-faint mt-1">AUD · {totalIncluded}/{totalItems} included</p>
        </div>
      </div>

      <div className="px-5 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] bg-studio-card/40">
        <p className="text-sm text-ink-faint">
          Tap sections to expand · 点击章节展开明细
        </p>
        <button
          type="button"
          onClick={handleExpandAll}
          className="text-sm font-mono text-accent hover:text-ink transition-colors"
        >
          {expandAll ? "Collapse all · 全部收起" : "Expand all · 全部展开"}
        </button>
      </div>

      <div className="px-2 sm:px-3 bg-studio-card/30">
        {pkg.sections.map((section) => (
          <PackageSectionAccordion
            key={section.titleEn}
            section={section}
            isOpen={expandAll || openSections.has(section.titleEn)}
            onToggle={() => toggleSection(section.titleEn)}
          />
        ))}
      </div>
    </motion.section>
  );
}

export function Pricing() {
  const [selectedId, setSelectedId] = useState(defaultId);
  const selected = packages.find((p) => p.id === selectedId) ?? packages[0];

  return (
    <div className="pt-28 sm:pt-32 pb-20 sm:pb-24 min-h-screen">
      <div className="page-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Back to home
          </Link>

          <p className="label-mono mb-4">Pricing & scope</p>
          <h1 className="text-display-lg max-w-4xl">
            <span className="pricing-page-title">
              <span className="block">Fixed packages.</span>
              <span className="block">Contract-ready scope.</span>
            </span>
          </h1>
          <p className="font-zh text-xl text-ink-muted mt-3 max-w-4xl zh-sub">
            套餐与明细 · 可写入合同
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mt-10" role="tablist" aria-label="Packages">
          {packages.map((pkg) => {
            const active = pkg.id === selectedId;
            return (
              <button
                key={pkg.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="package-detail-panel"
                onClick={() => setSelectedId(pkg.id)}
                className={`relative text-left p-5 sm:p-6 rounded-xl transition-all duration-300 ${
                  active
                    ? "border-gradient ring-1 ring-accent/40"
                    : "glass hover:border-white/20"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-2.5 left-5 px-2.5 py-0.5 rounded-full bg-accent text-studio text-[10px] font-semibold">
                    Recommended
                  </span>
                )}
                <p className="headline text-lg sm:text-xl">{pkg.nameEn}</p>
                <p className="font-zh text-sm text-ink-faint mt-0.5">{pkg.nameZh}</p>
                <p className="mt-4">
                  <span className={`headline text-4xl sm:text-5xl ${active ? "gradient-text" : "text-ink"}`}>
                    ${pkg.price}
                  </span>
                  <span className="text-xs text-ink-faint ml-1.5">AUD</span>
                </p>
                <p className="mt-2 text-sm text-ink-muted line-clamp-2 leading-relaxed">{pkg.taglineEn}</p>
                <p className="font-zh text-xs text-ink-faint mt-1 line-clamp-2">{pkg.taglineZh}</p>
                {(pkg.priceNoteEn || pkg.priceNoteZh) && (
                  <p className="text-[11px] text-ink-faint mt-2 leading-snug">
                    {pkg.priceNoteEn}
                    {pkg.priceNoteZh && (
                      <span className="font-zh block mt-0.5">{pkg.priceNoteZh}</span>
                    )}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <PackageDetailPanel pkg={selected} />
        </AnimatePresence>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-6 sm:p-8 mt-12 mb-10"
        >
          <h2 className="headline text-2xl">Add-ons & care</h2>
          <p className="font-zh text-lg text-ink-faint mt-1">加购与订阅</p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left min-w-[520px] text-base">
              <thead>
                <tr className="font-mono text-xs uppercase tracking-widest text-ink-faint border-b border-white/10">
                  <th className="py-3 pr-6">Item</th>
                  <th className="py-3 pr-6">Price</th>
                  <th className="py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {addOnSections.flatMap((section) => [
                  <tr key={`${section.titleEn}-head`} className="border-b border-white/10 bg-white/[0.02]">
                    <td colSpan={3} className="py-2.5 pr-6">
                      <span className="font-mono text-xs uppercase tracking-widest text-accent">
                        {section.titleEn}
                      </span>
                      <span className="font-zh text-sm text-ink-faint ml-2">· {section.titleZh}</span>
                    </td>
                  </tr>,
                  ...section.items.map((a) => (
                    <tr key={`${section.titleEn}-${a.nameEn}`} className="border-b border-white/5">
                      <td className="py-3.5 pr-6">
                        <span className="text-ink font-medium">{a.nameEn}</span>
                        <span className="font-zh block text-sm text-ink-faint">{a.nameZh}</span>
                      </td>
                      <td className="py-3.5 pr-6 font-semibold text-accent whitespace-nowrap">{a.price}</td>
                      <td className="py-3.5 text-ink-muted text-sm">
                        {a.noteEn}
                        {a.noteZh && <span className="font-zh block text-ink-faint mt-1">{a.noteZh}</span>}
                      </td>
                    </tr>
                  )),
                ])}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-panel border-accent/20 p-6 sm:p-8"
        >
          <h2 className="headline text-2xl">Payment & boundaries</h2>
          <p className="font-zh text-lg text-ink-faint mt-1">付款与边界</p>
          <ul className="mt-5 space-y-4">
            {paymentTerms.map((t) => (
              <li key={t.en} className="text-base text-ink-muted border-l-2 border-accent/30 pl-4">
                <span className="text-ink">{t.en}</span>
                <span className="font-zh block text-base text-ink-faint mt-1">{t.zh}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${brand.email}`} className="btn-glow">
              Book walkthrough
              <ArrowUpRight className="w-5 h-5 relative z-10" />
            </a>
            <Link to="/" className="btn-outline">
              Back home
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
