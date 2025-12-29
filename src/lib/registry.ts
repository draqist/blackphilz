"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useGsapRegistry() {
  useLayoutEffect(() => {
    // GSAP global config if needed
  }, []);
}
