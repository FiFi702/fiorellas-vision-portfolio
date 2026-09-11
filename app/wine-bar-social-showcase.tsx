import ProjectSlideshow from "./project-slideshow";

const socialPosts = [
  "/fiorellas-vision-portfolio/images/il-mulino-social-1.jpg",
  "/fiorellas-vision-portfolio/images/il-mulino-social-2.jpg",
  "/fiorellas-vision-portfolio/images/il-mulino-social-3.jpg",
  "/fiorellas-vision-portfolio/images/il-mulino-social-4.jpg",
  "/fiorellas-vision-portfolio/images/il-mulino-social-5.png",
  "/fiorellas-vision-portfolio/images/il-mulino-social-6.png",
];

export default function WineBarSocialShowcase() {
  return (
    <section className="wine-social-showcase" aria-labelledby="wine-social-title">
      <div className="wine-social-heading">
        <span>Social media campaign</span>
        <h2 id="wine-social-title">Friday nights, brought to life.</h2>
        <p>
          A series of bold event posts created for Il-Mulino Café &amp; WineBar.
          Each design gives the featured performer and occasion its own energy,
          while the venue logo, high-impact typography and nightlife palette keep
          the campaign recognisable across every announcement.
        </p>
      </div>
      <ProjectSlideshow images={socialPosts} title="Il-Mulino social media campaign" adaptive />
    </section>
  );
}
