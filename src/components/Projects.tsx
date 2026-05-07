"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    title: "Luxora Watches",
    category: "E-commerce, Premium Branding",
    year: "/24",
    image: "/images/p1.webp",
  },
  {
    num: "02",
    title: "Former & Co.",
    category: "Real Estate, Minimalist UI",
    year: "/24",
    image: "/images/p2.webp",
  },
  {
    num: "03",
    title: "Zenith Studio",
    category: "Architecture & Interior",
    year: "/24",
    image: "/images/p3.webp",
  },
  {
    num: "04",
    title: "Aura Beauty",
    category: "Skincare, Web Design",
    year: "/24",
    image: "/images/p4.webp",
  },
  {
    num: "05",
    title: "Nordic Gear",
    category: "Outdoor, E-commerce",
    year: "/24",
    image: "/images/p5.webp",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const safeIdx = activeIdx % projects.length;
  const currentProject = projects[safeIdx] || projects[0];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-header", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".project-info", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-info",
          start: "top 85%",
        },
      });

      gsap.from(".project-image-box", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-image-box",
          start: "top 85%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-24 md:py-40 px-6 md:px-8 bg-background">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-24 border-b border-border pb-8 projects-header">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/40">
            Featured Projects
          </p>
          <p className="text-[10px] md:text-xs font-medium text-foreground/30 max-w-[150px] md:max-w-[200px] text-right">
            Click to discover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left: Active Project Info */}
          <div className="md:col-span-1 lg:col-span-5 flex flex-col justify-center project-info">
            <div className="flex gap-8 items-start">
              {/* Vertical Project Number */}
              <span className="text-2xl md:text-4xl font-black text-foreground/10 uppercase tracking-tighter origin-top-left rotate-90 whitespace-nowrap pt-2">
                Proj. {currentProject.num}
              </span>

              <div className="flex flex-col gap-4 flex-1">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.9] uppercase">
                  {currentProject.title}
                </h1>
                <p className="text-sm md:text-lg text-foreground/40 font-bold uppercase tracking-widest mt-4">
                  {currentProject.category}
                </p>
                
                <button 
                  onClick={handleNext}
                  className="mt-12 text-xs font-black uppercase tracking-[0.3em] border-b-2 border-foreground pb-2 w-fit hover:text-accent hover:border-accent transition-colors"
                >
                  Next Project →
                </button>
              </div>
            </div>
          </div>

          {/* Right: Interactive Single Image Display */}
          <div className="md:col-span-1 lg:col-span-7 flex justify-center lg:justify-end project-image-box">
            <div 
              className="relative w-full max-w-xl aspect-[16/10] cursor-pointer"
              onClick={handleNext}
            >
              {projects.map((p, i) => {
                const isFront = i === safeIdx;
                
                return (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isFront ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3 pointer-events-none'}`}
                    style={{
                      zIndex: isFront ? 10 : 0,
                    }}
                  >
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-foreground shadow-2xl">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
