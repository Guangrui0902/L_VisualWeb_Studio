export function VisualGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% -15%, rgba(255,255,255,0.04), transparent 60%), #030304",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-[0.25]" />
    </div>
  );
}
