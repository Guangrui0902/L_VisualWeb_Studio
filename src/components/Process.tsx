import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { process } from "../data/content";
import { Bilingual } from "./ui/Bilingual";

function StepNode({
  step,
  index,
  isLast,
  inView,
}: {
  step: (typeof process)[0];
  index: number;
  isLast: boolean;
  inView: boolean;
}) {
  const optional = "optional" in step && step.optional;

  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-8 ${isLast ? "pb-0" : "pb-8 sm:pb-10"}`}
    >
      {/* 左侧：节点 + 向下连接线 */}
      <div className="flex flex-col items-center w-12 sm:w-14 shrink-0">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.05, type: "spring", stiffness: 260, damping: 22 }}
          className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 ${
            optional
              ? "border-dashed border-accent/50 bg-studio/80"
              : "border-accent bg-studio shadow-[0_0_24px_rgba(34,211,238,0.25)]"
          }`}
        >
          <span className="headline text-base sm:text-lg text-accent">{step.step}</span>
        </motion.div>
        {!isLast && (
          <>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.15, duration: 0.45 }}
              className="origin-top w-px flex-1 min-h-[2rem] sm:min-h-[2.75rem] mt-2 bg-gradient-to-b from-accent/70 via-accent/35 to-accent/10"
              aria-hidden
            />
            <ArrowDown
              className="w-4 h-4 text-accent/45 mt-1 mb-1 lg:hidden"
              aria-hidden
            />
          </>
        )}
      </div>

      {/* 右侧：内容卡 */}
      <article className="beam-stat rounded-2xl p-6 sm:p-8 mb-2 sm:mb-4 border border-white/10 hover:border-accent/25 transition-all duration-500">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
          <span className="label-mono text-[10px] text-ink-faint">
            Step {index + 1} of {process.length}
          </span>
          {optional ? (
            <span className="label-mono text-[10px] px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/25">
              Optional · 按套餐可选
            </span>
          ) : null}
        </div>
        <Bilingual
          as="h3"
          en={step.titleEn}
          zh={step.titleZh}
          enClassName="headline text-xl sm:text-2xl"
          zhClassName="zh-sub text-sm sm:text-base mt-1.5"
        />
        <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">{step.descEn}</p>
        <p className="font-zh text-sm text-ink-faint mt-2 leading-relaxed">{step.descZh}</p>
      </article>
    </motion.li>
  );
}

export function Process() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const inView = useInView(timelineRef, { once: true, margin: "-80px" });

  return (
    <section className="section-pad border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="page-container relative">
        <p className="label-mono mb-4">Process</p>
        <Bilingual
          as="h2"
          en="From first conversation to go-live."
          zh="合作流程"
          enClassName="text-display-lg headline h2-tint-pink"
          zhClassName="zh-sub text-xl mt-3"
        />
        <p className="mt-4 text-body-lg text-ink-muted max-w-2xl">
          One clear path — optional steps only where your package says so.
          <span className="font-zh block text-base text-ink-faint mt-2">
            按顺序推进；拍摄与持续更新仅在对应套餐中开启。
          </span>
        </p>

        {/* 大屏：顶部步骤条（方向感） */}
        <motion.ol
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex items-center justify-between gap-1 mt-14 mb-16 px-2"
          aria-hidden
        >
          {process.map((step, i) => (
            <li key={step.step} className="flex items-center flex-1 min-w-0 last:flex-none">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border text-xs font-mono shrink-0 ${
                  "optional" in step && step.optional
                    ? "border-dashed border-accent/40 text-accent/70"
                    : "border-accent/60 text-accent bg-accent/5"
                }`}
              >
                {step.step}
              </div>
              {i < process.length - 1 && (
                <div className="flex-1 flex items-center mx-1 min-w-[12px]">
                  <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-accent/20" />
                  <ArrowRight className="w-4 h-4 text-accent/40 shrink-0 mx-0.5" />
                  <div className="h-px flex-1 bg-gradient-to-r from-accent/20 to-accent/5" />
                </div>
              )}
            </li>
          ))}
        </motion.ol>

        {/* 时间轴主体 */}
        <ol ref={timelineRef} className="relative mt-12 lg:mt-0 max-w-4xl">
          {/* 左侧主脊线（桌面略偏左与节点对齐） */}
          <div
            className="absolute left-6 sm:left-7 top-6 bottom-6 w-px bg-gradient-to-b from-accent/60 via-accent/25 to-transparent hidden sm:block pointer-events-none"
            aria-hidden
          />

          {process.map((step, i) => (
            <StepNode
              key={step.step}
              step={step}
              index={i}
              isLast={i === process.length - 1}
              inView={inView}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
