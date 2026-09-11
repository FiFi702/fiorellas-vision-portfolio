export default function PinterestAdvertShowcase() {
  return (
    <section className="pinterest-film" aria-labelledby="pinterest-film-title">
      <div className="pinterest-film-heading">
        <div>
          <span>Campaign film</span>
          <h2 id="pinterest-film-title">Find your next idea.</h2>
        </div>
        <p>
          A fast-paced advert built around discovery — moving from a spark of
          inspiration to the moment an idea becomes something personal, useful
          and worth saving.
        </p>
      </div>

      <div className="pinterest-video-shell">
        <div className="pinterest-video-topline">
          <span className="pinterest-mark" aria-hidden="true">P</span>
          <span>Pinterest advert · 2026</span>
          <a
            href="https://youtu.be/4cWPGHXxMJY"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube ↗
          </a>
        </div>
        <div className="pinterest-video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/4cWPGHXxMJY?rel=0"
            title="Pinterest advert"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="pinterest-film-footer" aria-hidden="true">
        <span>Discover</span>
        <i />
        <span>Save</span>
        <i />
        <span>Create</span>
      </div>
    </section>
  );
}
