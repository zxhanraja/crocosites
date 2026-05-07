"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Services", "Projects", "Contact"];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "py-4 bg-background/80 backdrop-blur-lg shadow-sm"
            : "py-8"
        )}
      >
        <div className="max-w-[1600px] mx-auto px-8 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-[20px] font-black tracking-tighter text-foreground"
            style={{ letterSpacing: "-0.04em" }}
          >
            Crocosites.
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] font-bold tracking-[0.18em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
            <Link href="#contact" className="btn-outline text-[11px] ml-4">
              Let&apos;s Talk →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={cn("w-6 h-px bg-foreground block transition-all duration-300", menuOpen && "rotate-45 translate-y-[7px]")} />
            <span className={cn("w-6 h-px bg-foreground block transition-all duration-300", menuOpen && "opacity-0")} />
            <span className={cn("w-6 h-px bg-foreground block transition-all duration-300", menuOpen && "-rotate-45 -translate-y-[7px]")} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background transition-all duration-500 ease-[expo.inOut] flex flex-col justify-center items-center gap-8",
        menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        {links.map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-black text-foreground uppercase tracking-tighter hover:text-accent transition-colors"
          >
            {link}
          </Link>
        ))}
        <Link 
          href="#contact" 
          onClick={() => setMenuOpen(false)}
          className="mt-8 px-10 py-4 bg-foreground text-background rounded-full text-sm font-black uppercase tracking-widest"
        >
          Let&apos;s Talk →
        </Link>
      </div>
    </>
  );
}
