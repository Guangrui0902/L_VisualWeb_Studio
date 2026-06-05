import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Instagram } from "lucide-react";
import { brand } from "../data/content";
import { Bilingual } from "./ui/Bilingual";

const contactChannels = [
  {
    icon: Mail,
    labelEn: "Email",
    labelZh: "邮箱",
    value: brand.email,
    href: `mailto:${brand.email}`,
    external: false,
    valueNoWrap: true,
  },
  {
    icon: Instagram,
    labelEn: "Instagram",
    labelZh: "Instagram",
    value: `@${brand.instagram}`,
    href: brand.instagramUrl,
    external: true,
    valueNoWrap: false,
  },
  {
    icon: MessageCircle,
    labelEn: "WeChat",
    labelZh: "微信",
    value: brand.wechat,
    href: undefined,
    external: false,
    noteEn: brand.wechatNoteEn,
    noteZh: brand.wechatNoteZh,
    valueNoWrap: false,
  },
];

export function CTA() {
  return (
    <section id="contact" className="section-pad">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="cta-beam relative rounded-3xl border-gradient p-10 sm:p-16 overflow-hidden"
        >
          <div className="absolute inset-[1px] rounded-[inherit] bg-studio-card z-0" />
          <div className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-br from-accent/15 via-studio-card to-accent-violet/10 pointer-events-none z-[1]" />
          <div className="relative z-10">
            <p className="label-mono mb-5">Contact</p>
            <Bilingual
              as="h2"
              en="Book a 15-minute walkthrough"
              zh="预约 15 分钟演示"
              enClassName="text-display-md headline"
              zhClassName="zh-sub text-xl mt-3"
            />
            <p className="mt-6 text-body-lg text-ink-muted max-w-2xl">
              We’ll open the right live demo and walk through the package.
            </p>
            <p className="font-zh text-lg text-ink-faint mt-2">同行业 Demo + 套餐说明。</p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-3 max-w-5xl">
              {contactChannels.map((ch) => {
                const Icon = ch.icon;
                const inner = (
                  <>
                    <div className="flex items-center gap-2 text-accent">
                      <Icon className="w-4 h-4 shrink-0" strokeWidth={2} />
                      <span className="font-mono text-xs uppercase tracking-widest">{ch.labelEn}</span>
                      <span className="font-zh text-xs text-ink-faint">· {ch.labelZh}</span>
                    </div>
                    <p
                      className={`mt-3 font-semibold text-ink ${
                        ch.valueNoWrap
                          ? "whitespace-nowrap text-sm sm:text-base overflow-x-auto"
                          : "text-lg break-all"
                      }`}
                    >
                      {ch.value}
                    </p>
                    {(ch.noteEn || ch.noteZh) && (
                      <p className="mt-2 text-sm text-ink-muted">
                        {ch.noteEn}
                        {ch.noteZh && <span className="font-zh block text-ink-faint mt-1">{ch.noteZh}</span>}
                      </p>
                    )}
                  </>
                );

                const cardClass =
                  "block rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-colors hover:border-accent/30 hover:bg-white/[0.05]";

                return (
                  <li key={ch.labelEn}>
                    {ch.href ? (
                      <a
                        href={ch.href}
                        className={`${cardClass} group`}
                        {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {inner}
                        {ch.external && (
                          <ArrowUpRight className="w-4 h-4 text-accent mt-3 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        )}
                      </a>
                    ) : (
                      <div className={cardClass}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={`mailto:${brand.email}`} className="btn-glow group">
                Email us
                <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link to="/pricing" className="btn-pricing group">
                <span className="btn-pricing-shine" aria-hidden />
                View full pricing
                <ArrowUpRight className="w-5 h-5 relative z-10" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
