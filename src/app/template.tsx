'use client';

import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // "Enter" Animation
    // Whenever the route changes, this component mounts, and we animate the content IN.
    
    const ctx = gsap.context(() => {
      
      // Initial State: Slightly down and transparent
      gsap.set(container.current, { y: 20, opacity: 0 });

      // Animate to: Normal position
      gsap.to(container.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2 // Give the browser a moment to paint the new DOM
      });

    }, container);

    return () => ctx.revert();
  }, [pathname]); // Re-run on path change

  return (
    <div ref={container} className="min-h-screen bg-background">
      {children}
    </div>
  );
}