"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import StoryTypewriter from "./Typing";
// Updated import to match the new file name
// import StoryTypewriter from "./StoryTypewriter.jsx";

export default function About() {
  const sectionRef = useRef(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.2]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-32 md:py-52 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Noise Layer */}
      <motion.div
        style={{
          y: isClient ? bgY : "0%",
        }}
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light bg-zinc-900/10"
      />

      {/* Glow Behind the Title */}
      <motion.div
        style={{
          transform: 'translateX(-50%)',
          opacity: isClient ? glowOpacity : 0.3,
        }}
        className="absolute top-0 left-1/2 w-[60vw] h-[60vw] bg-white/5 blur-[120px] rounded-full"
      />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section Prefix */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="block mb-8 text-xs tracking-[0.25em] uppercase text-zinc-500"
        >
          001 — THE JOURNEY
        </motion.span>

        {/* Cinematic Parallax Heading */}
        <motion.h2
          style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            y: isClient ? headingY : "-20%",
          }}
          className="mb-32 font-black leading-[0.9em] tracking-tight text-zinc-100"
        >
          NOT JUST CODE.
          <br />
          <span className="text-zinc-400">EXPERIENCES.</span>
        </motion.h2>

        {/* Story Terminal Wrapper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mt-20"
        >
          <StoryTypewriter />
        </motion.div>
      </div>
    </section>
  );
}