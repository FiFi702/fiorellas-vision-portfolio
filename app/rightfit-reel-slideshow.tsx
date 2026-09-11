"use client";

import { useEffect, useRef, useState } from "react";

const reels = [
  {
    title: "Burnout",
    description: "Recognising the signs before people say it.",
  },
  {
    title: "Workplace wellbeing",
    description: "A concise, people-first social insight.",
  },
  {
    title: "Your team looks fine",
    description: "Looking beyond appearances in the workplace.",
  },
  {
    title: "Leadership & retention",
    description: "Why better training helps good people stay.",
  },
  {
    title: "Team leadership",
    description: "What teams need from the people guiding them.",
  },
  {
    title: "Workplace insight",
    description: "Turning an important message into a visual hook.",
  },
];

export default function RightFitReelSlideshow() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active) {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [active]);

  function previous() {
    setActive((current) => (current - 1 + reels.length) % reels.length);
  }

  function next() {
    setActive((current) => (current + 1) % reels.length);
  }

  return (
    <section className="rightfit-reel-slideshow" aria-label="RightFit Instagram reels">
      <div className="reel-slideshow-stage">
        <button type="button" onClick={previous} aria-label="Previous reel">
          ←
        </button>
        <div className="reel-video-frame">
          {reels.map((reel, index) => (
            <video
              className={index === active ? "is-active" : ""}
              ref={(video) => { videoRefs.current[index] = video; }}
              autoPlay={index === 0}
              muted
              loop
              controls
              playsInline
              preload="metadata"
              poster={`/fiorellas-vision-portfolio/videos/rightfit-${index + 1}-poster.jpg`}
              aria-label={`${reel.title} Instagram reel`}
              aria-hidden={index !== active}
              tabIndex={index === active ? 0 : -1}
              key={reel.title}
            >
              <source src={`/fiorellas-vision-portfolio/videos/rightfit-${index + 1}.mp4`} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          ))}
        </div>
        <button type="button" onClick={next} aria-label="Next reel">
          →
        </button>
      </div>

      <div className="reel-slide-caption" aria-live="polite">
        {reels.map((reel, index) => (
          <div
            className={index === active ? "reel-caption-panel is-active" : "reel-caption-panel"}
            aria-hidden={index !== active}
            key={reel.title}
          >
            <span>
              {String(index + 1).padStart(2, "0")} / {String(reels.length).padStart(2, "0")} · Instagram reel
            </span>
            <h2>{reel.title}</h2>
            <p>{reel.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
