import { Link } from "react-router-dom";
import { brand } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 glass relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden />
      <div className="page-container flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <p className="headline text-2xl">
            {brand.name}
            <span className="gradient-text">.</span>
          </p>
          <p className="mt-1 text-ink-muted">{brand.serviceEn}</p>
          <p className="font-zh text-base text-ink-faint">{brand.serviceZh}</p>
        </div>
        <div className="flex gap-8 text-base font-medium">
          <Link to="/pricing" className="text-accent font-semibold hover:brightness-110 transition">
            Pricing →
          </Link>
          <a href={`mailto:${brand.email}`} className="text-ink-muted hover:text-accent transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
