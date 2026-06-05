import { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  border?: boolean;
};

export function Section({ id, children, className = "", border = true }: Props) {
  return (
    <section
      id={id}
      className={`section-pad ${border ? "border-t border-white/10" : ""} ${className}`}
    >
      <div className="page-container">{children}</div>
    </section>
  );
}
