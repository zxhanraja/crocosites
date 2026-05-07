"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { 
    num: "01.", 
    title: "UX / Wireframing",
    detail: "We dive deep into your brand's DNA to map out user journeys that don't just look good, but convert like crazy. This is where we build the skeleton of your success."
  },
  { 
    num: "02.", 
    title: "Web Design",
    detail: "Our design philosophy is 'Swiss on steroids'. Bold typography, intentional whitespace, and a minimalist aesthetic that makes your brand feel like a luxury watch."
  },
  { 
    num: "03.", 
    title: "Web Development",
    detail: "Clean code, blazing speed, and no-nonsense performance. We build on modern stacks to ensure your site works as hard as you do, on every device."
  },
  { 
    num: "04.", 
    title: "Analytics Setup / Support",
    detail: "We don't just launch and leave. We set up data tracking to prove it works, and provide ongoing support so you're never left in the digital dark."
  },
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-left", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".work-right", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".vertical-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative py-24 md:py-40 px-6 md:px-8 bg-background">
      
      {/* Vertical Swiss Text on Right */}
      <div className="vertical-text absolute right-[-12rem] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block opacity-40">
        <h2 className="text-[12rem] font-black text-foreground/[0.04] uppercase tracking-tighter origin-center rotate-90 whitespace-nowrap">
          Swiss International
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Left: Title, Subtext & Image */}
          <div className="lg:col-span-5 work-left">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground mb-8 md:mb-10 leading-[1.1]">
              My way of getting things done
            </h2>
            <p className="text-foreground/50 text-sm md:text-base max-w-sm leading-relaxed mb-10 md:mb-12">
              Fast and transparent, the path to creating a website that will represent your brand in the best light is only 4 weeks away. Standardizing the Webflow methodology, I assure a step-by-step completion of the whole process.
            </p>
            
            <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about.webp"
                alt="Our Process"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right: Steps List (Accordion) */}
          <div className="lg:col-span-6 lg:offset-1 lg:pt-20 work-right">
            <div className="flex flex-col border-t border-border">
              {steps.map((step, i) => (
                <div 
                  key={i} 
                  className="group flex flex-col border-b border-border cursor-pointer overflow-hidden transition-colors hover:bg-foreground/[0.02]"
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  <div className="flex items-center justify-between py-6 md:py-8">
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-[10px] md:text-xs font-bold text-foreground/40">{step.num}</span>
                      <h3 className="text-lg md:text-2xl font-medium text-foreground uppercase tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <Plus className={`w-4 h-4 md:w-5 md:h-5 text-foreground/40 transition-transform duration-500 ${activeIndex === i ? 'rotate-45 text-foreground' : ''}`} />
                  </div>

                  {/* Accordion Detail Content */}
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === i ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-foreground/60 text-sm md:text-lg leading-relaxed pl-14 md:pl-16 max-w-lg">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
