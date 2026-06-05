import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function MouseGlow() {
  const [on, setOn] = useState(false);
  const x = useSpring(useMotionValue(0), { stiffness: 40, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 40, damping: 18 });
  const bg = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(34,211,238,0.07), transparent 55%)`;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setOn(true);
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!on) return null;
  return <motion.div className="pointer-events-none fixed inset-0 z-[1]" style={{ background: bg }} />;
}
