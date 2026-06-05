import { useState } from "react";

export function WorkMedia({
  src,
  alt = "",
  className = "work-media-img",
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="work-media-fallback" aria-hidden>
        <span className="label-mono text-[10px] text-ink-faint">Preview</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
