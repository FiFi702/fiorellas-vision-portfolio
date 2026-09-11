import Image from "next/image";
import ProjectSlideshow from "./project-slideshow";

const menuImages = [
  "/fiorellas-vision-portfolio/images/coffee-menu-front.jpg",
  "/fiorellas-vision-portfolio/images/coffee-menu-inside.png",
];

const coffeeCrushPrototype =
  "https://www.figma.com/proto/8wBlGo9gimKaZLwSr2jxTy/CoffeeCrush_Website?page-id=0%3A1&node-id=1-2&p=f&viewport=146%2C151%2C0.41&t=3sm7AfLo3ST9YIjh-1&scaling=scale-down&content-scaling=fixed";

const coffeeCrushPrototypeEmbed =
  "https://embed.figma.com/proto/8wBlGo9gimKaZLwSr2jxTy/CoffeeCrush_Website?page-id=0%3A1&node-id=1-2&p=f&t=3sm7AfLo3ST9YIjh-1&scaling=scale-down&content-scaling=fixed&hide-ui=1&embed-host=share";

export default function CoffeeCrushShowcase() {
  return (
    <section className="coffee-showcase" aria-label="Coffee Crush brand applications">
      <article className="coffee-feature coffee-menu-feature">
        <div className="coffee-feature-media">
          <ProjectSlideshow images={menuImages} title="Coffee Crush menu" />
        </div>
        <div className="coffee-feature-copy">
          <span>01 / Menu design</span>
          <h2>A warm welcome, before the first sip.</h2>
          <p>
            The fold-out menu translates Coffee Crush&apos;s refined identity into a
            practical customer touchpoint. Soft neutral tones, elegant serif type
            and hand-drawn product imagery create an inviting café atmosphere,
            while the clear structure makes drinks, bakery items and house
            specials easy to explore.
          </p>
        </div>
      </article>

      <article className="coffee-feature coffee-stacked-feature">
        <div className="coffee-feature-heading">
          <span>02 / Packaging</span>
          <h2>Designed to travel.</h2>
          <p>
            A repeating coffee-bean pattern turns the takeaway bag into a
            recognisable piece of the brand, balancing everyday function with a
            polished, memorable finish.
          </p>
        </div>
        <figure className="coffee-wide-image">
          <Image
            src="/fiorellas-vision-portfolio/images/coffee-2.jpg"
            alt="Coffee Crush branded takeaway packaging"
            fill
            sizes="(max-width: 760px) 100vw, 94vw"
          />
        </figure>
      </article>

      <article className="coffee-feature coffee-stacked-feature">
        <div className="coffee-feature-heading">
          <span>03 / Business cards</span>
          <h2>The identity, distilled.</h2>
          <p>
            The stationery keeps the palette restrained and lets the bean symbol
            lead. Front and reverse layouts work as a compact introduction to the
            visual identity while remaining clear and useful.
          </p>
        </div>
        <div className="coffee-paired-images">
          <figure>
            <Image
              src="/fiorellas-vision-portfolio/images/coffee-1.jpg"
              alt="Coffee Crush business card presentation"
              fill
              sizes="(max-width: 760px) 100vw, 47vw"
            />
          </figure>
          <figure>
            <Image
              src="/fiorellas-vision-portfolio/images/coffee-4.jpg"
              alt="Coffee Crush patterned stationery"
              fill
              sizes="(max-width: 760px) 100vw, 47vw"
            />
          </figure>
        </div>
      </article>

      <article className="coffee-feature coffee-stacked-feature coffee-touchpoints">
        <div className="coffee-feature-heading">
          <span>04 / Brand touchpoints</span>
          <h2>One identity, many moments.</h2>
          <p>
            Cups, stickers and reusable merchandise extend the system beyond the
            counter. Each application shifts in scale and composition while
            retaining the same warm, approachable character.
          </p>
        </div>
        <div className="coffee-touchpoint-grid">
          <figure className="coffee-touchpoint-tote">
            <Image src="/fiorellas-vision-portfolio/images/coffee-3.jpg" alt="Coffee Crush branded tote bag" fill sizes="(max-width: 760px) 100vw, 58vw" />
          </figure>
          <figure>
            <Image src="/fiorellas-vision-portfolio/images/coffee-5.jpg" alt="Coffee Crush takeaway cups" fill sizes="(max-width: 760px) 100vw, 36vw" />
          </figure>
          <figure>
            <Image src="/fiorellas-vision-portfolio/images/coffee-6.jpg" alt="Coffee Crush sticker collection" fill sizes="(max-width: 760px) 100vw, 36vw" />
          </figure>
        </div>
      </article>

      <article className="coffee-feature coffee-prototype-feature">
        <div className="coffee-prototype-heading">
          <div>
            <span>05 / Website prototype</span>
            <h2>From identity to digital experience.</h2>
          </div>
          <div>
            <p>
              The interactive Coffee Crush website carries the brand&apos;s warm,
              refined character into a digital space. Explore the prototype to
              experience the navigation, page flow and visual system as a complete
              desktop website.
            </p>
            <a href={coffeeCrushPrototype} target="_blank" rel="noreferrer">
              Open full prototype ↗
            </a>
          </div>
        </div>

        <div className="coffee-browser-frame" aria-label="Interactive Coffee Crush website prototype">
          <div className="coffee-prototype-viewport">
          <iframe
            src={coffeeCrushPrototypeEmbed}
            title="Interactive Coffee Crush Figma website prototype"
            allowFullScreen
          />
          </div>
        </div>
      </article>
    </section>
  );
}
