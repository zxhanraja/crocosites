"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".footer-left", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      gsap.from(".footer-right", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      gsap.from(".footer-bottom", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-bottom",
          start: "top 95%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={footerRef} className="pt-24 md:pt-40 pb-10 px-6 md:px-8 bg-background border-t border-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Main CTA Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-24 md:mb-40">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 max-w-4xl footer-left">
            {/* Founder Image - Local webp */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden shrink-0 mt-2 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/founder.webp"
                alt="Harshit Patidar"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <h2 className="text-3xl md:text-7xl font-medium tracking-tight leading-[1.1] md:leading-[1] text-foreground">
              Let&apos;s talk about a project, collaboration or an idea you may have
            </h2>
          </div>
          
          <div className="footer-right w-full lg:w-auto">
            <Link 
              href="mailto:hello@crocosites.com" 
              className="inline-block w-full lg:w-auto text-center bg-foreground text-background px-10 md:px-12 py-5 md:py-6 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
            >
              Drop me a line →
            </Link>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 border-t border-border footer-bottom">
          <div className="text-[9px] md:text-[10px] font-medium text-foreground/40 uppercase tracking-widest text-center md:text-left">
            © 2026 All Rights Reserved. crocosites
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/60">
            <Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Email</Link>
          </div>
          
          <Link href="#home" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors hidden md:block">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
