'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { projects } from '@/lib/constants';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);


const categories = ["All", "Commercial", "Residential", "Industrial", "Public"];
const allProjects = projects;
export default function ProjectCatalog() {
  const container = useRef(null);
  const [filter, setFilter] = useState("All");

  // Filter Logic
  const filteredProjects = useMemo(() => {
    if (filter === "All") return allProjects;
    return allProjects.filter(p => p.category === filter);
  }, [filter]);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Image Reveal Animation (The "Curtain")
      const items = gsap.utils.toArray('.project-row');
      
      items.forEach((item: any) => {
        const img = item.querySelector('.project-img');
        const curtain = item.querySelector('.img-curtain');
        
        // Parallax Effect
        gsap.to(img, {
          yPercent: 20, // Move image slightly down as we scroll
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        // Curtain Reveal (Slide overlay away)
        gsap.to(curtain, {
          height: "0%",
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top center+=200", // Start revealing when near center
          }
        });
      });

    }, container);

    return () => ctx.revert();
  }, [filteredProjects]); // Re-run animation when filter changes

  return (
    <section ref={container} className="w-full min-h-screen px-6 md:px-12 pb-32 mt-0 md:mt-10">
      
      {/* --- HEADER & FILTER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-black/10 pb-8">
        <div>
          <h1 className="text-display-lg leading-[0.85] tracking-tighter mb-4">
            Selected<br/>Works
          </h1>
          <p className="text-muted text-lg max-w-md">
            An archive of structures built with purpose.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-8 md:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-xs uppercase tracking-widest border transition-all duration-300",
                filter === cat 
                  ? "bg-black text-white border-black" 
                  : "bg-transparent text-white/50 border-black/10 hover:border-black/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- THE CINEMATIC REEL --- */}
      <div className="flex flex-col gap-24 md:gap-40">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-row group flex flex-col md:flex-row gap-12 md:gap-24 items-center"
          >
            
            {/* 1. Image Side (Alternates Left/Right based on index) */}
            <div className={cn(
              "w-full md:w-7/12 relative aspect-16/10 overflow-hidden bg-black/5",
              index % 2 === 1 ? "md:order-last" : "" // Swap order for odd items
            )}>
              {/* The "Curtain" Overlay */}
              <div className="img-curtain absolute top-0 left-0 w-full h-full bg-background z-20 pointer-events-none" />
              
              <Link href={`/projects/${project.slug}`} className="block w-full h-full relative">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="project-img object-cover scale-110 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                
                {/* Hover Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                   <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <span className="text-xs font-bold text-white uppercase">View</span>
                   </div>
                </div>
              </Link>
            </div>

            {/* 2. Text Side */}
            <div className="w-full md:w-5/12 flex flex-col items-start">
              
              {/* Meta Data */}
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground mb-6">
                <span>{project.id}</span>
                <span className="w-8 h-px bg-black/20" />
                <span>{project.category}</span>
                <span className="w-8 h-px bg-black/20" />
                <span>{project.year}</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-6xl font-medium leading-none mb-8 group-hover:translate-x-4 transition-transform duration-500">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-lg text-black/60 leading-relaxed mb-8 max-w-sm">
                {project.description}
              </p>

              {/* Location Tag */}
              <div className="flex items-center gap-2 text-sm font-mono text-black">
                <span className="w-2 h-2 bg-black rounded-full" />
                {project.location}
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}