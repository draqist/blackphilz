'use client';

import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// BLACKPHILZ = 10 letters, displayed across 10 columns
const BRAND_LETTERS = ['B', 'L', 'A', 'C', 'K', 'P', 'H', 'I', 'L', 'Z'];

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. SETUP: Reset everything to starting positions
      gsap.set(".transition-col", { yPercent: 0 });
      gsap.set(container.current, { scale: 0.95, opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" }
      });

      // 2. ANIMATION SEQUENCE
      
      // Part A: Lift the columns (The "Curtain")
      tl.to(".transition-col", {
        yPercent: -100,
        duration: 1.2,
        stagger: {
          each: 0.03,
          from: "start"
        }
      })
      
      // Part B: Reveal the Page Content
      .to(container.current, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        clearProps: "all"
      }, "-=1.0");

    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      {/* 1. THE ARCHITECTURAL COLUMNS (The Veil) */}
      <div className="fixed inset-0 z-[100] flex pointer-events-none h-screen w-screen">
        {BRAND_LETTERS.map((letter, i) => (
          <div 
            key={i}
            className="transition-col flex-1 h-full bg-[#1a1a1a] border-r border-white/5 flex items-center justify-center overflow-hidden"
          >
            {/* Single Letter - Uniform sizing */}
            <span 
              className="text-[10vw] font-black text-white/[0.08] uppercase select-none leading-none"
              style={{ fontFamily: 'inherit' }}
            >
              {letter}
            </span>
          </div>
        ))}
      </div>

      {/* 2. THE PAGE CONTENT */}
      <div ref={container} className="min-h-screen bg-background will-change-transform">
        {children}
      </div>
    </>
  );
}