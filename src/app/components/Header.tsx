"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic"; // Import the new component

export default function Header() {
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 mix-blend-difference text-white">
      <nav className="flex justify-between items-center text-sm font-medium tracking-wide uppercase">
        <Magnetic>
          <motion.a
            href="#"
            className="block transition-opacity hover:opacity-70" // 'block' is important for Magnetic
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
          >
            RISHI ©2025
          </motion.a>
        </Magnetic>

        <motion.div
          className="flex space-x-6"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          <Magnetic>
            <motion.a href="#work" className="hidden md:inline nav-link" variants={navItemVariants}>
              WORK
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href="#about" className="hidden md:inline nav-link" variants={navItemVariants}>
              ABOUT
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href="#contact" className="hidden md:inline nav-link" variants={navItemVariants}>
              CONTACT
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href="#" className="md:hidden nav-link" variants={navItemVariants}>
              MENU
            </motion.a>
          </Magnetic>
        </motion.div>
      </nav>
    </header>
  );
}