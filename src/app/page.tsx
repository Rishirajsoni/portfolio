"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollRevealWrapper from "./components/ScrollRevealWrapper";
import Tech from "./components/Tech";
import Work from "./components/Work";
// Removed redundant SmoothScroll import

export default function Home() {
  return (
    // Removed <SmoothScroll> wrapper
    <main className="relative bg-[#111111] text-[#EAEAEA] font-inter">
      <Header />
      <Hero />

      {/* About handles its own scroll-in animation, so no wrapper needed */}
      <About />

      {/* This is the key fix: removed data-lenis-prevent */}
      <div>
        <Work />
      </div>

      <ScrollRevealWrapper>
        <Tech />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <Contact />
      </ScrollRevealWrapper>
    </main>
  );
}