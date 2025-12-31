'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactContent() {
  const container = useRef(null);
  const [time, setTime] = useState("");

  // 1. LIVE LAGOS CLOCK
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Force Lagos TimeZone (GMT+1)
      const options = { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', hour12: true };
      setTime(now.toLocaleTimeString('en-US', options as any));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. ENTRY ANIMATIONS
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Title Stagger
      gsap.from(".contact-title-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });

      // Form Elements Stagger
      gsap.from(".form-item", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out"
      });

      // Info Column Fade
      gsap.from(".info-col", {
        x: -20,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power2.out"
      });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full px-6 md:px-12">
      
      {/* --- HEADER --- */}
      <div className="mb-24 border-b border-black/10 pb-12">
        <div className="overflow-hidden">
          <h1 className="contact-title-line text-display-lg leading-[0.85] tracking-tighter text-black mb-4">
            Start a<br/>
            Conversation.
          </h1>
        </div>
        <div className="overflow-hidden">
           <p className="contact-title-line text-lg text-black/60 max-w-lg">
             We engage with clients who value precision. Tell us about your vision.
           </p>
        </div>
      </div>+234 800 123 4567

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        
        {/* --- LEFT: INFO COLUMN --- */}
        <div className="info-col md:col-span-4 flex flex-col gap-12">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-2 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs uppercase tracking-widest text-black/60">
              Accepting Projects Q3 2025
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">HQ / Lagos</h4>
              <p className="text-xl text-black">9, Caxton Close Surulere,<br/>Lagos, Nigeria</p>
              <p className="text-sm text-black/40 mt-2 font-mono">{time} (WAT)</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Inquiries</h4>
              <a href="mailto:hello@blackphilz.com" className="block text-xl text-black hover:text-black/60 transition-colors">hello@blackphilz.com</a>
              <a href="tel:+2348001234567" className="block text-xl text-black hover:text-black/60 transition-colors">+234-8165-375-180</a>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Departments</h4>
              <ul className="space-y-1 text-black/70">
                <li><span className="font-bold">Careers:</span> careers@blackphilz.com</li>
                <li><span className="font-bold">Press:</span> media@blackphilz.com</li>
                <li><span className="font-bold">Vendors:</span> supply@blackphilz.com</li>
              </ul>
            </div>
          </div>
        </div>


        {/* --- RIGHT: INTAKE FORM --- */}
        <div className="md:col-span-8 md:col-start-6">
          <form className="flex flex-col gap-12">
            
            {/* Name & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-item group">
                <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2 group-focus-within:text-black transition-colors">
                  Your Name
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-black/20 py-4 text-xl text-black placeholder:text-black/10 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="form-item group">
                <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2 group-focus-within:text-black transition-colors">
                  Organization
                </label>
                <input 
                  type="text" 
                  placeholder="Company Ltd."
                  className="w-full bg-transparent border-b border-black/20 py-4 text-xl text-black placeholder:text-black/10 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-item group">
                <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2 group-focus-within:text-black transition-colors">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-black/20 py-4 text-xl text-black placeholder:text-black/10 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="form-item group">
                <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2 group-focus-within:text-black transition-colors">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+234..."
                  className="w-full bg-transparent border-b border-black/20 py-4 text-xl text-black placeholder:text-black/10 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="form-item group">
              <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-4 group-focus-within:text-black transition-colors">
                Project Type
              </label>
              <div className="flex flex-wrap gap-4">
                {['Commercial', 'Residential', 'Industrial', 'Renovation', 'Consultancy'].map((type) => (
                  <label key={type} className="">
                    <input type="radio" name="projectType" value={type} className="peer sr-only" />
                    <span className="px-6 py-2 border border-black/20 rounded-full text-sm uppercase tracking-wider text-black/60 transition-all peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black/50">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget Range */}
             <div className="form-item group">
              <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-4 group-focus-within:text-black transition-colors">
                Estimated Budget (NGN)
              </label>
              <div className="flex flex-wrap gap-4">
                {['< 50M', '50M - 200M', '200M - 1B', '1B +'].map((budget) => (
                  <label key={budget} className="">
                    <input type="radio" name="budget" value={budget} className="peer sr-only" />
                    <span className="px-6 py-2 border border-black/20 rounded-full text-sm uppercase tracking-wider text-black/60 transition-all peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black/50">
                      {budget}
                    </span>
                  </label>
                ))}
              </div>
            </div>


            {/* Message */}
            <div className="form-item group">
              <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2 group-focus-within:text-black transition-colors">
                Project Vision / Details
              </label>
              <textarea 
                rows={4}
                placeholder="Tell us about the site, the timeline, and the goals..."
                className="w-full bg-transparent border-b border-black/20 py-4 text-xl text-black placeholder:text-black/10 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="form-item pt-8">
              <button className="group relative px-8 py-5 bg-black text-white w-full md:w-auto overflow-hidden transition-all hover:pr-12">
                <span className="relative z-10 text-sm font-bold uppercase tracking-widest">Submit Proposal</span>
                <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* --- BOTTOM MAP VISUAL (Static Concept) --- */}
      <div className="mt-32 w-full h-[400px] relative bg-gray-900 overflow-hidden grayscale hover:grayscale-0 transition-colors rounded-xl">
         {/* Placeholder for Map Image - Using a dark architectural texture or map screenshot */}
         {/* <Image 
           src="/images/map-placeholder.jpg" // You will need a dark map image here
           alt="Lagos Location Map"
           fill
           className="object-cover opacity-50 hover:opacity-100 transition-opacity duration-700"
        /> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15856.164269728148!2d3.3602137!3d6.5164863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c48354d6d79%3A0x9d32ab655901b8a9!2sBlackPhilz%20Construction!5e0!3m2!1sen!2sng!4v1767095380054!5m2!1sen!2sng" className="object-cover w-full h-full opacity-50 hover:opacity-100 transition-opacity duration-700" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         
         {/* The Marker */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.5)]" />
            <div className="bg-black text-white px-4 py-2 text-[10px] uppercase tracking-widest">
               BlackPhilz HQ
            </div>
         </div>
      </div>

    </section>
  );
}