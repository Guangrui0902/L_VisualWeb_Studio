import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const id = hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 15;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempts < maxAttempts) {
        attempts += 1;
        window.setTimeout(tryScroll, 50);
      }
    };

    tryScroll();
  }, [pathname, hash]);

  return null;
}
