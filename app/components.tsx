"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header({ inverse = false }: { inverse?: boolean }) {
  const [minimized, setMinimized] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      if (currentScrollY < 56) {
        setMinimized(false);
      } else if (difference > 5) {
        setMinimized(true);
      } else if (difference < -5) {
        setMinimized(false);
      }

      if (Math.abs(difference) > 5) {
        lastScrollY.current = currentScrollY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header ${inverse ? "header-inverse" : ""} ${minimized ? "is-minimized" : ""}`}
    >
      <Link href="/" className="brand" aria-label="Fiorella’s Vision home">
        <Image
          className="brand-logo"
          src="/images/fiorellas-vision-logo.png"
          alt="Fiorella’s Vision"
          width={3392}
          height={504}
          unoptimized
          priority
        />
      </Link>
      <nav aria-label="Primary navigation" aria-hidden={minimized}>
        <Link href="/#work" tabIndex={minimized ? -1 : undefined}>Work</Link>
        <Link href="/about" tabIndex={minimized ? -1 : undefined}>About</Link>
        <a href="mailto:fiorellam190@gmail.com" tabIndex={minimized ? -1 : undefined}>Let’s talk ↗</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-kicker">Have a project in mind?</div>
      <a className="footer-email" href="mailto:fiorellam190@gmail.com">
        Let’s make it real <span>↗</span>
      </a>
      <div className="footer-meta">
        <div>
          <p>Say hello</p>
          <a href="mailto:fiorellam190@gmail.com">fiorellam190@gmail.com</a>
          <a href="tel:+36579720055">+365 79720055</a>
        </div>
        <div>
          <p>Based in</p>
          <span>Malta</span>
        </div>
        <div className="footer-end">
  <Link href="/">Fiorella’s Vision</Link>
  <span>© {new Date().getFullYear()} Fiorella’s Vision. All rights reserved.</span>
</div>
      </div>
    </footer>
  );
}
