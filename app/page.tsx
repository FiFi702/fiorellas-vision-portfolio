import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./components";
import { projects, projectsByYear } from "./data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-eyebrow">
            <span>Junior designer, photographer &amp; videographer</span>
            <span>Based in Malta</span>
          </div>
          <h1>
            Ideas with <em>feeling.</em>
            <br />Design with intent.
          </h1>
          <div className="hero-bottom">
            <p>
              I’m Fiorella — shaping warm, memorable identities and visual
              stories across design, photography and moving image.
            </p>
            <a href="#work" className="round-link" aria-label="Scroll to selected work">
              ↓
            </a>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <span>FV</span>
          </div>
        </section>

        <section className="intro-strip">
          <div className="marquee-track">
            <span>
              Brand identity ✳ Digital design ✳ Photography ✳ Illustration ✳
              Marketing ✳ Visual storytelling ✳
            </span>
            <span aria-hidden="true">
              Brand identity ✳ Digital design ✳ Photography ✳ Illustration ✳
              Marketing ✳ Visual storytelling ✳
            </span>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <span>Selected work</span>
            <p>{projects.length} projects. {projects.length} distinct visual worlds.</p>
          </div>
          <div className="project-grid">
            {projectsByYear.map((project, index) => (
              <Link
                href={`/projects/${project.slug}`}
                className={`project-card card-${project.theme}`}
                key={project.slug}
              >
                <div className="project-image-wrap">
                  {project.slug === "pinterest-advert" ? (
                    <div className="pinterest-thumbnail" aria-label="Pinterest advert preview">
                      <div className="pinterest-thumbnail-grid" aria-hidden="true">
                        <i /><i /><i /><i /><i /><i />
                      </div>
                      <span className="pinterest-thumbnail-mark">P</span>
                      <strong>Find it.<br />Pin it.</strong>
                    </div>
                  ) : project.slug === "studyspark" ? (
                    <div className="studyspark-thumbnail" aria-label="StudySpark mobile app preview">
                      <div className="studyspark-mini-phone">
                        <span className="mini-notch" />
                        <div className="mini-study-screen">
                          <span className="mini-spark">✦</span>
                          <strong>StudySpark</strong>
                          <small>Make today count.</small>
                          <i /><i /><i />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.thumbnail ?? project.images[0]}
                      alt={`${project.title} project preview`}
                      fill
                      unoptimized={project.slug === "noma" || project.slug === "there-for-you" || project.slug === "millies-ribbon" || project.slug === "portrait-photography"}
                      sizes="(max-width: 760px) 100vw, 50vw"
                      className="project-card-image"
                      style={{ objectPosition: project.thumbnailPosition }}
                    />
                  )}
                  <span className="view-pill">View project ↗</span>
                </div>
                <div className="project-card-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{project.title}</h2>
                  <span>{project.year}</span>
                </div>
                <p>{project.disciplines.join(" · ")}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-about">
          <div className="home-about-label">A little about me</div>
          <div>
            <p className="home-about-copy">
              Driven by curiosity, a desire to grow, and a commitment to making
              things that <em>matter.</em>
            </p>
            <p className="home-about-small">
              When I’m not designing, you’ll probably find me exploring café
              culture, collecting inspiration or dreaming up my next creative
              project.
            </p>
            <Link href="/about" className="text-link">
              More about me ↗
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
