'use client';

import Blueprint from '@/components/ui/Blueprint';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

import { SERVICES } from '@/lib/constants';

const services = SERVICES;

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const container = useRef(null);

  return (
    // 1. BACKGROUND TWEAK: Changed from Bright Beige (#EBEAE5) to "Warm Stone" (#d6d5d0)
    // This reduces the harsh glare when coming from the black section.
    <section ref={container} className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#d6d5d0] text-black overflow-hidden">
      
      {/* 2. NEW LAYOUT: Full-Width Header to fix the "Scanty" look */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-black/10 pb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-6 block">
            [05] Capabilities
          </span>
          <h2 className="text-display-md leading-[0.9] tracking-tighter">
            What We Offer,<br/>
            Built with <span className="italic font-serif">Confidence.</span>
          </h2>
        </div>
        
        {/* Intro Text - Now sits nicely on the right, balancing the header */}
        <div className="max-w-md mt-8 md:mt-0">
          <p className="text-lg text-black/70 leading-relaxed">
            A comprehensive suite of services designed to guide your project from initial concept to final handover, ensuring precision at every stage.
          </p>
        </div>
      </div>

      {/* 3. THE CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        
        {/* LEFT: Sticky Visuals */}
        <div className="md:col-span-5 flex flex-col h-full sticky top-32 self-start">
          
          {/* Dynamic Description Text - Anchored above image */}
          <div className="h-24 relative mb-6">
             <p key={activeIdx} className="text-xl font-medium text-black max-w-sm animate-in fade-in slide-in-from-bottom-2 duration-500 leading-snug">
                {services[activeIdx].desc}
              </p>
          </div>

          {/* THE DYNAMIC DISPLAY FRAME */}
          {/* Added 'shadow-xl' to separate it from the stone background */}
          <div className="relative w-full aspect-4/5 bg-white rounded-xl shadow-xl shadow-black/5 overflow-hidden">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={cn(
                  "absolute inset-0 w-full h-full transition-opacity duration-500 flex items-center justify-center rounded-xl",
                  activeIdx === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                {service.type === 'blueprint' ? (
                  <div className="w-full h-full text-black bg-white p-2 rounded-xl">
                    <Blueprint isActive={activeIdx === idx} />
                  </div>
                ) : (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                )}
              </div>
            ))}
            
            <div className="absolute top-4 rounded-sm left-4 bg-black text-white text-[10px] uppercase px-2 py-1 tracking-widest z-20 shadow-sm">
              Fig. {services[activeIdx].id}
            </div>
          </div>
        </div>

        {/* RIGHT: The List */}
        <div className="md:col-span-7 flex flex-col justify-center">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              onMouseEnter={() => setActiveIdx(idx)}
              className="group relative flex items-baseline gap-6 py-10 border-b border-black/10  transition-all duration-500 hover:pl-8 hover:border-black/30"
            >
              <span className="text-sm font-mono text-black/30 group-hover:text-black transition-colors">
                ({service.id})
              </span>
              
              <div className="relative">
                <h3 className="text-3xl md:text-6xl font-light tracking-tight text-black/80 group-hover:text-black group-hover:font-normal transition-all duration-300">
                  {service.title}
                </h3>
                <span className="absolute -top-3 -right-4 md:-right-8 text-xs font-bold text-black/30 group-hover:text-black/60 transition-colors">
                  {service.count}
                </span>
              </div>
            </div>
          ))}
          
          <div className="mt-16 text-xs text-black/40 uppercase tracking-widest pl-4 flex items-center gap-4">
             <div className="w-8 h-[1px] bg-black/20" />
             <span>Design Process / 2024</span>
          </div>
        </div>

      </div>
    </section>
  );
}