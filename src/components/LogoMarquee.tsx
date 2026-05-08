"use client";

import React from "react";
import Image from "next/image";

const logos = [
  { name: "Apple", src: "/logos/apple.svg" },
  { name: "Burger King", src: "/logos/burgerking.svg" },
  { name: "HDFC", src: "/logos/hdfc.svg" },
  { name: "KFC", src: "/logos/kfc.svg" },
  { name: "Mahindra", src: "/logos/mahindra.svg" },
  { name: "McDonalds", src: "/logos/mcdonalds.svg" },
  { name: "Ola", src: "/logos/ola.svg" },
  { name: "Oppo", src: "/logos/oppo.svg" },
  { name: "Swiggy", src: "/logos/swiggy.svg" },
  { name: "Tata", src: "/logos/tata.svg" },
  { name: "Zomato", src: "/logos/zomato.svg" },
];

export default function LogoMarquee() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-background overflow-hidden">
      <div className="flex whitespace-nowrap">
        {/* First track */}
        <div className="flex animate-marquee items-center gap-20 md:gap-32 px-10">
          {logos.map((logo, i) => (
            <div key={i} className="relative w-16 md:w-20 h-8 md:h-10 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        {/* Duplicate track for infinite loop */}
        <div className="flex animate-marquee items-center gap-20 md:gap-32 px-10" aria-hidden="true">
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="relative w-16 md:w-20 h-8 md:h-10 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
