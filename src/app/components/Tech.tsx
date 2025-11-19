"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Tech() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // We'll keep the opacity transform for a nice fade-in/out on scroll
  const ribbonOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.1, 1, 1, 0.1]
  );

  const techStack = [
    "Next.js 14",
    "React Native",
    "TypeScript",
    "Framer Motion",
    "GSAP",
    "TailwindCSS",
    "Node.js",
    "Python",
    "WordPress",
    "Git",
  ];

  // Shared class for the massive text
  const textClass =
    "text-[clamp(5rem,15vw,10rem)] font-black uppercase tracking-tighter whitespace-nowrap px-8";

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="relative min-h-screen py-32 md:py-48 flex flex-col justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Atmospheric glow (Kept from your original) */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-900/20 to-transparent pointer-events-none" />

      {/* Ribbon layers with NEW horizontal marquee animation */}
      <motion.div
        style={{ opacity: ribbonOpacity }}
        className="relative flex flex-col justify-center gap-12 md:gap-20"
      >
        {/* Ribbon 1 - Top layer */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-slow">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`r1-${i}`}
                className={`${textClass} text-zinc-700/80`}
                style={{
                  textShadow: "0 0 40px rgba(255,255,255,0.03)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Ribbon 2 - Middle layer (brighter, reversed direction) */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-reverse-slow">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`r2-${i}`}
                className={`${textClass} text-zinc-300/90`} // Brighter
                style={{
                  textShadow: "0 0 60px rgba(255,255,255,0.05)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Ribbon 3 - Bottom layer */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-slow">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`r3-${i}`}
                className={`${textClass} text-zinc-800/70`}
                style={{
                  textShadow: "0 0 30px rgba(255,255,255,0.02)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Removed the grid of tech at the bottom for a cleaner, bolder look */}

      {/* Bottom gradient fade (Kept from your original) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-[#111111] to-transparent pointer-events-none" />
    </section>
  );
}