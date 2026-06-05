export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% -20%, #0c1224 0%, #020203 45%, #010104 100%)",
        }}
      />
      <div className="aurora-blob aurora-blob-a" />
      <div className="aurora-blob aurora-blob-b" />
      <div className="aurora-blob aurora-blob-c" />
      <div
        className="absolute inset-0 opacity-[0.22] grid-fade"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-studio/90" />
    </div>
  );
}
