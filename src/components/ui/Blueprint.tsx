'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Blueprint({ isActive }: { isActive: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Select elements by layer class
      const gridLines = gsap.utils.toArray('.bp-grid');
      const structWalls = gsap.utils.toArray('.bp-wall-heavy');
      const partitionWalls = gsap.utils.toArray('.bp-wall-light');
      const details = gsap.utils.toArray('.bp-detail');
      const dimensions = gsap.utils.toArray('.bp-dim-line');
      const texts = gsap.utils.toArray('.bp-text, .bp-fill');

      // Helper to prepare line paths for drawing
      const preparePaths = (elements: any[]) => {
        elements.forEach((el) => {
          const length = el.getTotalLength ? el.getTotalLength() : 1000;
          gsap.set(el, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });
        });
      };

      // Prepare all draw-able elements
      preparePaths([...gridLines, ...structWalls, ...partitionWalls, ...details, ...dimensions]);
      // Hide text/fills initially
      gsap.set(texts, { opacity: 0 });

      if (isActive) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Sequence the drawing
        tl.to(gridLines, { strokeDashoffset: 0, duration: 1.5, stagger: 0.1 })
          .to(structWalls, { strokeDashoffset: 0, duration: 2, stagger: 0.1 }, "-=1")
          .to(partitionWalls, { strokeDashoffset: 0, duration: 1.5, stagger: 0.05 }, "-=1.5")
          .to(details, { strokeDashoffset: 0, duration: 2, stagger: 0.05 }, "-=1")
          .to(dimensions, { strokeDashoffset: 0, duration: 1.5 }, "-=1.5")
          // Fade in text and solid fills (like columns) at the end
          .to(texts, { opacity: 1, duration: 1, stagger: 0.1 }, "-=0.5");
      } else {
        // Reset if inactive (optional, depends on desired behavior)
         gsap.to(texts, { opacity: 0, duration: 0.5 });
         preparePaths([...gridLines, ...structWalls, ...partitionWalls, ...details, ...dimensions]);
      }

    }, svgRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    // viewBox adjusted for a portrait floor plan section
    <svg ref={svgRef} viewBox="0 0 600 800" className="w-full h-full p-4 bg-[#f4f4f4] rounded-xl" fill="none" stroke="#1a1a1a">
      
      {/* --- LAYER 1: STRUCTURAL GRID (Dashed, Thin) --- */}
      <g className="bp-grid" strokeWidth="0.5" strokeDasharray="10,5" opacity="0.5">
        {/* Vertical Grids (A, B, C) */}
        <line x1="100" y1="50" x2="100" y2="750" />
        <line x1="300" y1="50" x2="300" y2="750" />
        <line x1="500" y1="50" x2="500" y2="750" />
        {/* Horizontal Grids (1, 2, 3, 4) */}
        <line x1="50" y1="100" x2="550" y2="100" />
        <line x1="50" y1="300" x2="550" y2="300" />
        <line x1="50" y1="500" x2="550" y2="500" />
        <line x1="50" y1="700" x2="550" y2="700" />
      </g>

      {/* --- LAYER 2: HEAVY STRUCTURAL WALLS & COLUMNS (Thick) --- */}
      <g className="bp-wall-heavy" strokeWidth="4" strokeLinecap="square">
        {/* Outer Shell */}
        <path d="M100 100 H500 V700 H350 V600 H250 V700 H100 V100 Z" />
        
        {/* Elevator Core Walls */}
        <path d="M220 300 H380 V500 H220 V300 Z" />
        <line x1="300" y1="300" x2="300" y2="500" /> {/* Core divider */}
      </g>
      {/* Solid Filled Columns (Fade in, don't draw) */}
      <g className="bp-fill" fill="#1a1a1a" stroke="none">
        <rect x="90" y="90" width="20" height="20" />
        <rect x="290" y="90" width="20" height="20" />
        <rect x="490" y="90" width="20" height="20" />
        <rect x="90" y="290" width="20" height="20" />
        <rect x="490" y="290" width="20" height="20" />
        <rect x="90" y="490" width="20" height="20" />
        <rect x="490" y="490" width="20" height="20" />
        <rect x="90" y="690" width="20" height="20" />
        <rect x="490" y="690" width="20" height="20" />
      </g>

      {/* --- LAYER 3: PARTITIONS & FIXTURES (Medium/Thin) --- */}
      <g className="bp-detail" strokeWidth="1.5">
        {/* Stairs (Bottom Left) */}
        <g>
          <rect x="100" y="500" width="100" height="200" strokeWidth="2"/>
          <line x1="100" y1="520" x2="200" y2="520" />
          <line x1="100" y1="540" x2="200" y2="540" />
          <line x1="100" y1="560" x2="200" y2="560" />
          <line x1="100" y1="580" x2="200" y2="580" />
          <line x1="100" y1="600" x2="200" y2="600" />
          {/* Break line and arrow */}
          <path d="M150 620 L140 630 L160 640 L150 650" strokeWidth="1"/>
          <line x1="150" y1="510" x2="150" y2="600" markerEnd="url(#arrow)" />
          <circle cx="150" cy="510" r="3" fill="#1a1a1a" stroke="none" className="bp-fill"/>
        </g>

        {/* Main Entrance - Revolving Door (Bottom Center) */}
        <g transform="translate(300, 700)">
          <circle cx="0" cy="0" r="45" />
          <line x1="0" y1="-45" x2="0" y2="45" />
          <line x1="-45" y1="0" x2="45" y2="0" />
          {/* Door wings */}
          <path d="M-30 -30 L30 30 M-30 30 L30 -30" strokeWidth="2" />
        </g>

        {/* Side Door (Top Right) with swing arc */}
        <g transform="translate(500, 200)">
          <line x1="0" y1="0" x2="-40" y2="0" strokeWidth="3" /> {/* Door Slab */}
          <path d="M-40 0 A 40 40 0 0 1 0 40" strokeDasharray="4,2" strokeWidth="0.5" /> {/* Swing Arc */}
        </g>

        {/* Elevator Cars */}
        <rect x="230" y="310" width="60" height="50" />
        <rect x="310" y="310" width="60" height="50" />
        {/* Counterweights */}
        <rect x="240" y="480" width="40" height="10" fill="#1a1a1a" className="bp-fill" />
        <rect x="320" y="480" width="40" height="10" fill="#1a1a1a" className="bp-fill" />
      </g>

      {/* --- LAYER 4: DIMENSIONS & ANNOTATIONS (Very Thin + Text) --- */}
      <g className="bp-dim-line" strokeWidth="0.75" opacity="0.7">
        {/* Overall Width Dimension */}
        <line x1="100" y1="50" x2="100" y2="30" /> {/* Ticks */}
        <line x1="500" y1="50" x2="500" y2="30" />
        <line x1="100" y1="40" x2="500" y2="40" /> {/* Main line */}
        
        {/* Overall Height Dimension */}
        <line x1="550" y1="100" x2="570" y2="100" />
        <line x1="550" y1="700" x2="570" y2="700" />
        <line x1="560" y1="100" x2="560" y2="700" />
      </g>

      {/* Text Labels (Fade in only) */}
      <g className="bp-text" fill="#1a1a1a" stroke="none" fontFamily="monospace" fontSize="12">
        <text x="300" y="35" textAnchor="middle">12000 MM</text>
        <text x="575" y="400" transform="rotate(90, 575, 400)" textAnchor="middle">18000 MM</text>
        
        <text x="300" y="200" fontSize="16" fontWeight="bold" textAnchor="middle">MAIN LOBBY</text>
        <text x="300" y="220" fontSize="10" textAnchor="middle">FFL ±0.000</text>
        
        <text x="260" y="400" textAnchor="middle" fontSize="10">ELEV. 1</text>
        <text x="340" y="400" textAnchor="middle" fontSize="10">ELEV. 2</text>
        <text x="150" y="550" textAnchor="middle" fontSize="10" transform="rotate(-90, 150, 550)">STAIR 01</text>
      </g>

      {/* Arrowhead definition for stairs */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#1a1a1a" />
        </marker>
      </defs>
    </svg>
  );
}