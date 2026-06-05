/**
 * Two-layer laser system:
 *  1. Floor lasers  — inside rotateX(60°) plane, locked to grid cells
 *  2. Screen lasers — outside perspective, full-viewport neon tubes
 *     Each screen laser = crisp core (main el) + soft glow (::before, independent filter)
 */

/* ── Floor grid lasers (perspective plane) ── */
const FLOOR_LASERS = [
  { id: 1,  axis: "h" as const, lineClass: "clr-row-3",  pal: "a", dur: "26s", delay: "0s" },
  { id: 2,  axis: "h" as const, lineClass: "clr-row-7",  pal: "b", dur: "34s", delay: "-9s" },
  { id: 3,  axis: "h" as const, lineClass: "clr-row-12", pal: "c", dur: "28s", delay: "-17s" },
  { id: 4,  axis: "h" as const, lineClass: "clr-row-17", pal: "a", dur: "38s", delay: "-5s" },
  { id: 5,  axis: "v" as const, lineClass: "clr-col-3",  pal: "b", dur: "30s", delay: "-3s" },
  { id: 6,  axis: "v" as const, lineClass: "clr-col-8",  pal: "a", dur: "22s", delay: "-12s" },
  { id: 7,  axis: "v" as const, lineClass: "clr-col-13", pal: "c", dur: "36s", delay: "-20s" },
  { id: 8,  axis: "v" as const, lineClass: "clr-col-18", pal: "b", dur: "25s", delay: "-7s" },
  { id: 9,  axis: "v" as const, lineClass: "clr-col-23", pal: "a", dur: "41s", delay: "-15s" },
];

/* ── Screen-space lasers (no perspective, full-viewport neon tubes) ── */
const SCREEN_LASERS = [
  /* horizontal — % of screen height */
  { id: "s1", axis: "h" as const, pos: "34%", pal: "a", dur: "11s", delay: "0s" },
  { id: "s2", axis: "h" as const, pos: "61%", pal: "b", dur: "16s", delay: "-5s" },
  { id: "s3", axis: "h" as const, pos: "80%", pal: "c", dur: "9s",  delay: "-8s" },
  /* vertical — % of screen width */
  { id: "s4", axis: "v" as const, pos: "22%", pal: "b", dur: "14s", delay: "-2s" },
  { id: "s5", axis: "v" as const, pos: "55%", pal: "a", dur: "18s", delay: "-10s" },
  { id: "s6", axis: "v" as const, pos: "82%", pal: "c", dur: "12s", delay: "-6s" },
];

export function CyberBackdrop() {
  return (
    <div className="cyber-backdrop" aria-hidden>
      <div className="cyber-atmos" />

      {/* Perspective floor grid + floor lasers */}
      <div className="cyber-floor-stage">
        <div className="cyber-grid-plane">
          <div className="cyber-grid-lines" />
          <div className="cyber-grid-major" />
          {FLOOR_LASERS.map((l) => (
            <span
              key={l.id}
              className={`cyber-laser cyber-laser--${l.axis} ${l.lineClass} cyber-laser-brand-${l.pal}`}
              style={{ animationDuration: l.dur, animationDelay: l.delay }}
            />
          ))}
        </div>
      </div>

      {/* Screen-space neon beams — outside perspective, full visibility */}
      <div className="cyber-beams" aria-hidden>
        {SCREEN_LASERS.map((l) => (
          <span
            key={l.id}
            className={`sl-beam sl-beam--${l.axis} sl-beam-pal-${l.pal}`}
            style={{
              [l.axis === "h" ? "top" : "left"]: l.pos,
              animationDuration: l.dur,
              animationDelay: l.delay,
            }}
          />
        ))}
      </div>

      <div className="cyber-veil" />
    </div>
  );
}
