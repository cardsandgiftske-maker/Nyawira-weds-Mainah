import React from 'react';
import { Shirt, Sparkles } from 'lucide-react';
import { COLOR_SWATCHES, WEDDING_DETAILS } from '../data';

export default function DressCode() {
  return (
    <section className="relative py-20 bg-[#FCFAF7] text-stone-850 border-t border-stone-200/60" id="dress-code-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-sage-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sage-700 text-xs font-semibold tracking-widest uppercase font-sans">The Attire &amp; Palette</span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-stone-900 mt-2 mb-4">Theme Colours &amp; Dress Code</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-sage-600/40 to-transparent mx-auto relative mb-6" />
          <p className="text-stone-700 text-base md:text-lg max-w-2xl mx-auto italic font-serif leading-relaxed">
            We kindly invite our dear family and friends to celebrate with us in elegant attire styled around our wedding theme colors: <strong className="not-italic text-sage-800 font-sans">Sage Green &amp; Beige</strong>.
          </p>
        </div>

        {/* Color Palette Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {COLOR_SWATCHES.map((swatch, idx) => (
            <div
              key={`color-swatch-${idx}`}
              className="bg-white border border-stone-200/80 rounded-2xl p-4 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Color Pill Circle */}
              <div
                className="w-16 h-16 rounded-full mb-3 shadow-inner border border-black/10 flex items-center justify-center"
                style={{ backgroundColor: swatch.hex }}
              >
                <Sparkles className="w-4 h-4 text-white/70" />
              </div>
              <h3 className="font-serif font-medium text-stone-900 text-base">{swatch.name}</h3>
              <span className="text-[10px] font-mono font-semibold text-stone-400 mt-0.5">{swatch.hex}</span>
              <p className="text-xs text-stone-600 font-sans mt-2 leading-tight">{swatch.description}</p>
            </div>
          ))}
        </div>

        {/* Guest Attire Advice Banner */}
        <div className="bg-sage-50/70 border border-sage-200 rounded-2xl p-6 text-center max-w-2xl mx-auto shadow-xs">
          <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center mx-auto mb-3">
            <Shirt className="w-5 h-5" />
          </div>
          <h4 className="font-serif text-lg font-medium text-sage-900 mb-1">Guest Attire Guidance</h4>
          <p className="text-stone-700 text-sm font-sans leading-relaxed">
            <strong>Formal / Elegant Smart Wear</strong> in shades of Sage Green, Olive, Warm Beige, Linen, Cream, or Champagne. We look forward to creating beautiful, colorful memories with you!
          </p>
        </div>
      </div>
    </section>
  );
}

