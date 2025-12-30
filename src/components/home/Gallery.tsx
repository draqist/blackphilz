'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

gsap.registerPlugin(ScrollTrigger);

import { PROJECTS } from '@/lib/constants';

// 1. Dummy Data with varying sizes for asymmetry
const projects = PROJECTS;

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);
  
  // State to track if we are hovering ANY project (to dim the others)
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      // 1. Entry Animation (Staggered Rise)
      gsap.from('.gallery-item', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top center+=200',
        }
      });

      // 2. Custom Cursor Logic (Performance optimized)
      gsap.set(cursor.current, { xPercent: -50, yPercent: -50 });
      const xTo = gsap.quickTo(cursor.current, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(cursor.current, "y", { duration: 0.4, ease: "power3" });

      const onMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);

    }, container);

    return () => ctx.revert();
  }, [mounted]);

  // Handle cursor scaling on hover
  const onEnter = () => {
    gsap.to(cursor.current, { scale: 1, opacity: 1, duration: 0.3 });
  };
  
  const onLeave = () => {
    gsap.to(cursor.current, { scale: 0, opacity: 0, duration: 0.3 });
    setActiveProject(null);
  };

  return (
    <section 
      ref={container} 
      className="relative w-full py-32 px-6 md:px-12 bg-background z-20"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-muted/20 pb-8">
        <h2 className="text-display-md leading-none">
          Selected<br/>
          <span className="text-muted-foreground italic">Works</span>
        </h2>
        <div className="text-right mt-8 md:mt-0">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            [03] Portfolio
          </p>
          <p className="max-w-xs text-sm text-muted">
             A collection of quiet statements. Structures built to endure the Nigerian climate and economy.
          </p>
        </div>
      </div>

      {/* The "Spotlight" Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
        {projects.map((project) => (
          <div 
            key={project.id}
            className={`gallery-item relative group cursor-none ${project.colSpan}`}
            onMouseEnter={() => setActiveProject(project.id)}
          >
            {/* The Image Container */}
            <div className={`relative w-full ${project.aspect} overflow-hidden bg-gray-200`}>
              {/* Image Scale Interaction */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`
                  object-cover transition-all duration-700 ease-expo
                  group-hover:scale-[1.1] group-hover:brightness-110
                  ${activeProject && activeProject !== project.id ? 'grayscale brightness-50' : 'grayscale-0'}
                `}
              />
            </div>

            {/* Project Info (Appears on Hover) */}
            <div className="flex justify-between items-start mt-4 border-t border-black/0 group-hover:border-black/20 pt-4 transition-all duration-500">
              <div>
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.location}</p>
              </div>
              <span className="text-xs uppercase border border-black/10 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* The Floating 'VIEW' Cursor */}
      {mounted && createPortal(
        <div 
          ref={cursor}
          className="fixed top-0 left-0 w-24 h-24 bg-white rounded-full flex items-center justify-center pointer-events-none z-100 mix-blend-difference opacity-0 scale-0 -translate-x-1/2 -translate-y-1/2"
        >
          <span ref={cursorLabel} className="text-black text-center text-xs font-bold tracking-widest">
            CLICK TO VIEW
          </span>
        </div>,
        document.body
      )}

    </section>
  );
}