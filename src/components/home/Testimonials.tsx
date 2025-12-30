'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

import { PARTNERS, TESTIMONIALS } from '@/lib/constants';

// 1. Data Source
const testimonials = TESTIMONIALS;

const partners = PARTNERS;

export default function Testimonials() {
  const container = useRef(null);
  const marqueeRef = useRef(null);
  const progressRef = useRef(null);
  
  // State for active testimonial
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 1. Auto-Rotation Logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [activeIdx]); // Re-run timer on change

  // 2. Animation Logic for Content Switch
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        // Update state after fade out
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }
    });

    // Fade OUT current
    tl.to(".quote-anim-content", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in"
    });
  };

  // 3. Animate IN when state changes
  useIsomorphicLayoutEffect(() => {
    if (!container.current) return;

    // Animate IN new content
    gsap.fromTo(".quote-anim-content", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
    );

    // Reset and Animate Progress Bar
    gsap.fromTo(progressRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 6, ease: "none" } // Matches the 6000ms interval
    );

  }, [activeIdx]);


  // 4. Initial Infinite Marquee Setup
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const current = testimonials[activeIdx];

  return (
    <section ref={container} className="relative w-full py-32 bg-foreground text-background overflow-hidden border-t border-white/10">
      <div className="px-6 md:px-12 max-w-[100vw]">
        
        {/* THE EDITORIAL QUOTE AREA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-32 min-h-[400px]">
          
          {/* Left: Label & Progress */}
          <div className="md:col-span-3 flex flex-col justify-between h-full">
             <div>
               <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-4">
                 [06] Client Perspectives
               </span>
               <div className="w-12 h-[1px] bg-white/40 mb-8" />
             </div>
             
             {/* The Progress Bar Indicator */}
             <div className="hidden md:block">
               <span className="text-[10px] uppercase text-white/30 tracking-widest mb-2 block">
                 {activeIdx + 1} / {testimonials.length}
               </span>
               <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
                 <div ref={progressRef} className="absolute inset-0 bg-white w-full h-full" />
               </div>
             </div>
          </div>

          {/* Right: The Quote */}
          <div className="md:col-span-8 md:col-start-5 relative">
            <span className="absolute -top-12 -left-16 text-[120px] leading-none text-white/5 font-serif select-none">
              “
            </span>

            <blockquote className="relative z-10 quote-anim-content">
              {/* The Quote Text */}
              <p className="text-3xl md:text-5xl font-light leading-tight mb-12 min-h-[180px]">
                {current.quote.split(current.highlight)[0]}
                <span className="text-white/50">{current.highlight}</span>
                {current.quote.split(current.highlight)[1]}
              </p>
              
              {/* The Author Footer */}
              <footer className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                   <span className="font-bold text-xl text-white">{current.initials}</span>
                </div>
                
                <div>
                  <cite className="block text-lg font-normal not-italic text-white">
                    {current.name}
                  </cite>
                  <span className="block text-sm text-white/50 uppercase tracking-wider">
                    {current.role}
                  </span>
                </div>
              </footer>
            </blockquote>

            {/* Mobile Navigation Dots (Visible only on small screens) */}
            <div className="flex gap-2 mt-12 md:hidden">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* INFINITE MARQUEE */}
        <div className="relative w-full border-t border-white/10 pt-12">
          <p className="text-xs uppercase tracking-widest text-center text-white/30 mb-12">
            Trusted by Industry Leaders
          </p>
          <div className="w-full overflow-hidden flex mask-gradient-sides">
            <div ref={marqueeRef} className="flex gap-16 md:gap-32 items-center whitespace-nowrap pr-16 md:pr-32">
              {[...partners, ...partners].map((partner, i) => (
                <span 
                  key={i} 
                  className="text-2xl md:text-4xl font-bold text-white/20 uppercase tracking-tighter hover:text-white/80 transition-colors duration-500 cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}