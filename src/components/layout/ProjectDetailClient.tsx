'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  heroImage: string;
  stats: {
    client: string;
    size: string;
    duration: string;
    role: string;
  };
  challenge: string;
  solution: string;
  gallery: string[];
};

export default function ProjectDetailClient({ 
  project, 
  nextProject 
}: { 
  project: Project;
  nextProject: Project;
}) {
  const container = useRef(null);
  const heroRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Hero Parallax (Slower scroll for image)
      gsap.to(".hero-img", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // 2. Text Reveal for Story
      gsap.from(".story-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top center+=100",
        }
      });

      // 3. Gallery Image Rise
      gsap.utils.toArray('.detail-gallery-img').forEach((img: any) => {
        gsap.from(img, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: img,
            start: "top bottom-=100"
          }
        });
      });

    }, container);

    return () => ctx.revert();
  }, [project.slug]);

  const { title, category, location, heroImage, stats, challenge, solution, gallery } = project;

  return (
    <main ref={container} className="bg-background min-h-screen text-foreground">

      {/* --- 1. HERO SECTION --- */}
      <section ref={heroRef} className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
           <Image
             src={heroImage}
             alt={title}
             fill
             priority
             className="hero-img object-cover brightness-[0.8]"
           />
           <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-16">
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4 text-white/60 text-xs uppercase tracking-widest">
                <span>{category}</span>
                <span className="w-8 h-px bg-white/20" />
                <span>{location}</span>
             </div>
             <h1 className="text-display-lg font-bold text-white leading-[0.85] tracking-tighter max-w-4xl">
               {title}
             </h1>
          </div>
        </div>
      </section>

      {/* --- 2. DATA GRID (Technical Specs) --- */}
      <section className="border-b border-black/10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10 border-b border-black/10">
           {[
             { label: "Client", value: stats.client },
             { label: "Size", value: stats.size },
             { label: "Duration", value: stats.duration },
             { label: "Role", value: stats.role },
           ].map((stat) => (
             <div key={stat.label} className="p-6 md:p-12">
               <span className="block text-xs uppercase text-muted-foreground tracking-widest mb-2">
                 {stat.label}
               </span>
               <span className="block text-xl md:text-2xl font-medium">
                 {stat.value}
               </span>
             </div>
           ))}
        </div>
      </section>

      {/* --- 3. THE NARRATIVE (Challenge vs Solution) --- */}
      <section className="story-section py-24 md:py-32 px-6 md:px-12 max-w-[100vw]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
           
           <div className="md:col-span-4">
              <h2 className="story-reveal text-4xl font-medium mb-8">
                The Engineering<br/>Narrative
              </h2>
              <div className="story-reveal w-12 h-px bg-black/20" />
           </div>

           <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="story-reveal">
                 <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-red-700">The Challenge</h3>
                 <p className="text-lg text-white/70 leading-relaxed">
                   {challenge}
                 </p>
              </div>
              <div className="story-reveal">
                 <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-green-700">The Solution</h3>
                 <p className="text-lg text-white/70 leading-relaxed">
                   {solution}
                 </p>
              </div>
           </div>

        </div>
      </section>

      {/* --- 4. THE GALLERY --- */}
      <section className="w-full pb-32">
        {gallery.map((img, idx) => (
          <div key={idx} className={`detail-gallery-img relative w-full ${idx === 1 ? 'h-[60vh] md:w-[80%] mx-auto my-12' : 'h-[80vh] md:h-screen my-4'}`}>
             <Image
               src={img}
               alt={`Detail ${idx + 1}`}
               fill
               className="object-cover"
             />
             {idx === 0 && (
               <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20">
                 <span className="text-xs text-white uppercase tracking-widest">
                    Fig. 0{idx + 1} — Construction Phase
                 </span>
               </div>
             )}
          </div>
        ))}
      </section>

      {/* --- 5. NEXT PROJECT NAV --- */}
      <section className="w-full bg-black text-white py-32 px-6 md:px-12">
         <Link href={`/projects/${nextProject.slug}`} className="group block w-full text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 block group-hover:text-white transition-colors">
              Next Project
            </span>
            <h2 className="text-[10vw] leading-[0.8] font-bold tracking-tighter text-white/20 group-hover:text-white transition-colors duration-500">
              {nextProject.title}
            </h2>
            <div className="mt-8 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
               <span className="px-8 py-3 border border-white rounded-full uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors">
                 View Case Study
               </span>
            </div>
         </Link>
      </section>

    </main>
  );
}
