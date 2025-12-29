'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const manifestoPhrases = [
  "We don't just pour concrete.",
  "We forge permanence.",
  "In an era of disposable architecture,",
  "we dwell in durability.",
  "Every beam is a promise kept.",
  "Every line is a legacy secured."
];

export default function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. The Pinning Logic
      // We want the image on the right to stick while we scroll the text
      ScrollTrigger.create({
        trigger: container.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: imageContainer.current, // Pin the right side
        scrub: true,
        // markers: true, // Uncomment for debugging
      });

      // 2. The "Reading Light" Text Effect
      // Select all phrases we mapped
      const phrases = gsap.utils.toArray('.manifesto-line');
      
      phrases.forEach((phrase: any) => {
        gsap.fromTo(phrase, 
          { 
            color: "#8C8C8C", // Start as Muted Grey (Tailwind 'muted')
            opacity: 0.3
          },
          { 
            color: "#1A1A1A", // End as Black (Tailwind 'foreground')
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: phrase,
              start: "top center+=100", // Activate when text hits slightly below center
              end: "bottom center-=100",
              toggleActions: "play reverse play reverse", // Fade in/out as you scroll
              scrub: 0.5 // Softens the transition
            }
          }
        );
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container} 
      className="relative w-full min-h-[150vh] flex bg-background"
    >
      {/* LEFT COLUMN: Scrolling Text */}
      <div 
        ref={textContainer}
        className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-32 z-10"
      >
        <div className="flex flex-col gap-12">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
            [02] The Philosophy
          </span>

          <div className="flex flex-col gap-2">
            {manifestoPhrases.map((phrase, index) => (
              <h2 
                key={index}
                className="manifesto-line text-display-md font-medium leading-tight transition-colors"
              >
                {phrase}
              </h2>
            ))}
          </div>

          <p className="max-w-md text-lg text-muted mt-12 leading-relaxed">
            Apex Construction was founded on a simple spatial truth: 
            restraint creates impact. We remove the unnecessary until 
            only the essential structure remains. What is left is not 
            just a building, but a statement.
          </p>

          <div className="mt-8">
            <button className="px-8 py-3 border border-foreground/20 rounded-full hover:bg-foreground hover:text-white transition-all duration-300 uppercase text-xs tracking-widest">
              Explore Our Process
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Sticky Image */}
      {/* hidden on mobile, block on md */}
      <div 
        ref={imageContainer}
        className="hidden md:block w-1/2 h-screen absolute right-0 top-0 overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/philosophy-interior.jpg" // Need a clean, minimal interior shot
            alt="Minimalist Interior Concrete"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay to blend if needed */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  );
}