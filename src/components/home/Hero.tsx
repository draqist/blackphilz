'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const bgImage = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Text Reveal Animation
      tl.to('.hero-text-line', {
        y: 0,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.1,
        delay: 0.2
      })
      .fromTo('.hero-fade-in', {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.1 // Stagger the fading elements (text, button, tags)
      }, '-=1.4');

      // 2. Parallax
      gsap.to(bgImage.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container} 
      className="relative h-screen w-full overflow-hidden bg-foreground text-background"
    >
      
      {/* Background Image - Parallax Container */}
      <div ref={bgImage} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 will-change-transform">
        <Image
          src="/images/hero-construction.jpg"
          alt="Architectural Concrete Structure"
          fill
          priority
          className="object-cover brightness-[0.75]" 
        />
        {/* Gradient Scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Main Content - Flex/Grid container */}
      <div className="relative z-10 h-full w-full max-w-[100vw] flex flex-col justify-end pb-12 px-6 md:px-12">
        
        {/* Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end w-full">
          
          {/* Left: Headline (Spans 7 cols on large screens) */}
          <div className="lg:col-span-7 xl:col-span-8 mb-4 lg:mb-0">
            <h1 className="text-display-lg font-bold leading-[0.9] tracking-tighter text-white">
              <div className="overflow-hidden">
                <span className="hero-text-line block translate-y-full pb-2">
                  Precision in Every Pour.
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-text-line block translate-y-full text-white/70 pb-2">
                  Legacy in Every Line.
                </span>
              </div>
            </h1>
          </div>

          {/* Right: Subtext, CTA, AND Tags (Spans 5 cols) */}
          {/* Moving tags inside here prevents overlap */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-start lg:items-end justify-end gap-8 hero-fade-in opacity-0">
            
            {/* Paragraph */}
            <p className="text-lg text-gray-200 leading-relaxed max-w-md lg:text-right">
              We don't just build structures; we engineer the future. 
              Bridging the gap between architectural vision and industrial reality.
            </p>
            
            {/* Button */}
            <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
              <span className="uppercase tracking-widest text-xs font-bold">
                Start the Build
              </span>
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                →
              </span>
            </button>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-white/20 my-2" />

            {/* Tags - Now part of the flow! */}
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {['Industrial', 'Commercial', 'Residential'].map((tag) => (
                <div key={tag} className="px-4 py-2 rounded-full border border-white/30 text-xs uppercase text-white backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                  {tag}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}