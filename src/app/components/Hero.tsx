"use client";

import { motion } from "framer-motion";
import AvatarFollowEyes from "./AvatarFollowEyes";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
        duration: 1,
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "3rem",
      transition: { duration: 1, delay: 1.2 },
    },
  };

  return (
    <section id="hero" className="h-screen flex flex-col justify-between p-6 md:p-8 relative">
      <motion.div
        className="grow flex items-end"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.h1
            className="text-[clamp(4rem,15vw,12rem)] font-extrabold leading-[0.9em] tracking-[-0.05em]"
            variants={itemVariants}
          >
            DIGITAL
          </motion.h1>
          <div className="flex justify-between items-end">
            <motion.h1
              className="text-[clamp(4rem,15vw,12rem)] font-extrabold leading-[0.9em] tracking-[-0.05em]"
              variants={itemVariants}
            >
              CRAFTSMAN
            </motion.h1>
            <motion.p
              className="text-sm md:text-base font-medium text-right text-zinc-400 max-w-[200px] -translate-y-4 md:-translate-y-8"
              variants={itemVariants}
            >
              RISHI RAJ SONI — DEVELOPER & MAKER.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-zinc-400 group"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center space-y-2">
          <motion.span variants={itemVariants} transition={{ delay: 1 }}>
            Scroll to explore
          </motion.span>
          <motion.span
            className="block w-px bg-zinc-600 group-hover:h-20 transition-all duration-300"
            variants={lineVariants}
          />
        </div>
      </motion.a>
    </section>
  );
}
