
// app/page.jsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar";

export default function Home() {
  const headline = useRef(null);
  const sub = useRef(null);
  const cta = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(
      headline.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(
        sub.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        cta.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />

      {/* Hero content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-6">
        <h1
          ref={headline}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-neon drop-shadow-[0_0_24px_rgba(0,245,255,0.6)]"
        >
          Premium Cinematic Web Experience
        </h1>
        <p
          ref={sub}
          className="mt-4 max-w-2xl text-white/80 text-base md:text-lg"
        >
          Dark + neon gradients, glassmorphism, and smooth motion—crafted for Hi3els Lab.
        </p>
        <a
          ref={cta}
          href="#work"
          className="mt-8 inline-block glass rounded-full px-6 py-3 text-sm font-semibold text-white hover:text-neon transition-colors"
        >
          Explore Work
        </a>
      </section>
    </main>
  );
}