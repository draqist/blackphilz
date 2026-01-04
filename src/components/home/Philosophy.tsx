'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

import { MANIFESTO_PHRASES } from '@/lib/constants';

const manifestoPhrases = MANIFESTO_PHRASES;

export default function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. TEXT ANIMATION ONLY (Removed Pinning Logic)
      const phrases = gsap.utils.toArray('.manifesto-line');
      
      phrases.forEach((phrase: any) => {
        gsap.fromTo(phrase, 
          { 
            color: "#8C8C8C", // Muted
            opacity: 0.3
          },
          { 
            color: "#1A1A1A", // Active Black
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: phrase,
              start: "top center+=100",
              end: "bottom center-=100",
              toggleActions: "play reverse play reverse",
              scrub: 0.5
            }
          }
        );
      });

      // Optional: Parallax the "Watermark" text slightly
      gsap.to(".philosophy-watermark", {
        y: 100,
        scrollTrigger: {
          trigger: container.current,
          scrub: true
        }
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    // PARENT: Flex container handles the layout naturally
    <section 
      ref={container} 
      className="relative w-full min-h-[150vh] flex flex-col md:flex-row bg-background overflow-clip"
    >
      
      {/* --- LEFT COLUMN: Scrolling Text (Rich Content) --- */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-32 z-10 relative">
        
        {/* Background Decorative "Watermark" for Depth */}
        <div className="philosophy-watermark absolute top-20 left-10 text-[20vw] leading-none font-bold text-white/1 pointer-events-none select-none z-0">
          TRUTH
        </div>

        <div className="flex flex-col gap-16 relative z-10">
          <div className="flex items-center gap-4">
             <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
               [02] The Philosophy
             </span>
             <div className="h-px w-12 bg-black/20"></div>
          </div>

          {/* The Manifesto List */}
          <div className="flex flex-col gap-4">
            {manifestoPhrases.map((phrase, index) => (
              <h2 
                key={index}
                className="manifesto-line text-display-md font-medium leading-[1.1] transition-colors"
              >
                {phrase}
              </h2>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 border-t border-black/10 pt-12">
            {/* Context Paragraph */}
            <p className="text-lg text-muted leading-relaxed">
              BlackPhilz Construction was founded on a simple spatial truth: 
              restraint creates impact. We remove the unnecessary until 
              only the essential structure remains.
            </p>

            {/* The "Stats" that make it feel dense/technical */}
            <div className="flex flex-col gap-6">
               <div className="flex justify-between items-end border-b border-black/10 pb-2">
                 <span className="text-xs uppercase tracking-widest text-muted-foreground">Est.</span>
                 <span className="font-mono text-sm">2003</span>
               </div>
               <div className="flex justify-between items-end border-b border-black/10 pb-2">
                 <span className="text-xs uppercase tracking-widest text-muted-foreground">Projects</span>
                 <span className="font-mono text-sm">142+</span>
               </div>
               <div className="flex justify-between items-end border-b border-black/10 pb-2">
                 <span className="text-xs uppercase tracking-widest text-muted-foreground">Awards</span>
                 <span className="font-mono text-sm">18</span>
               </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="group flex items-center gap-4 px-8 py-4 border border-foreground/20 rounded-full hover:bg-foreground hover:text-white transition-all duration-300 uppercase text-xs tracking-widest">
              <span>Explore Our Process</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- RIGHT COLUMN: Sticky Image (Fixed Bug) --- */}
      {/* 'sticky top-0' is the magic. It locks the image in view while the neighbor scrolls. */}
      <div className="hidden md:block w-1/2 h-screen sticky top-0 right-0">
        <div className="relative w-full h-full border-l border-white/20">
          <Image
            src="/images/project-3.jpg" 
            alt="Minimalist Interior Concrete"
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced Overlay: A subtle gradient makes the text pop if screens overlap */}
          <div className="absolute inset-0 bg-linear-to-r from-black/10 to-transparent" />
          
          {/* Optional: A small "Caption" badge on the image itself */}
          <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20">
            <span className="text-[10px] text-white uppercase tracking-widest">
              Fig 2.1 — Silence in Space
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}