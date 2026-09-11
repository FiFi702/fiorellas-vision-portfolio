import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components";
import { projectBySlug, projectsByYear } from "../../data";
import BookReader from "../../book-reader";
import CoffeeCrushShowcase from "../../coffee-crush-showcase";
import PinterestAdvertShowcase from "../../pinterest-advert-showcase";
import PortraitPhotographyShowcase from "../../portrait-photography-showcase";
import ProjectSlideshow from "../../project-slideshow";
import RightFitReelSlideshow from "../../rightfit-reel-slideshow";
import ProjectScrollStory from "../../rightfit-scroll-story";
import StudySparkPrototype from "../../studyspark-prototype";
import VideoLead from "../../video-lead";
import WineBarSocialShowcase from "../../wine-bar-social-showcase";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectsByYear.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) return {};
  return { title: project.title, description: project.intro };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();

  const index = projectsByYear.findIndex((item) => item.slug === slug);
  const displayNumber = String(index + 1).padStart(2, "0");
  const nextProject = projectsByYear[(index + 1) % projectsByYear.length];
  const hasVideoLead = project.slug === "music-video" || project.slug === "there-for-you";
  const heroLogo = project.slug === "studyspark"
    ? { src: "/fiorellas-vision-portfolio/images/studyspark-logo.png", width: 1224, height: 638 }
    : project.slug === "noma"
      ? { src: "/fiorellas-vision-portfolio/images/noma-logo.png", width: 950, height: 307 }
      : project.slug === "rightfit"
        ? { src: "/fiorellas-vision-portfolio/images/rightfit-logo.png", width: 2731, height: 1298 }
        : project.slug === "millies-ribbon"
          ? { src: "/fiorellas-vision-portfolio/images/millies-ribbon-wordmark.png", width: 1203, height: 212 }
          : project.slug === "there-for-you"
            ? { src: "/fiorellas-vision-portfolio/images/there-for-you-logo-v2.png", width: 868, height: 217 }
            : project.slug === "coffee-crush"
              ? { src: "/fiorellas-vision-portfolio/images/coffee-crush-logo.png", width: 1452, height: 775 }
            : project.slug === "pinterest-advert"
              ? { src: "/fiorellas-vision-portfolio/images/pinterest-wordmark.png", width: 564, height: 143 }
            : project.slug === "wine-bar-advert"
              ? { src: "/fiorellas-vision-portfolio/images/il-mulino-logo.png", width: 750, height: 450 }
            : null;
  const usesSlideshow = [
    "wine-bar-advert",
    "noma",
  ].includes(project.slug);

  return (
    <div className={`project-page theme-${project.theme}`}>
      <Header inverse={["cinema", "romance", "study", "portrait", "neon"].includes(project.theme)} />
      <main>
        <section className="project-hero">
          <div className="project-hero-top">
            <span>{displayNumber} / {String(projectsByYear.length).padStart(2, "0")}</span>
            <span>{project.kicker}</span>
          </div>
          {heroLogo ? (
            <Image
              className="project-hero-logo"
              src={heroLogo.src}
              alt={project.title}
              width={heroLogo.width}
              height={heroLogo.height}
              unoptimized
              priority
            />
          ) : (
            <h1>{project.title}</h1>
          )}
          <p className="project-intro">{project.intro}</p>
          <div className="project-facts">
            <div><span>Year</span><p>{project.year}</p></div>
            <div><span>Disciplines</span><p>{project.disciplines.join(" · ")}</p></div>
            {project.duration && <div><span>Duration</span><p>{project.duration}</p></div>}
          </div>
        </section>

        {project.slug === "millies-ribbon" ? (
          <BookReader pages={project.images} title={project.title} />
        ) : project.prototypeEmbedHref && project.prototypeHref ? (
          <StudySparkPrototype
            embedSrc={project.prototypeEmbedHref}
            shareHref={project.prototypeHref}
          />
        ) : project.slug === "rightfit" ? (
          <RightFitReelSlideshow />
        ) : project.slug === "coffee-crush" ? (
          <CoffeeCrushShowcase />
        ) : project.slug === "portrait-photography" ? (
          <PortraitPhotographyShowcase images={project.images} />
        ) : project.slug === "pinterest-advert" ? (
          <PinterestAdvertShowcase />
        ) : hasVideoLead ? (
          <>
            <VideoLead
              src={project.images[0]}
              alt={`${project.title} music video still`}
              href={project.videoHref}
              unoptimized={project.slug === "there-for-you"}
            />
            <ProjectSlideshow
              images={project.images.slice(1)}
              title={project.title}
              adaptive={project.slug === "there-for-you"}
              unoptimized={project.slug === "there-for-you"}
            />
          </>
        ) : usesSlideshow ? (
          <ProjectSlideshow
            images={project.images}
            title={project.title}
            adaptive={project.slug === "noma"}
            unoptimized={project.slug === "noma"}
          />
        ) : (
          <section className="project-lead-image">
            <Image
              src={project.images[0]}
              alt={`${project.title} hero artwork`}
              fill
              priority
              sizes="100vw"
            />
          </section>
        )}

        {project.slug === "wine-bar-advert" && <WineBarSocialShowcase />}

        <>
          <section className="project-story scroll-story-overview">
            <article className="story-overview">
              <span>Overview</span>
              <p>{project.overview}</p>
            </article>
          </section>
          <ProjectScrollStory
            challenge={project.challenge}
            response={project.solution}
            outcome={project.result}
          />
        </>

        {project.slug === "illustrations" ? (
          <ProjectSlideshow
            images={project.images.slice(1)}
            title={project.title}
            adaptive
          />
        ) : project.slug !== "rightfit" && project.slug !== "millies-ribbon" && project.slug !== "coffee-crush" && project.slug !== "portrait-photography" && project.slug !== "pinterest-advert" && !usesSlideshow && !hasVideoLead && !project.prototypeEmbedHref && (
          <section className="project-gallery" aria-label={`${project.title} gallery`}>
            {project.images.slice(1).map((image, imageIndex) => (
              <figure className={`gallery-item gallery-${imageIndex + 1}`} key={image}>
                <Image
                  src={image}
                  alt={`${project.title} project image ${imageIndex + 2}`}
                  fill
                  sizes="(max-width: 760px) 100vw, 70vw"
                />
              </figure>
            ))}
          </section>
        )}

        <Link className="next-project" href={`/projects/${nextProject.slug}`}>
          <span>Next project</span>
          <strong>{nextProject.title}</strong>
          <span className="next-arrow">↗</span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
