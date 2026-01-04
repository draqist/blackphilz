'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef, useState } from 'react';

import { TEAM_MEMBERS } from '@/lib/constants';

const team = TEAM_MEMBERS;

export default function Team() {
  const container = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>("01"); 

  const handleToggle = (id: string) => {
    setActiveId(prev => prev === id ? null : id); // Allow collapsing
  };

  return (
    // 1. SECTION BACKGROUND: Dark (bg-foreground) to create contrast for inactive items
    <section ref={container} className="w-full py-24 md:py-32 px-4 md:px-12 bg-foreground text-background">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 pb-6">
        <h2 className="text-display-md leading-none text-white">
          The <span className="text-white/50">Builders</span>
        </h2>
        <p className="text-sm uppercase tracking-widest text-white/50 mt-4 md:mt-0">
          [04] Leadership
        </p>
      </div>

      {/* The Stack */}
      <div className="flex flex-col border-t border-white/20">
        {team.map((member) => {
          const isActive = activeId === member.id;
          
          return (
            <div 
              key={member.id}
              onClick={() => handleToggle(member.id)}
              className={cn(
                "group border-b transition-all duration-500  overflow-hidden relative",
                // 2. CONTAINER STATE:
                // Active = White Background, Border Transparent
                // Inactive = Transparent Background, White Border
                isActive 
                  ? "bg-background border-transparent" 
                  : "bg-transparent border-b border-white/20 hover:bg-white/5"
              )}
            >
              {/* The Header Row */}
              <div className="flex items-center justify-between py-8 px-2 md:px-4">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className={cn(
                    "text-xs font-bold font-mono transition-colors duration-500",
                    isActive ? "text-white/50" : "text-white/50"
                  )}>
                    {member.id}
                  </span>
                  <h3 className={cn(
                    "text-2xl md:text-4xl font-medium tracking-tight transition-colors duration-500",
                    isActive ? "text-white" : "text-white/50"
                  )}>
                    {member.name}
                  </h3>
                </div>
                
                <div className="flex items-center gap-8">
                  <span className={cn(
                    "hidden md:block text-xs uppercase tracking-widest transition-colors duration-500",
                    isActive ? "text-white" : "text-white/50"
                  )}>
                    {member.role}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className="relative w-4 h-4">
                    {/* Horizontal Line - Adapts color */}
                    <span className={cn(
                      "absolute top-1/2 left-0 w-full h-px transform -translate-y-1/2 transition-colors duration-500",
                      isActive ? "bg-white/50" : "bg-white"
                    )} />
                    {/* Vertical Line - Rotates & Adapts color */}
                    <span className={cn(
                      "absolute top-0 left-1/2 h-full w-px transform -translate-x-1/2 transition-all duration-300",
                      isActive ? "bg-white/50 rotate-90" : "bg-white rotate-0"
                    )} />
                  </div>
                </div>
              </div>

              {/* The Hidden Content */}
              <div 
                className={cn(
                  "grid grid-cols-1 md:grid-cols-12 gap-8 px-4 transition-all duration-700 ease-expo overflow-hidden",
                  isActive ? "max-h-[600px] opacity-100 pb-12 pt-4" : "max-h-0 opacity-0 pb-0 pt-0"
                )}
              >
                {/* Image */}
                <div className="md:col-span-4 relative h-[300px] md:h-[500px] bg-gray-200 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 object-top"
                  />
                </div>

                {/* Bio Text - FORCED BLACK COLOR since background is white */}
                <div className="md:col-span-6 flex flex-col justify-between h-full text-white">
                  <div>
                    <h4 className="text-xl mb-6 font-medium text-white">{member.role}</h4>
                    <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="mt-8 md:mt-0 pt-8 border-t border-black/10 flex gap-8">
                     <div>
                        <span className="block text-[10px] uppercase text-white mb-1">Education</span>
                        <span className="block text-sm font-medium text-white">{member.education}</span>
                     </div>
                     <div>
                        <span className="block text-[10px] uppercase text-white mb-1">Experience</span>
                        <span className="block text-sm font-medium text-white">{member.experience}</span>
                     </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}