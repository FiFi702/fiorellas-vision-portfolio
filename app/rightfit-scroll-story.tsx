"use client";

import { useEffect, useRef, useState } from "react";

type RightFitScrollStoryProps = {
  challenge: string;
  response: string;
  outcome: string;
};

export default function RightFitScrollStory({
  challenge,
  response,
  outcome,
}: RightFitScrollStoryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const slides = [
    { number: "01", title: "The challenge", copy: challenge },
    { number: "02", title: "The response", copy: response },
    { number: "03", title: "The outcome", copy: outcome },
  ];

  useEffect(() => {
    let frame = 0;

    function update() {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / distance));
      setActive(Math.min(slides.length - 1, Math.floor(progress * slides.length)));
    }

    function requestUpdate() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [slides.length]);

  return (
    <section className="rightfit-scroll-story" ref={sectionRef}>
      <div className="rightfit-story-sticky">
        <div className="story-scroll-header">
          <span>Project story</span>
          <span>Scroll ↑↓</span>
        </div>

        <div className="story-scroll-panels" aria-live="polite">
          {slides.map((slide, index) => (
            <article
              className={index === active ? "story-scroll-panel is-active" : "story-scroll-panel"}
              aria-hidden={index !== active}
              key={slide.number}
            >
              <div>
                <span>{slide.number} / 03</span>
                <h2>{slide.title}</h2>
              </div>
              <p>{slide.copy}</p>
            </article>
          ))}
        </div>

        <div className="story-scroll-progress" aria-hidden="true">
          {slides.map((slide, index) => (
            <span className={index === active ? "is-active" : ""} key={slide.number} />
          ))}
        </div>
      </div>
    </section>
  );
}
