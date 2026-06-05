import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { brand } from "../data/content";

const links = [
  { hash: "showcase", label: "Work" },
  { hash: "services", label: "Services" },
  { hash: "contact", label: "Contact" },
];

function isActive(pathname: string, hash: string, section: string) {
  return pathname === "/" && (hash === `#${section}` || hash === section);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/10 py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="page-container flex items-center justify-between gap-4">
        <Link to="/" className="headline text-lg sm:text-xl shrink-0 leading-tight flex items-center gap-2 group">
          <span className="hero-live-dot opacity-80 group-hover:opacity-100" aria-hidden />
          {brand.name}
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.hash}
              to={{ pathname: "/", hash: l.hash }}
              className={`nav-link-studio ${isActive(pathname, hash, l.hash) ? "is-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/pricing" className="btn-pricing !text-sm !py-3 !px-7">
            <span className="btn-pricing-shine" aria-hidden />
            Packages & pricing
          </Link>
        </div>

        <button type="button" className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="page-container py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.hash}
                  to={{ pathname: "/", hash: l.hash }}
                  onClick={() => setOpen(false)}
                  className="text-xl headline"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/pricing" onClick={() => setOpen(false)} className="btn-pricing w-full mt-2 justify-center">
                Packages & pricing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
