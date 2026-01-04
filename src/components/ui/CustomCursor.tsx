'use client';

import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // 1. Hide default cursor
    document.body.style.cursor = 'none';

    // 2. Movement Logic
    const moveCursor = (e: MouseEvent) => {
      // Precise Dot (Instant)
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
      // Glass Follower (Smooth/Laggy)
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    // 3. Hover Detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [pathname]);

  // 4. ANIMATION STATES (The Frosted Lens)
  useEffect(() => {
    if (isHovering) {
      // HOVER: Expand into a Frosted Lens
      gsap.to(followerRef.current, { 
        scale: 1.5, // Large enough to cover text
        opacity: 1,
        
        // The "Frosted Glass" Recipe:
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight white tint
        // backdropFilter: "blur(1px)", // Gentle blur (The "Frost")
        borderWidth: "1px",
        borderColor: "rgba(255, 255, 255, 0.4)", // Define the edge
        
        duration: 0.4,
        ease: "power2.out"
      });
      
      // Keep the dot visible but maybe shrink it slightly
      gsap.to(cursorRef.current, { scale: 0.5, duration: 0.3 }); 

    } else {
      // RESET: Subtle Outline
      gsap.to(followerRef.current, { 
        scale: 1, 
        opacity: 1, 
        
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
        borderWidth: "1px",
        borderColor: "rgba(100, 100, 100, 0.3)", // darker border for visibility
        
        duration: 0.3 
      });
      
      gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
    }
  }, [isHovering]);

  return (
    <>
      {/* The Dot: Keeps 'mix-blend-difference' so it's always visible 
        (White on Black, Black on White) 
      */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
      
      {/* The Lens: Normal blend mode so we can use blur/colors. 
        High z-index but below the dot. 
      */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 will-change-transform transition-colors"
      />
    </>
  );
}