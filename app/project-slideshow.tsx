"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type ProjectSlideshowProps = {
  images: string[];
  title: string;
  videoHref?: string;
  adaptive?: boolean;
  unoptimized?: boolean;
};

export default function ProjectSlideshow({
  images,
  title,
  videoHref,
  adaptive = false,
  unoptimized = false,
}: ProjectSlideshowProps) {
  const [active, setActive] = useState(0);
  const [ratios, setRatios] = useState<Record<number, number>>({});
  const cursor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % images.length),
      3800,
    );
    return () => window.clearInterval(timer);
  }, [images.length]);

  function moveCursor(event: React.PointerEvent<HTMLAnchorElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    if (cursor.current) {
      cursor.current.style.left = `${event.clientX - bounds.left}px`;
      cursor.current.style.top = `${event.clientY - bounds.top}px`;
    }
  }

  const slides = (
    <>
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`${title} project image ${index + 1}`}
          fill
          priority={index === 0}
          unoptimized={unoptimized}
          sizes="100vw"
          className={index === active ? "slide is-active" : "slide"}
          onLoad={({ currentTarget }) => {
            if (!adaptive || !currentTarget.naturalHeight) return;
            const ratio = currentTarget.naturalWidth / currentTarget.naturalHeight;
            setRatios((current) => current[index] === ratio ? current : { ...current, [index]: ratio });
          }}
        />
      ))}
      {videoHref && (
        <span className="video-cursor" ref={cursor} aria-hidden="true">
          View video ↗
        </span>
      )}
    </>
  );

  return (
    <section className={`project-slideshow ${videoHref ? "slideshow-linked" : ""} ${adaptive ? "slideshow-adaptive" : ""}`}>
      {videoHref ? (
        <a
          className="slideshow-stage"
          href={videoHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Watch the music video on YouTube"
          onPointerMove={moveCursor}
          style={adaptive ? ({ "--slide-ratio": ratios[active] ?? 1.45 } as CSSProperties) : undefined}
        >
          {slides}
        </a>
      ) : (
        <div
          className="slideshow-stage"
          style={adaptive ? ({ "--slide-ratio": ratios[active] ?? 1.45 } as CSSProperties) : undefined}
        >
          {slides}
        </div>
      )}
      <div className="slideshow-controls">
        <button
          type="button"
          onClick={() => setActive((active - 1 + images.length) % images.length)}
          aria-label="Previous image"
        >
          ←
        </button>
        <span>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        <div className="slideshow-dots" aria-label="Choose slide">
          {images.map((_, index) => (
            <button
              type="button"
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}`}
              key={index}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setActive((active + 1) % images.length)}
          aria-label="Next image"
        >
          →
        </button>
      </div>
    </section>
  );
}
