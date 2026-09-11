"use client";

import Image from "next/image";
import { useRef } from "react";

type VideoLeadProps = {
  src: string;
  alt: string;
  href?: string;
  unoptimized?: boolean;
};

export default function VideoLead({ src, alt, href, unoptimized = false }: VideoLeadProps) {
  const cursor = useRef<HTMLSpanElement>(null);

  function moveCursor(event: React.PointerEvent<HTMLAnchorElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    if (cursor.current) {
      cursor.current.style.left = `${event.clientX - bounds.left}px`;
      cursor.current.style.top = `${event.clientY - bounds.top}px`;
    }
  }

  if (!href) {
    return (
      <div className="project-lead-image video-lead video-lead-pending">
        <Image src={src} alt={alt} fill priority unoptimized={unoptimized} sizes="100vw" />
        <span className="video-pending-label">Video link coming soon</span>
      </div>
    );
  }

  return (
    <a
      className="project-lead-image video-lead"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Watch the music video on YouTube"
      onPointerMove={moveCursor}
    >
      <Image src={src} alt={alt} fill priority unoptimized={unoptimized} sizes="100vw" />
      <span className="video-cursor" ref={cursor} aria-hidden="true">
        View video ↗
      </span>
    </a>
  );
}
