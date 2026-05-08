"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Design",
    desc: "We make website designs that engage your audience and create the user experience you want.",
    funny: "Making things look so expensive that your competitors will start crying. (Tissues not included)",
  },
  {
    num: "02",
    title: "Development",
    desc: "Bringing visual to life through developing highly functional web solutions.",
    funny: "Turning large amounts of coffee into bug-free code. We speak fluent Nerd, so you don't have to.",
  },
  {
    num: "03",
    title: "The Full Package",
    desc: "Get the best of both worlds for your website, capture your brand identity and get fully functional features.",
    funny: "Total digital dominance. We'll build everything but your confidence. (That's on you, champ)",
  },
];

import { useTranslation } from "@/lib/TranslationContext";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const servicesData = [
    { num: "01", title: t.services.s1.title, desc: t.services.s1.desc, funny: t.services.s1.funny },
    { num: "02", title: t.services.s2.title, desc: t.services.s2.desc, funny: t.services.s2.funny },
    { num: "03", title: t.services.s3.title, desc: t.services.s3.desc, funny: t.services.s3.funny },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Base animations for all items
      gsap.utils.toArray<HTMLElement>(".svc-item").forEach((item, i) => {
        gsap.from(item, {
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-40 px-6 md:px-8 bg-background border-t border-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-foreground mb-32 svc-item tracking-tighter uppercase">
          {t.services.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12">
          {servicesData.map((svc, i) => (
            <div 
              key={i} 
              className="svc-item flex flex-col gap-10 border-t-2 border-foreground pt-12 relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              
              {/* Number */}
              <span className="text-foreground font-black text-6xl md:text-8xl tracking-tighter mb-4 block leading-none">
                {svc.num}
              </span>
              
              <div className="flex gap-8 items-start min-h-[120px]">
                {/* Vertical Title - Fixed translate-x for mobile to prevent overflow */}
                <h3 className="text-lg md:text-3xl font-black text-foreground uppercase tracking-tighter origin-top-left rotate-90 whitespace-nowrap translate-x-[60%] md:translate-x-full pt-2 shrink-0">
                  {svc.title}
                </h3>

                {/* Description - Swaps to Funny on Hover */}
                <div className="relative flex-1 pl-6 md:pl-10">
                  <p className={`text-foreground font-bold leading-[1.3] text-lg md:text-xl transition-all duration-500 ${hoveredIndex === i ? 'opacity-0 -translate-y-2' : 'opacity-100'}`}>
                    {svc.desc}
                  </p>
                  <p className={`absolute top-0 left-6 md:left-10 text-accent font-black leading-[1.3] text-lg md:text-xl transition-all duration-500 ${hoveredIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    {svc.funny}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
