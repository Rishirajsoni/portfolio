"use client";

import Magnetic from "./Magnetic"; // Import the new component

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center p-6 md:p-8">
      {/* Wrap the link in the Magnetic component */}
      <Magnetic>
        <a
          href="mailto:rishi@example.com"
          className="block text-white text-[clamp(3rem,12vw,10rem)] font-extrabold leading-tight hover:text-zinc-500 transition-all duration-500"
        >
          LET&apos;S TALK ↗
        </a>
      </Magnetic>

      <div className="mt-16 text-zinc-400 text-sm md:text-base">
        <p className="mb-8">
          Drop me a line:{" "}
          <a href="mailto:rishi@example.com" className="text-zinc-300 hover:text-white transition-colors">
            rishi@example.com
          </a>
        </p>

        <div className="flex justify-center space-x-6 font-medium mb-16">
          <Magnetic>
            <a href="#" className="text-zinc-300 hover:text-white transition-colors block">
              LinkedIn
            </a>
          </Magnetic>
          <span>/</span>
          <Magnetic>
            <a href="#" className="text-zinc-300 hover:text-white transition-colors block">
              GitHub
            </a>
          </Magnetic>
          <span>/</span>
          <Magnetic>
            <a href="#" className="text-zinc-300 hover:text-white transition-colors block">
              X
            </a>
          </Magnetic>
        </div>

        <p className="text-xs uppercase tracking-widest text-zinc-600">DESIGNED & BUILT BY RISHI RAJ SONI.</p>
      </div>
    </section>
  );
}