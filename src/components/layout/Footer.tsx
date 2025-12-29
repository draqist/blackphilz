'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* 1. THE BIG CTA */}
      <div className="flex flex-col items-start mb-32">
        <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-8">
          [06] Contact
        </span>
        <h2 className="text-display-lg font-bold leading-[0.85] tracking-tighter mb-12">
          Architecture with<br/>
          Intention. <span className="text-white/50">Start here.</span>
        </h2>
        
        <button className="group relative px-8 py-4 rounded-full bg-white text-black overflow-hidden flex items-center gap-4 hover:pr-12 transition-all duration-300">
          <span className="relative z-10 text-sm font-bold uppercase tracking-widest">Start a Conversation</span>
          <span className="relative z-10 w-2 h-2 rounded-full bg-black group-hover:scale-[10] transition-transform duration-500 ease-in-out" />
          {/* Arrow Icon appears on hover */}
          <span className="absolute right-4 opacity-0 group-hover:opacity-100 z-20 text-white transition-opacity duration-300">→</span>
        </button>
      </div>

      <div className="w-full h-[1px] bg-white/10 mb-12" />

      {/* 2. THE GRID INFO */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-white/60">
        
        {/* Column 1: Brand */}
        <div className="col-span-1">
          <h3 className="text-white text-lg font-bold mb-4">APEX CONST.</h3>
          <p className="max-w-xs">
            Thoughtful architecture, shaped by stillness. We build presence, not just places.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white uppercase tracking-widest text-xs mb-4">Explore</h4>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/studio" className="hover:text-white transition-colors">The Studio</Link>
          <Link href="/news" className="hover:text-white transition-colors">News</Link>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white uppercase tracking-widest text-xs mb-4">Visit</h4>
          <p>142 Industrial Ave.</p>
          <p>Lagos, Nigeria</p>
          <br/>
          <p className="text-white">hello@apexcons.ng</p>
          <p>+234 800 123 4567</p>
        </div>

        {/* Column 4: Socials */}
        <div className="flex flex-col gap-2">
           <h4 className="text-white uppercase tracking-widest text-xs mb-4">Follow</h4>
           <div className="flex gap-4">
             <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">IG</a>
             <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">LN</a>
             <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">TW</a>
           </div>
        </div>

      </div>

      {/* 3. COPYRIGHT */}
      <div className="flex justify-between items-end mt-24 text-[10px] uppercase tracking-widest text-white/30">
        <span>© 2025 Apex Construction.</span>
        <span>Privacy Policy / Terms</span>
      </div>

      {/* Big Watermark Text at bottom */}
      <div className="absolute bottom-[-5vw] left-0 w-full text-center pointer-events-none opacity-5">
        <h1 className="text-[20vw] font-bold leading-none text-white">APEX</h1>
      </div>

    </footer>
  );
}