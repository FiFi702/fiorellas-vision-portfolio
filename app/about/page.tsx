import type { Metadata } from "next";
import Image from "next/image";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Fiorella, a junior designer and photographer based in Malta.",
};

const process = [
  ["01", "Discover & understand", "Goals, audience and emotional tone come first."],
  ["02", "Define the direction", "Moodboards and visual concepts create a clear path."],
  ["03", "Design & develop", "Typography, colour, layout and story become a system."],
  ["04", "Review & refine", "Feedback sharpens the details and strengthens the idea."],
  ["05", "Launch", "Clean, organised files make the final handoff seamless."],
];

const experience = [
  ["2022—2023", "Certificate in Creative Arts", "MCAST"],
  ["2023—2024", "Diploma in Media", "MCAST"],
  ["Jul—Sep 2024", "Production Assistant", "Watermelon Media"],
  ["2024—Ongoing", "Advanced Diploma in Design", "MCAST"],
  ["Nov 2024—Ongoing", "Marketing Consultant", "RightFit"],
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about-hero">
          <p className="page-label">About Fiorella</p>
          <h1>
            Turning visions into
            <br />visual <em>stories.</em>
          </h1>
          <div className="about-intro-grid">
            <div className="about-photo">
              <Image
                src="/fiorellas-vision-portfolio/images/about.jpg"
                alt="Fiorella sitting outdoors"
                fill
                sizes="(max-width: 760px) 100vw, 45vw"
              />
            </div>
            <div className="about-copy">
              <span>Who am I?</span>
              <p>
                Hi, I’m Fiorella — a creative designer with a love for clean
                aesthetics, thoughtful brand storytelling and bringing ideas to
                life with intention.
              </p>
              <p>
                I’m passionate about crafting visuals and experiences that feel
                warm, memorable and genuinely connected to the people who use
                them.
              </p>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="section-heading light">
            <span>How I work</span>
            <p>Clarity first. Curiosity always.</p>
          </div>
          <div className="process-list">
            {process.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <div className="section-heading">
            <span>Experience</span>
            <p>My creative journey so far.</p>
          </div>
          <div className="experience-list">
            {experience.map(([date, role, place]) => (
              <article key={`${date}-${role}`}>
                <span>{date}</span>
                <h2>{role}</h2>
                <p>{place}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
