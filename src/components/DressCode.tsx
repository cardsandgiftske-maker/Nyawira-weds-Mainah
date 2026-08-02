import React from 'react';

export default function DressCode() {
  return (
    <section className="relative py-20 bg-[#FCFAF7] text-stone-850 border-t border-stone-200/60" id="dress-code-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-sage-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header - Clean Attire & Dress Code announcement */}
        <div className="text-center">
          <span className="text-[#8C3B3B] text-[11px] font-bold tracking-[0.2em] uppercase font-sans block mb-2">
            THE ATTIRE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-stone-900 tracking-tight">
            Wedding Dress Code
          </h2>
          <div className="w-16 h-[1px] bg-sage-600/40 mx-auto my-5" />
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto italic font-serif leading-relaxed">
            Happy.Elegant. Whatever makes you glow. FYI: We love Sage green and Beige
          </p>
        </div>
      </div>
    </section>
  );
}


