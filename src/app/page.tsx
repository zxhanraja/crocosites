"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

// Dynamically import Loader to avoid SSR issues with GSAP
const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <main className="relative">
      <CustomCursor />
      <Loader onComplete={() => setHeroReady(true)} />

      {/* Main content — always mounted so GSAP targets exist */}
      <div
        style={{
          opacity: heroReady ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <Navbar />
        <section id="home">
          <Hero startAnimations={heroReady} />
        </section>
        <HowWeWork />
        <Services />
        <Projects />
        <Team />
        <Footer />
      </div>
    </main>
  );
}
