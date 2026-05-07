"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*";

export default function CTA() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);

  const scramble = (el: HTMLElement, original: string) => {
    let iteration = 0;
    const interval = setInterval(() => {
      el.innerText = original
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return original[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      if (iteration >= original.length) clearInterval(interval);
      iteration += 1 / 2.5;
    }, 28);
  };

  useEffect(() => {
    [{ ref: line1Ref, text: "READY TO" }, { ref: line2Ref, text: "START A PROJECT?" }].forEach(({ ref, text }) => {
      if (!ref.current) return;
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        once: true,
        onEnter: () => scramble(ref.current!, text),
      });
    });
  }, []);

  return (
    <section id="contact" className="py-40 px-8 border-y border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <div
            ref={line1Ref}
            className="heading-display text-foreground"
            style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
          >
            READY TO
          </div>
          <div
            ref={line2Ref}
            className="heading-display"
            style={{
              fontSize: "clamp(3rem, 10vw, 12rem)",
              WebkitTextStroke: "1px rgba(240,239,233,0.25)",
              color: "transparent",
            }}
          >
            START A PROJECT?
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <p className="text-foreground/40 max-w-sm text-lg leading-relaxed font-light">
            We don&apos;t just build websites. We build growth. Let&apos;s make something unforgettable together.
          </p>
          <div className="flex gap-4">
            <Link href="mailto:hello@crocosites.com" className="btn-accent text-lg py-4 px-10">
              Let&apos;s Talk →
            </Link>
            <Link href="#work" className="btn-outline text-lg py-4 px-10">
              See Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
