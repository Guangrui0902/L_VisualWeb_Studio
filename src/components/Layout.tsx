import { ReactNode } from "react";
import { CyberBackdrop } from "./ui/CyberBackdrop";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <CyberBackdrop />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
