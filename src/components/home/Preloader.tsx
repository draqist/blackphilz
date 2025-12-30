'use client';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const PRELOADER_SESSION_KEY = 'blackphilz_preloader_shown';

export default function Preloader() {
  const container = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [complete, setComplete] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if preloader has already been shown in this session
    if (typeof window !== 'undefined') {
      const hasShown = sessionStorage.getItem(PRELOADER_SESSION_KEY);
      if (hasShown) {
        // Skip preloader, mark as complete immediately
        setComplete(true);
      } else {
        // Show preloader and mark that it will be shown
        setShouldShow(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!shouldShow) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Mark as shown in session storage
          sessionStorage.setItem(PRELOADER_SESSION_KEY, 'true');
          setComplete(true);
        }
      });

      // 1. The Counter Animation (0 -> 100)
      tl.to(counterRef.current, {
        innerHTML: 100,
        duration: 3,
        snap: { innerHTML: 1 },
        ease: "power2.out",
        onUpdate: function() {
          if (counterRef.current) {
            counterRef.current.innerHTML = Math.round(this.targets()[0].innerHTML) + "%";
          }
        }
      });

      // 2. The "Curtain Lift"
      tl.to(container.current, {
        yPercent: -100,
        duration: 1.5,
        ease: "expo.inOut",
        delay: 0.2
      });
      
    }, container);

    return () => ctx.revert();
  }, [shouldShow]);

  // If complete or shouldn't show, don't render
  if (complete || !shouldShow) return null;

  return (
    <div 
      ref={container}
      className="fixed inset-0 z-[9999] bg-[#1a1a1a] text-[#EBEAE5] flex flex-col justify-between p-6 md:p-12 h-screen w-screen"
    >
      {/* Top Details */}
      <div className="flex justify-between items-start opacity-50 text-xs uppercase tracking-widest">
        <span>BlackPhilz Const.</span>
        <span>Lagos, NG</span>
      </div>

      {/* Center Company Name (Big & Bold) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase overflow-hidden">
          <span className="block animate-pulse">Loading Presence</span>
        </h1>
      </div>

      {/* Bottom Counter */}
      <div className="flex justify-between items-end">
         <span className="text-xs uppercase tracking-widest opacity-50 max-w-[100px]">
            Engineering the<br/>future skyline.
         </span>
         
         {/* The Counter */}
         <span 
           ref={counterRef} 
           className="text-[15vw] md:text-[12vw] leading-none font-bold tabular-nums tracking-tighter"
         >
           0%
         </span>
      </div>
    </div>
  );
}