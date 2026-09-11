type StudySparkPrototypeProps = {
  embedSrc: string;
  shareHref: string;
};

export default function StudySparkPrototype({
  embedSrc,
  shareHref,
}: StudySparkPrototypeProps) {
  return (
    <section className="study-prototype-section" aria-labelledby="study-prototype-title">
      <div className="study-prototype-copy">
        <span>Interactive prototype</span>
        <h2 id="study-prototype-title">Try the app</h2>
        <p>Tap inside the phone to move through the StudySpark experience.</p>
        <a href={shareHref} target="_blank" rel="noreferrer">
          Open full prototype ↗
        </a>
      </div>
      <div className="study-phone" aria-label="StudySpark mobile app prototype">
        <iframe
          src={embedSrc}
          title="Interactive StudySpark Figma prototype"
          allowFullScreen
          loading="eager"
        />
      </div>
    </section>
  );
}
