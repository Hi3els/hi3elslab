
// app/components/Navbar.jsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const links = ["Home", "Work", "About", "Contact"];

  return (
    <header
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 shadow-neon"
    >
      <nav className="flex items-center gap-6 text-sm">
        <span className="font-semibold text-neon">Hi3els Lab</span>
        <span className="h-4 w-px bg-white/20" />
        <ul className="flex items-center gap-5">
          {links.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="text-white/80 hover:text-neon transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
