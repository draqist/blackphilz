"use client";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image, { ImageProps } from "next/image";
import { useRef } from "react";

interface ParallaxImgProps extends ImageProps {
  containerClassName?: string;
}

export default function ParallaxImg({ containerClassName, className, ...props }: ParallaxImgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.to(imgRef.current, {
            y: "-20%",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
            }
        })
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={cn("overflow-hidden relative", containerClassName)}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        ref={imgRef}
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  );
}
