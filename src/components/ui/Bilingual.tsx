import { ReactNode } from "react";

type Props = {
  en: ReactNode;
  zh?: ReactNode;
  enClassName?: string;
  zhClassName?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p";
};

export function Bilingual({
  en,
  zh,
  enClassName = "",
  zhClassName = "zh-sub text-[0.52em] sm:text-[0.48em] mt-[0.4em] max-w-[32ch] opacity-90",
  as: Tag = "div",
}: Props) {
  return (
    <Tag>
      <span className={`block ${enClassName}`}>{en}</span>
      {zh ? <span className={`block ${zhClassName}`}>{zh}</span> : null}
    </Tag>
  );
}
