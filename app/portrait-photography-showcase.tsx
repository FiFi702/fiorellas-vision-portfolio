import ProjectSlideshow from "./project-slideshow";

type PortraitPhotographyShowcaseProps = {
  images: string[];
};

const afterDarkImages = [
  "/fiorellas-vision-portfolio/images/portrait-after-dark-1.webp",
  "/fiorellas-vision-portfolio/images/portrait-after-dark-2.webp",
  "/fiorellas-vision-portfolio/images/portrait-after-dark-3.webp",
  "/fiorellas-vision-portfolio/images/portrait-after-dark-4.webp",
  "/fiorellas-vision-portfolio/images/portrait-after-dark-5.webp",
  "/fiorellas-vision-portfolio/images/portrait-after-dark-6.webp",
  "/fiorellas-vision-portfolio/images/portrait-after-dark-7.webp",
  "/fiorellas-vision-portfolio/images/portrait-after-dark-8.webp",
  "/fiorellas-vision-portfolio/images/portrait-after-dark-9.webp",
];

const amberStreetsImages = [
  "/fiorellas-vision-portfolio/images/portrait-amber-streets-1.webp",
  "/fiorellas-vision-portfolio/images/portrait-amber-streets-2.webp",
  "/fiorellas-vision-portfolio/images/portrait-amber-streets-3.webp",
  "/fiorellas-vision-portfolio/images/portrait-amber-streets-4.webp",
  "/fiorellas-vision-portfolio/images/portrait-amber-streets-5.webp",
];

export default function PortraitPhotographyShowcase({
  images,
}: PortraitPhotographyShowcaseProps) {
  return (
    <div className="portrait-projects">
      <section className="portrait-project-section" aria-labelledby="concrete-youth-title">
        <div className="portrait-project-media">
          <ProjectSlideshow
            images={images}
            title="Concrete Youth"
            adaptive
            unoptimized
          />
        </div>
        <div className="portrait-project-copy">
          <span>Portrait series 01</span>
          <h2 id="concrete-youth-title">Concrete Youth</h2>
          <p>
            An outdoor portrait series exploring relaxed confidence, personal
            style and natural expression. Soft daylight, graphic concrete lines
            and candid direction create a modern editorial feeling while keeping
            the subject&apos;s personality at the centre.
          </p>
        </div>
      </section>

      <section
        className="portrait-project-section portrait-project-section-reverse"
        aria-labelledby="after-dark-title"
      >
        <div className="portrait-project-media">
          <ProjectSlideshow
            images={afterDarkImages}
            title="After Dark"
            adaptive
            unoptimized
          />
        </div>
        <div className="portrait-project-copy">
          <span>Portrait series 02</span>
          <h2 id="after-dark-title">After Dark</h2>
          <p>
            An experimental low-light portrait series exploring colour, motion
            and silhouette. Red, violet and electric-blue light transform
            familiar features into something cinematic and mysterious, moving
            between intimate close-ups and abstract, atmospheric frames.
          </p>
        </div>
      </section>

      <section
        className="portrait-project-section portrait-project-section-amber"
        aria-labelledby="amber-streets-title"
      >
        <div className="portrait-project-media">
          <ProjectSlideshow
            images={amberStreetsImages}
            title="Amber Streets"
            adaptive
            unoptimized
          />
        </div>
        <div className="portrait-project-copy">
          <span>Portrait series 03</span>
          <h2 id="amber-streets-title">Amber Streets</h2>
          <p>
            A nighttime portrait series shaped by the warm glow of historic
            streets. Golden architectural light, deep shadows and relaxed
            direction create an intimate cinematic atmosphere, placing quiet
            moments of expression against the character of the city.
          </p>
        </div>
      </section>
    </div>
  );
}
