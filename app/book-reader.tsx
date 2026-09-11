"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type BookReaderProps = {
  pages: string[];
  title: string;
};

type Spread = [string | null, string | null];
type TurnDirection = "forward" | "backward";

function BookPage({ src, alt, side }: { src: string | null; alt: string; side: "left" | "right" }) {
  return (
    <div className={`book-page book-page-${side} ${src ? "" : "book-page-blank"}`}>
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 760px) 88vw, 44vw"
          className="book-page-image"
        />
      )}
    </div>
  );
}

export default function BookReader({ pages, title }: BookReaderProps) {
  const spreads: Spread[] = [
    [null, pages[0] ?? null],
    ...Array.from({ length: Math.ceil(Math.max(0, pages.length - 2) / 2) }, (_, index) => [
      pages[index * 2 + 1] ?? null,
      pages[index * 2 + 2] ?? null,
    ] as Spread),
    [pages.at(-1) ?? null, null],
  ];

  const [active, setActive] = useState(0);
  const [turning, setTurning] = useState<TurnDirection | null>(null);
  const readerRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<number | null>(null);

  const turn = useCallback((direction: TurnDirection) => {
    if (turning) return;
    const next = direction === "forward" ? active + 1 : active - 1;
    if (next < 0 || next >= spreads.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTurning(direction);
    window.setTimeout(() => {
      setActive(next);
      setTurning(null);
    }, reduceMotion ? 20 : 780);
  }, [active, spreads.length, turning]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") turn("forward");
      if (event.key === "ArrowLeft") turn("backward");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [turn]);

  const nextIndex = turning === "forward" ? active + 1 : active - 1;
  const currentSpread = spreads[active];
  const destination = spreads[nextIndex] ?? currentSpread;

  const baseLeft = turning === "forward"
    ? currentSpread[0]
    : turning === "backward"
      ? destination[0]
      : currentSpread[0];
  const baseRight = turning === "forward"
    ? destination[1]
    : currentSpread[1];

  const turnFront = turning === "forward" ? currentSpread[1] : destination[1];
  const turnBack = turning === "forward" ? destination[0] : currentSpread[0];

  const pageLabel = active === 0
    ? "Front cover"
    : active === spreads.length - 1
      ? "Back cover"
      : `Pages ${active * 2 - 1}–${active * 2}`;

  async function enterFullscreen() {
    if (readerRef.current?.requestFullscreen) await readerRef.current.requestFullscreen();
  }

  return (
    <section className="book-reader-section" aria-label={`${title} interactive book`}>
      <div className="book-reader-heading">
        <div>
          <span>Interactive book</span>
          <h2>Turn the pages.</h2>
        </div>
        <p>Use the arrows, your keyboard, or swipe across the book.</p>
      </div>

      <div className="book-reader" ref={readerRef}>
        <button className="book-fullscreen" type="button" onClick={enterFullscreen} aria-label="Open book in fullscreen">
          Fullscreen ↗
        </button>

        <div
          className={`book-stage ${turning ? `is-turning-${turning}` : ""}`}
          onPointerDown={(event) => { pointerStart.current = event.clientX; }}
          onPointerUp={(event) => {
            if (pointerStart.current === null) return;
            const distance = event.clientX - pointerStart.current;
            pointerStart.current = null;
            if (distance < -45) turn("forward");
            if (distance > 45) turn("backward");
          }}
        >
          <div className="book-shadow" aria-hidden="true" />
          <BookPage src={baseLeft} alt={`${title}, left page`} side="left" />
          <BookPage src={baseRight} alt={`${title}, right page`} side="right" />

          {turning && (
            <div className="book-turning-page" aria-hidden="true">
              <div className="book-turn-face book-turn-front">
                {turnFront && <Image src={turnFront} alt="" fill unoptimized sizes="44vw" className="book-page-image" />}
              </div>
              <div className="book-turn-face book-turn-back">
                {turnBack && <Image src={turnBack} alt="" fill unoptimized sizes="44vw" className="book-page-image" />}
              </div>
            </div>
          )}
        </div>

        <div className="book-controls">
          <button type="button" onClick={() => turn("backward")} disabled={active === 0 || Boolean(turning)} aria-label="Previous book pages">
            ←
          </button>
          <div>
            <span>{pageLabel}</span>
            <div className="book-progress" aria-hidden="true">
              {spreads.map((_, index) => <i className={index === active ? "is-active" : ""} key={index} />)}
            </div>
          </div>
          <button type="button" onClick={() => turn("forward")} disabled={active === spreads.length - 1 || Boolean(turning)} aria-label="Next book pages">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
