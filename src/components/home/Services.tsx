'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef, useState } from 'react';

const services = [
  {
    id: "01",
    title: "Architectural Design",
    count: 32,
    image: "/images/service-arch.jpg", // Use a blueprint/wireframe image here
    desc: "From concept to completion, each space is shaped with intention."
  },
  {
    id: "02",
    title: "Interior Design",
    count: 24,
    image: "/images/service-interior.jpg", // Interior render
    desc: "We dwell in restraint. Curating the silence within the walls."
  },
  {
    id: "03",
    title: "3D Visualization",
    count: 31,
    image: "/images/service-3d.jpg", // High-end render
    desc: "Photorealistic previews that bridge the gap between dream and reality."
  },
  {
    id: "04",
    title: "Sketch Design",
    count: 18,
    image: "/images/service-sketch.jpg", // Hand sketch
    desc: "The raw gesture. Where the first line defines the legacy."
  }
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const container = useRef(null);

  return (
    // LIGHT BACKGROUND for Contrast
    <section ref={container} className="relative w-full py-32 px-6 md:px-12 bg-[#EBEAE5] text-black">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        
        {/* LEFT: Static Title + Dynamic Image */}
        <div className="md:col-span-5 flex flex-col justify-between h-full sticky top-32 self-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
              [05] Capabilities
            </span>
            <h2 className="text-display-md leading-[0.9] mb-8">
              What We Offer,<br/>
              Built with Intention.
            </h2>
            
            {/* Dynamic Description */}
            <p key={activeIdx} className="text-lg text-black/60 max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              {services[activeIdx].desc}
            </p>
          </div>

          {/* Dynamic Image Display */}
          <div className="relative w-full aspect-4/5 mt-12 bg-white p-2 rounded-xl hidden md:block border border-black/5">
            {services.map((service, idx) => (
              <Image
                key={service.id}
                src={service.image}
                alt={service.title}
                fill
                className={cn(
                  "object-cover rounded-xl transition-opacity duration-500 p-2",
                  activeIdx === idx ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: The List */}
        <div className="md:col-span-7 flex flex-col justify-center">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              onMouseEnter={() => setActiveIdx(idx)}
              className="group flex items-baseline gap-4 py-8 border-b border-black/10 cursor-pointer transition-all duration-300 hover:pl-4"
            >
              <span className="text-sm font-mono text-black/40 group-hover:text-black transition-colors">
                ({service.id})
              </span>
              
              <div className="relative">
                <h3 className="text-4xl md:text-6xl font-light tracking-tight group-hover:font-normal transition-all duration-300">
                  {service.title}
                </h3>
                {/* Superscript Count */}
                <span className="absolute -top-2 -right-6 text-xs font-bold text-black/40">
                  {service.count}
                </span>
              </div>
            </div>
          ))}
          
          <div className="mt-12 text-xs text-black/40 uppercase tracking-widest">
            * Design is a process of distillation. Every detail has intention.
          </div>
        </div>

      </div>
    </section>
  );
}