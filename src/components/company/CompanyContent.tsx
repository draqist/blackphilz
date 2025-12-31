'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { TEAM_MEMBERS } from '@/lib/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2003", title: "The Foundation", desc: "Founded in Surulere with a focus on small-scale residential renovations." },
  { year: "2010", title: "Commercial Expansion", desc: "Secured first major contract for a 12-story office complex in Victoria Island." },
  { year: "2018", title: "Sustainable Shift", desc: "Pioneered the 'Green Lagos' initiative, integrating solar facades standard." },
  { year: "2024", title: "National Reach", desc: "Operations expanded to Abuja and Port Harcourt with over 500 active staff." }
];

const awards = [
  { id: "01", org: "NIA Awards", title: "Excellence in Tropical Modernism", year: "2023" },
  { id: "02", org: "Lagos Construction Guild", title: "Best Safety Record (High-Rise)", year: "2022" },
  { id: "03", org: "African Property Awards", title: "Best Mixed-Use Development", year: "2021" },
  { id: "04", org: "Global Concrete Institute", title: "Innovation in Structural Engineering", year: "2020" },
];

export default function CompanyContent() {
  const container = useRef(null);
  const team = TEAM_MEMBERS
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Hero Text Reveal
      gsap.from(".company-hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out"
      });

      // 2. Timeline Line Drawing
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 2,
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      });

      // 3. Team Grid Rise
      gsap.from(".team-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".team-section",
          start: "top bottom-=100"
        }
      });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full px-6 md:px-12 pb-32">
      
      {/* --- 1. HERO --- */}
      <div className="min-h-[60vh] flex flex-col justify-center mb-24 md:mb-32">
        <span className="company-hero-line block text-xs font-bold uppercase tracking-widest opacity-50 mb-6">
          Who We Are
        </span>
        <h1 className="company-hero-line text-display-lg leading-[0.85] tracking-tighter max-w-5xl">
          We don't just build.<br/>
          We define the <span className="text-muted-foreground">skyline.</span>
        </h1>
        <div className="company-hero-line mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
           <p className="text-xl opacity-80 leading-relaxed">
             BlackPhilz Construction is a multidisciplinary firm operating at the intersection of 
             robust engineering and refined aesthetics. For over two decades, we have been 
             the silent force behind Nigeria's most ambitious structures.
           </p>
           <div className="flex gap-12">
              <div>
                 <span className="block text-4xl font-bold">20+</span>
                 <span className="text-xs uppercase tracking-widest opacity-50">Years Active</span>
              </div>
              <div>
                 <span className="block text-4xl font-bold">₦50B+</span>
                 <span className="text-xs uppercase tracking-widest opacity-50">Project Value</span>
              </div>
           </div>
        </div>
      </div>

      {/* --- 2. IMAGE BREAK --- */}
      <div className="relative w-full h-[60vh] md:h-[80vh] mb-32 overflow-hidden bg-gray-900">
         <Image 
           src="/images/company-hero.jpg" // Add a wide team photo or site panorama here
           alt="BlackPhilz Team on Site"
           fill
           className="object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000"
         />
      </div>

      {/* --- 3. THE TIMELINE --- */}
      <div className="timeline-section grid grid-cols-1 md:grid-cols-12 gap-12 mb-40 relative">
         <div className="md:col-span-4">
            <h2 className="text-4xl font-bold mb-4">Our History</h2>
            <p className="opacity-60 max-w-xs">From humble beginnings to national infrastructure.</p>
         </div>
         
         <div className="md:col-span-8 relative pl-8 md:pl-16 border-l border-white/10">
            {/* The Animated Line */}
            <div className="timeline-line absolute left-0 top-0 w-[2px] h-full bg-white origin-top" />

            <div className="flex flex-col gap-24 py-12">
               {milestones.map((item, idx) => (
                  <div key={idx} className="relative">
                     <span className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 rounded-full bg-background border-2 border-white" />
                     <span className="text-6xl md:text-8xl font-bold opacity-10 leading-none absolute -top-12 -left-4 select-none">
                        {item.year}
                     </span>
                     <h3 className="text-2xl font-bold mb-2 relative z-10">{item.title}</h3>
                     <p className="opacity-60 max-w-md relative z-10">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* --- 4. LEADERSHIP --- */}
      <div className="team-section mb-40">
         <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <h2 className="text-4xl font-bold">Leadership</h2>
            <span className="text-xs uppercase tracking-widest opacity-50 hidden md:block">The minds behind the method</span>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member) => (
               <div key={member.id} className="team-card group ">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-800 mb-6">
                     <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                     />
                     {/* Overlay on hover */}
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                        <p className="text-sm text-white italic">"Precision is not an act, it is a habit."</p>
                     </div>
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-sm opacity-50 uppercase tracking-widest mt-1">{member.role}</p>
               </div>
            ))}
         </div>
      </div>

      {/* --- 5. AWARDS LIST --- */}
      <div className="max-w-4xl mx-auto">
         <h2 className="text-center text-xs font-bold uppercase tracking-widest opacity-50 mb-12">Recognition</h2>
         <div className="flex flex-col">
            {awards.map((award) => (
               <div key={award.id} className="group flex flex-col md:flex-row justify-between items-baseline py-8 border-b border-white/10 hover:border-white transition-colors duration-300">
                  <div className="flex gap-4 md:gap-12">
                     <span className="font-mono text-sm opacity-30">0{award.id}</span>
                     <span className="text-xl font-medium">{award.title}</span>
                  </div>
                  <div className="flex gap-4 md:gap-12 mt-4 md:mt-0">
                     <span className="text-sm opacity-50 uppercase tracking-wider">{award.org}</span>
                     <span className="font-mono text-sm opacity-30">{award.year}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>

    </section>
  );
}