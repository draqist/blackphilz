"use client";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import gsap from "gsap";
import { useRef } from "react";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function RevealText({ children, className }: RevealTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: elementRef.current, start: "top 80%" } }
      );
    }, elementRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
