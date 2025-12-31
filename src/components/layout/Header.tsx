'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { getAllContent } from '@/lib/constants';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import TransitionLink from '../ui/TransitionLink';

const navLinks = [
  { name: "Expertise", href: "/expertise" },
  { name: "Projects", href: "/projects" },
  { name: "The Studio", href: "/studio" },
  { name: "Contact", href: "/contact" },
  { name: "News", href: "/news" }
];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New State
  const pathname = usePathname();

  // 1. Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      // If we scroll more than 50px, toggle the state
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-60 flex justify-between items-start transition-all duration-500 ease-in-out mix-blend-difference",
          // CONDITIONAL STYLING:
          isScrolled 
            ? "py-4 px-6 md:px-12 bg-black/10 backdrop-blur-md border-b border-white/5" // Scrolled State (Glass)
            : "py-8 px-6 md:px-12 bg-transparent" // Top State (Clean)
        )}
      >
        {/* Logo Area */}
        <div className="flex flex-col gap-1 relative z-60">
          <Link href="/" className="text-2xl font-bold tracking-tight uppercase text-white mix-blend-difference">
            BLACKPHILZ CONST.
          </Link>
          <div 
            className={cn(
              "text-xs uppercase tracking-widest opacity-80 max-w-[150px] hidden md:block text-white mix-blend-difference transition-all duration-500",
              isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-80" // Hide address on scroll to clean up UI
            )}
          >
            9, Caxton Close Surulere, <br />
            Lagos, Nigeria
          </div>
        </div>

        {/* Center Navigation - Desktop */}
        <nav 
          className={`hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${isScrolled ? 'top-5' : 'top-8'} ${isSearchOpen || isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          {navLinks.map((link) => (
            <TransitionLink 
              key={link.name} 
              href={link.href} 
              // Added text-shadow to ensure legibility on ANY background
              className="text-sm font-medium tracking-wide text-white hover:opacity-70 transition-opacity drop-shadow-md"
            >
              {link.name}
            </TransitionLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6 relative z-60">
          {/* Search Trigger */}
          <button 
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (isMenuOpen) setIsMenuOpen(false);
            }}
            className="hidden md:flex items-center gap-2 text-sm font-medium group uppercase tracking-widest text-white hover:opacity-70 transition-opacity drop-shadow-md"
          >
            {isSearchOpen ? 'Close' : (
              <>
                <span className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform"/>
                Search
              </>
            )}
          </button>

          {/* Menu Trigger */}
          <button 
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (isSearchOpen) setIsSearchOpen(false);
            }}
            className="flex flex-col gap-1.5 w-8 items-end group hover:opacity-70 transition-opacity relative z-60 drop-shadow-md "
          >
            {isMenuOpen ? (
              // Close Icon
              <div className="relative w-6 h-6 ">
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rotate-45 transform -translate-y-1/2 transition-transform" />
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -rotate-45 transform -translate-y-1/2 transition-transform" />
              </div>
            ) : (
              // Hamburger Icon
              <>
                <span className="w-full h-[2px] bg-white group-hover:w-2/3 transition-all duration-300 shadow-sm"/>
                <span className="w-2/3 h-[2px] bg-white group-hover:w-full transition-all duration-300 shadow-sm"/>
              </>
            )}
          </button>
        </div>
      </header>

      {/* --- OVERLAYS --- */}
      <MenuOverlay isOpen={isMenuOpen} />
      <SearchOverlay isOpen={isSearchOpen} close={() => setIsSearchOpen(false)} />
    </>
  );
}

// --- SUB-COMPONENT: FULLSCREEN MENU ---
function MenuOverlay({ isOpen }: { isOpen: boolean }) {
  const container = useRef(null);
  
  // REVISED LAYOUT: Single column stack with alternating alignments
  // This prevents overlap while keeping the "Zig-Zag" rhythm
  const layoutClasses = [
    "items-start pl-0 md:pl-0",          // 01. Expertise (Left)
    "items-end pr-0 md:pr-12",           // 02. Projects (Right)
    "items-start pl-12 md:pl-32",        // 03. Company (Indented Left)
    "items-end pr-4 md:pr-0"             // 04. Contact (Right)
  ];

  // 1. SETUP
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!isOpen) {
        gsap.set(container.current, { yPercent: -100, autoAlpha: 1 });
        gsap.set(".menu-link-wrapper", { y: 100, opacity: 0 });
        gsap.set(".menu-footer", { opacity: 0, y: 20 });
      }
    }, container);
    return () => ctx.revert();
  }, []);

  // 2. ANIMATION LOOP
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {

        // OPEN
        gsap.to(container.current, {
          yPercent: 0,
          duration: 1.2,
          ease: "expo.inOut",
          overwrite: true
        });

        gsap.fromTo(".menu-link-wrapper", 
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.4, overwrite: true }
        );

        gsap.fromTo(".menu-footer", 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.8, overwrite: true }
        );

      } else {
        // CLOSE
        gsap.to(".menu-link-wrapper", {
          y: -50,
          opacity: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.in",
          overwrite: true
        });

        gsap.to(".menu-footer", { opacity: 0, duration: 0.3, overwrite: true });

        gsap.to(container.current, {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
          delay: 0.2,
          overwrite: true
        });
      }
    }, container);
  }, [isOpen]);

  return (
    <div 
      ref={container} 
      className="fixed inset-0 bg-[#1a1a1a] z-50 text-white flex flex-col overflow-hidden"
    >
      {/* MAIN CONTENT AREA */}
      <div className="grow container mx-auto px-6 md:px-12 flex flex-col justify-center py-20">
        
        {/* The Stacked Zig-Zag */}
        <div className="flex flex-col gap-6 md:gap-4 w-full">
          {navLinks.map((link, idx) => (
            <div 
              key={idx} 
              className={`menu-link-wrapper flex flex-col ${layoutClasses[idx]}`}
            >
              <TransitionLink
                href={link.href}
                className="group relative block w-fit"
              >
                {/* The Technical Index Number */}
                <span className="block text-xs md:text-sm font-mono text-white/30 mb-0 md:absolute md:-left-8 md:top-4 transition-colors group-hover:text-white">
                  0{idx + 1}
                </span>

                {/* THE FIXED SPAN */}
                <span className="block text-[13vw] md:text-[8vw] leading-[0.9] font-bold uppercase tracking-tighter 
                  transition-all duration-500
                  
                  /* 1. Default State: Transparent Text, White Stroke */
                  text-transparent 
                  [-webkit-text-stroke:1px_rgba(255,255,255,0.5)] 
                  md:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.5)]
                  
                  /* 2. Hover State: White Text, No Stroke */
                  group-hover:text-white
                  group-hover:[-webkit-text-stroke:0px]
                ">
                  {link.name}
                </span>
              </TransitionLink>
            </div>
          ))}
        </div>

      </div>

      {/* FOOTER INFO AREA */}
      <div className="menu-footer w-full px-6 md:px-12 pb-12 pt-8 border-t border-white/10 mt-auto">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-xs md:text-sm text-white/50 uppercase tracking-widest">
          
          <div>
            <h4 className="text-white mb-2 font-bold">Say Hello</h4>
            <p>hello@blackphilz.com</p>
          </div>

          <div>
            <h4 className="text-white mb-2 font-bold">HQ</h4>
            <p>Lagos, Nigeria</p>
          </div>

          <div className="col-span-2 md:col-span-2 flex justify-start md:justify-end gap-6 text-white">
            <Link href="https://www.instagram.com/blackphilzconstruction/" className="hover:opacity-50 transition-opacity">Instagram</Link>
            <Link href="https://www.linkedin.com/in/engr-yomi-akinola-202b7979/" className="hover:opacity-50 transition-opacity">LinkedIn</Link>
            <Link href="https://twitter.com/BlackPhilz" className="hover:opacity-50 transition-opacity">Twitter</Link>
          </div>

        </div>
      </div>
      
      {/* NO STYLE JSX NEEDED ANYMORE */}
    </div>
  );
};

// --- SUB-COMPONENT: SEARCH OVERLAY ---
function SearchOverlay({ isOpen, close }: { isOpen: boolean, close: () => void }) {
  const container = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  // Search State
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ projects: any[], team: any[], news: any[] }>({ projects: [], team: [], news: [] });

  // 1. Filter Logic
  useEffect(() => {
    if (!query) {
      setResults({ projects: [], team: [], news: [] });
      return;
    }

    const content = getAllContent();
    const lowerQ = query.toLowerCase();

    const filteredProjects = content.projects.filter(p => 
      p.title.toLowerCase().includes(lowerQ) || 
      p.location.toLowerCase().includes(lowerQ) ||
      p.category.toLowerCase().includes(lowerQ)
    );

    const filteredTeam = content.team.filter(t => 
      t.name.toLowerCase().includes(lowerQ) || 
      t.role.toLowerCase().includes(lowerQ)
    );

    const filteredNews = content.news.filter(n => 
      n.title.toLowerCase().includes(lowerQ) || 
      n.category.toLowerCase().includes(lowerQ)
    );

    setResults({ projects: filteredProjects, team: filteredTeam, news: filteredNews });
  }, [query]);

  // 2. Open/Close Animations
  useEffect(() => {
    if (isOpen) {
      gsap.to(container.current, {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.5,
      });
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      gsap.to(container.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
      });
      // Clear query on close for a fresh start next time
      setTimeout(() => setQuery(""), 500); 
    }
  }, [isOpen]);

  // 3. Handle Navigation
  const handleNavigate = (path: string) => {
    close();
    router.push(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') close();
    // If Enter is pressed and there is at least one result, go to the first one
    if (e.key === 'Enter') {
      if (results.projects.length > 0) {
        handleNavigate(`/projects/${results.projects[0].slug}`);
      }
    }
  };

  const hasResults = results.projects.length > 0 || results.team.length > 0;

  return (
    <div 
      ref={container} 
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-start pt-32 md:pt-48 opacity-0 pointer-events-none transition-colors"
    >
      <div className="w-full max-w-4xl px-6">
        
        {/* INPUT AREA */}
        <label htmlFor="search" className="block text-xs uppercase tracking-widest text-white/50 mb-4">
          Type to search...
        </label>
        <div className="relative border-b border-white/20 mb-12">
          <input
            ref={inputRef}
            type="text"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="PROJECTS, PEOPLE, LOCATIONS..."
            className="w-full bg-transparent text-3xl md:text-6xl font-bold text-white placeholder:text-white/10 py-4 focus:outline-none uppercase tracking-tight"
            autoComplete="off"
          />
        </div>

        {/* RESULTS AREA */}
        <div className="w-full h-[50vh] overflow-y-auto pr-4 scrollbar-hide">
          
          {!query && (
             <p className="text-white/20 text-sm uppercase tracking-widest">
               Start typing to explore the archive.
             </p>
          )}

          {query && !hasResults && (
             <p className="text-white/40 text-lg">
               No results found for "{query}".
             </p>
          )}

          {/* PROJECT RESULTS */}
          {results.projects.length > 0 && (
            <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h4 className="text-xs font-bold uppercase text-white/40 mb-6 tracking-widest">
                Projects ({results.projects.length})
              </h4>
              <div className="flex flex-col gap-4">
                {results.projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleNavigate(`/projects/${project.slug}`)}
                    className="group flex items-center justify-between w-full text-left py-4 border-b border-white/5 hover:border-white/20 transition-colors"
                  >
                    <div className="flex flex-col">
                      <span className="text-2xl md:text-3xl font-medium text-white group-hover:text-white/70 transition-colors">
                        {project.title}
                      </span>
                      <span className="text-sm text-white/40 mt-1 uppercase tracking-wider">
                        {project.location} — {project.category}
                      </span>
                    </div>
                    <span className="text-white/20 group-hover:text-white transition-colors text-2xl">
                      ↗
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TEAM RESULTS */}
          {results.team.length > 0 && (
            <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <h4 className="text-xs font-bold uppercase text-white/40 mb-6 tracking-widest">
                Team ({results.team.length})
              </h4>
              <div className="flex flex-col gap-4">
                {results.team.map((member) => (
                  <button
                    key={member.id}
                    // For now, team links to /company or nowhere, unless you made team pages
                    onClick={() => handleNavigate('/company')} 
                    className="group flex items-center gap-6 w-full text-left py-4 border-b border-white/5 hover:border-white/20 transition-colors"
                  >
                    {/* Tiny Avatar */}
                    <div className="w-12 h-12 bg-white/10 rounded-full overflow-hidden relative">
                       {/* You can add Next/Image here if you want visuals in search */}
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xl font-medium text-white group-hover:text-white/70 transition-colors">
                        {member.name}
                      </span>
                      <span className="text-sm text-white/40 mt-1 uppercase tracking-wider">
                        {member.role}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        <button 
          onClick={close}
          className="absolute bottom-12 left-6 md:left-auto text-xs uppercase tracking-widest text-white/30 hover:text-white transition-colors"
        >
          [ Esc to Close ]
        </button>
      </div>
    </div>
  );
}