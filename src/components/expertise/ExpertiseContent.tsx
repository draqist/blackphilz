'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Data remains the same...
const disciplines = [
  {
    title: "Architecture",
    desc: "We don't just design buildings; we design ecosystems. Our approach balances tropical modernism with sustainable cooling strategies.",
    features: ["Biophilic Design", "Passive Cooling", "Spatial Planning"]
  },
  {
    title: "Structural Engineering",
    desc: "The backbone of safety. We use advanced load-bearing analysis to ensure stability in Lagos's unique soil conditions.",
    features: ["Soil Analysis", "Load Modeling", "Seismic Safety"]
  },
  {
    title: "Project Management",
    desc: "Chaos is the enemy of construction. We bring military-grade logistics to ensuring materials, labor, and timelines align.",
    features: ["Cost Control", "Supply Chain", "Risk Mitigation"]
  }
];

const processSteps = [
  { 
    id: "01", 
    title: "Feasibility Study", 
    desc: "Before a single line is drawn, we interrogate the site. We analyze soil composition, traffic patterns, and financial viability.",
    specs: ["Soil Load Test", "ROI Modeling", "Zoning Analysis"]
  },
  { 
    id: "02", 
    title: "Conceptual Design", 
    desc: "We define the volume and light. Massing models are generated to test how the structure interacts with the Lagos sun and wind.",
    specs: ["Solar Studies", "Massing Models", "Flow Diagrams"]
  },
  { 
    id: "03", 
    title: "Technical Documentation", 
    desc: "The blueprint phase. We generate BIM Level 2 models, ensuring every beam, pipe, and wire is clashing-detected before construction.",
    specs: ["BIM Level 2", "MEP Coordination", "Struct. Calcs"]
  },
  { 
    id: "04", 
    title: "Construction Phase", 
    desc: "Mobilization. We deploy our site teams. Rigorous daily supervision ensures the concrete pour matches the digital twin exactly.",
    specs: ["Site Supervision", "QC Reports", "Safety Protocol"]
  },
  { 
    id: "05", 
    title: "Handover & Closeout", 
    desc: "The final snagging. We stress-test all systems, finalize as-built drawings, and hand over the keys to a living machine.",
    specs: ["System Testing", "As-Built Docs", "Client Training"]
  },
];

export default function ExpertiseContent() {
  const container = useRef(null);
  const disciplinesGridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useIsomorphicLayoutEffect(() => {
    // Wait for DOM to be fully ready and fonts to load
    const timer = setTimeout(() => {
      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      
      // 1. DISCIPLINE CARDS ANIMATION (using ref for reliable targeting)
      const cards = gsap.utils.toArray<HTMLElement>('.discipline-card');
      if (cards.length > 0 && disciplinesGridRef.current) {
        gsap.fromTo(cards, 
          { 
            y: 60, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: disciplinesGridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // 2. HORIZONTAL SCROLL SECTION
      const track = trackRef.current;
      const section = sectionRef.current;

      if (track && section) {
        // Measure the track width after render
        const getScrollAmount = () => {
          const trackWidth = track.scrollWidth;
          const viewportWidth = window.innerWidth;
          return -(trackWidth - viewportWidth);
        };

        gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${track.scrollWidth}`,
            pin: true,
            scrub: 0.5,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            // Markers for debugging - remove in production
            // markers: true
          }
        });
      }
      processSteps.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `#step-${index}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });

    }, container);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={container} className="w-full">
      
      {/* --- HERO SECTION --- */}
      <div className="px-6 md:px-12 mb-32">
        <h1 className="text-display-lg leading-[0.85] tracking-tighter mb-8">
          The Anatomy<br/>
          of <span className="text-muted-foreground">Execution.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
           <p className="text-xl leading-relaxed opacity-80 max-w-lg">
             Great architecture is 10% inspiration and 90% rigorous process. 
             We have codified the act of building into a predictable, transparent science.
           </p>
           <div className="flex flex-col justify-between h-full">
              <span className="block text-xs uppercase tracking-widest opacity-50 mb-2">Technical Capabilities</span>
              <ul className="grid grid-cols-2 gap-4 text-sm font-mono opacity-70">
                 <li>Autodesk Revit</li>
                 <li>AutoCAD</li>
                 <li>Lumion 12</li>
                 <li>Primavera P6</li>
                 <li>SketchUp Pro</li>
                 <li>BIM Level 2</li>
              </ul>
           </div>
        </div>
      </div>

      {/* --- DISCIPLINES GRID --- */}
      <div className="disciplines-grid px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
        {disciplines.map((item, idx) => (
          <div key={idx} className="discipline-card group p-8 border border-white/10 hover:border-white/30 bg-white/5 transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-sm opacity-60 leading-relaxed mb-8 min-h-[80px]">{item.desc}</p>
            <ul className="space-y-2">
              {item.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-50 group-hover:opacity-100 transition-opacity">
                   <span className="w-1 h-1 bg-white rounded-full" />
                   {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* --- THE INSPECTOR (Split Screen Sticky) --- */}
      <div className="relative w-full border-t border-white/10">
        <div className="flex flex-col md:flex-row">

          {/* LEFT COLUMN: Sticky HUD (The Visuals) */}
          <div className="hidden md:flex w-1/2 h-screen sticky top-0 border-r border-white/10 items-center justify-center p-12 bg-[#0A0A0A]">
            
            {/* The "Screen" */}
            <div className="relative w-full aspect-square max-w-lg border border-white/20 p-8 flex flex-col justify-between transition-all duration-500">
               
               {/* Corner Markers */}
               <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white" />
               <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white" />
               <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white" />
               <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white" />

               {/* Dynamic Content */}
               <div className="flex justify-between items-start">
                  <span className="text-[8rem] leading-none font-bold text-white/10 font-mono">
                     {processSteps[activeStep].id}
                  </span>
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
               </div>

               {/* Central Diagram / Visual Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  {/* Grid Lines Animation */}
                  <div className="w-[80%] h-[1px] bg-white/50" />
                  <div className="h-[80%] w-[1px] bg-white/50 absolute" />
                  <div className="w-[60%] h-[60%] border border-white/30 rounded-full" />
               </div>

               {/* Specs List */}
               <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-white/40 border-b border-white/10 pb-2 block">
                     Phase Parameters
                  </span>
                  {processSteps[activeStep].specs.map((spec, i) => (
                     <div key={i} className="flex justify-between items-center animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                        <span className="text-sm font-mono text-white/70">
                           {spec}
                        </span>
                        <span className="text-xs text-green-500 uppercase tracking-widest">
                           [Active]
                        </span>
                     </div>
                  ))}
               </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Narrative */}
          <div className="w-full md:w-1/2">
             {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  id={`step-${index}`}
                  className={cn(
                    "min-h-[80vh] flex flex-col justify-center px-6 md:px-20 py-24 transition-opacity duration-500",
                    activeStep === index ? "opacity-100" : "opacity-30 blur-[1px]" // Focus effect
                  )}
                >
                   <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
                      Step {step.id}
                   </span>
                   <h2 className="text-4xl md:text-5xl font-bold mb-8">
                      {step.title}
                   </h2>
                   <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-md">
                      {step.desc}
                   </p>
                   
                   {/* Mobile-Only Specs (Since they don't see the HUD) */}
                   <div className="md:hidden mt-8 border-t border-white/10 pt-6">
                      <ul className="space-y-2">
                        {step.specs.map((s, i) => (
                           <li key={i} className="text-xs uppercase tracking-widest text-white/50">
                              + {s}
                           </li>
                        ))}
                      </ul>
                   </div>
                </div>
             ))}
          </div>

        </div>
      </div>

      {/* --- CTA --- */}
      <div className="relative z-[50] bg-background py-32 px-6 md:px-12 flex flex-col items-center text-center">
         <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build?</h2>
         <a href="/contact" className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
            Initiate Project
         </a>
      </div>

    </section>
  );
}