'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { news } from '@/lib/constants';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Project Update", "Press", "Insight", "Company"];

export default function NewsCatalog() {
  const container = useRef(null);
  const [filter, setFilter] = useState("All");

  // Filter Logic
  const filteredNews = useMemo(() => {
    if (filter === "All") return news;
    return news.filter(n => n.category === filter);
  }, [filter]);

  // Separate Featured (First item) from the Rest
  const featured = filteredNews[0];
  const rest = filteredNews.slice(1);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Reveal Animation
      gsap.from(".news-item", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".news-grid",
          start: "top 80%",
        }
      });

    }, container);
    return () => ctx.revert();
  }, [filter]); // Re-run animation when filter changes

  return (
    <section ref={container} className="w-full px-6 md:px-12 pb-32">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
        <div>
          <h1 className="text-display-lg leading-[0.85] tracking-tighter mb-4">
            Field<br/>Notes
          </h1>
          <p className="text-muted text-lg max-w-md">
            Updates, press releases, and insights from the ground up.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-8 md:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-xs uppercase tracking-widest border transition-all duration-300",
                filter === cat 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-white/50 border-white/10 hover:border-white/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="news-grid min-h-[50vh]">
        
        {filteredNews.length === 0 && (
           <div className="py-20 text-center opacity-40">
             <p>No updates found in this category.</p>
           </div>
        )}

        {featured && (
          <div className="flex flex-col gap-16">
            
            {/* 1. FEATURED ARTICLE (Top Hero) */}
            <Link href={`/news/${featured.slug}`} className="news-item group block w-full border-b border-white/10 pb-16">
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  {/* Image Side */}
                  <div className="md:col-span-7 relative h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
                     <Image 
                       src={featured.image}
                       alt={featured.title}
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                     />
                     <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 border border-white/10">
                        <span className="text-[10px] uppercase tracking-widest text-white">Featured</span>
                     </div>
                  </div>

                  {/* Text Side */}
                  <div className="md:col-span-5 flex flex-col justify-center">
                     <div className="flex items-center gap-4 text-xs font-mono text-white/50 mb-6">
                        <span>{featured.date}</span>
                        <span className="w-8 h-px bg-white/20" />
                        <span className="uppercase tracking-widest text-white">{featured.category}</span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:underline decoration-1 underline-offset-8 decoration-white/30">
                        {featured.title}
                     </h2>
                     <p className="text-lg text-white/60 leading-relaxed mb-8">
                        {featured.excerpt}
                     </p>
                     <span className="text-xs uppercase tracking-widest border-b border-white/30 pb-1 w-fit group-hover:border-white transition-colors">
                        Read Story
                     </span>
                  </div>
               </div>
            </Link>

            {/* 2. THE GRID (Older News) */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                 {rest.map((item) => (
                    <Link key={item.id} href={`/news/${item.slug}`} className="news-item group flex flex-col">
                       {/* Image */}
                       <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-900 mb-6 border-b border-white/10">
                          <Image 
                             src={item.image}
                             alt={item.title}
                             fill
                             className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                          />
                       </div>

                       {/* Meta */}
                       <div className="flex justify-between items-center text-xs font-mono text-white/40 mb-4">
                          <span>{item.date}</span>
                          <span className="uppercase tracking-wider border border-white/10 px-2 py-1 rounded">
                             {item.category}
                          </span>
                       </div>

                       {/* Title */}
                       <h3 className="text-xl font-medium leading-snug mb-3 group-hover:text-white/80 transition-colors">
                          {item.title}
                       </h3>
                       
                       {/* Excerpt */}
                       <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                          {item.excerpt}
                       </p>
                    </Link>
                 ))}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}