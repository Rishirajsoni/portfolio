"use client";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function StoryTypewriter() {
  const lines = [
    "It began with a simple question: How does it work?",
    "Curiosity turned into craftsmanship — engineering with intention.",
    "From building everyday tools to shaping immersive digital spaces, I merge function with emotion.",
    "I create not just interfaces, but digital realities that leave a mark.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-[50%] max-w-3xl rounded-xl overflow-hidden shadow-2xl bg-[#202020] h-[480px] flex flex-col"
      style={{
        fontFamily:
          "'SF Mono', Menlo, Monaco, Consolas, 'Courier New', monospace",
      }}
    >
      {/* ────────────────────── TOP BAR ────────────────────── */}
      <div className="flex items-center px-4 py-2 bg-[#383838] border-b border-zinc-800 rounded-t-xl">
        {/* LEFT – traffic lights */}
        <div className="flex w-12 items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* CENTER – file name */}
        <div className="flex-1 flex justify-center">
          <span className="text-xs text-zinc-400 select-none">
            ~/story.sh
          </span>
        </div>

        {/* RIGHT – terminal size */}
        <div className="flex w-12 justify-end">
          <span className="text-xs text-zinc-500 select-none">80×24</span>
        </div>
      </div>

      {/* ────────────────────── TERMINAL CONTENT ────────────────────── */}
      <div className="flex-1 p-6 font-mono text-sm md:text-base text-zinc-300 leading-relaxed flex">
        <div className="w-full">
          <span className="text-cyan-400">$ </span>
          <span className="inline-block align-middle">
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 35,
                deleteSpeed: 20,
                cursor: "█",
              }}
              onInit={(typewriter) => {
                lines.forEach((line, idx) => {
                  typewriter
                    .typeString(line)
                    .pauseFor(1000)
                    .deleteAll(10);

                  if (idx === lines.length - 1) {
                    typewriter.typeString(line).start();
                  }
                });
              }}
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
}