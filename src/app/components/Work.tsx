"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Tobor App",
    description: "React Native / Mobile Utility / UI/UX",
    summary: "Redefining personal utility on mobile.",
    image: "https://placehold.co/1200x800/1a1a1a/333333?text=Tobor+App",
    align: "right",
  },
  {
    title: "DezMark",
    description: "Next.js / Web Design / Immersion",
    summary: "A benchmark for digital aesthetics.",
    image: "https://placehold.co/1200x800/1a1a1a/333333?text=DezMark",
    align: "left",
  },
  {
    title: "DummyJSON Auth",
    description: "Security / Authentication / R&D",
    summary: "Robust security meets seamless user flow.",
    image: "https://placehold.co/1200x800/1a1a1a/333333?text=DummyJSON+Auth",
    align: "right",
  },
];

export default function Work() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" ref={targetRef} className="relative py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest text-zinc-400">
          SELECTED WORKS (2023 — 2025)
        </span>
      </div>

      {/* The container for the sticky cards. Height is calculated to pin each card. */}
      <div style={{ height: `${projects.length * 100}vh` }} className="relative">
        {projects.map((project, index) => {
          // Create a range for each card's animation
          const start = index / projects.length;
          const end = start + 1 / projects.length;

          // Scale down previous cards
          const scale = useTransform(scrollYProgress, [start, end], [1, index === projects.length - 1 ? 1 : 0.9]);
          // Fade in the content
          const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);

          return (
            <motion.div
              key={project.title}
              className="sticky-card bg-[#111111] p-8"
              style={{
                scale: scale,
                top: `${index * 2}vh`, // Sightly offset each card
              }}
            >
              <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  className={`md:order-${project.align === "left" ? 1 : 2}`}
                  style={{ opacity }}
                >
                  <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-2xl" />
                </motion.div>
                <motion.div
                  className={`text-left ${project.align === "left" ? "md:order-2 md:text-left" : "md:order-1 md:text-right"}`}
                  style={{ opacity }}
                >
                  <h3 className="text-5xl md:text-7xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-zinc-400 mb-2">{project.description}</p>
                  <p className="text-2xl text-zinc-200">{project.summary}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}