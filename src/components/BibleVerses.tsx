import React from 'react';
import { BookOpen, Heart, Sparkles } from 'lucide-react';

export default function BibleVerses() {
  const verses = [
    {
      reference: 'Song of Solomon 3:4',
      text: 'I have found the one whom my soul loves.',
      theme: 'Love & Devotion',
    },
    {
      reference: '1 Corinthians 13:4-8',
      text: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud... Love never fails.',
      theme: 'Enduring Love',
    },
    {
      reference: 'Ecclesiastes 4:9-12',
      text: 'Two are better than one, because they have a good return for their labor... A cord of three strands is not quickly broken.',
      theme: 'Unity & Strength',
    },
    {
      reference: 'Colossians 3:14',
      text: 'And over all these virtues put on love, which binds them all together in perfect unity.',
      theme: 'Covenant Virtue',
    },
  ];

  return (
    <div className="bg-[#FAF9F6] border border-[#ecc19c]/40 rounded-3xl p-6 md:p-10 shadow-2xl text-stone-800 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#738A6E] block mb-1">
          Words of Wisdom &amp; Blessing
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#0b192c] font-light tracking-wide flex items-center justify-center gap-2">
          <BookOpen className="w-6 h-6 text-[#738A6E]" /> Holy Scriptures
        </h3>
        <p className="font-cursive text-2xl text-[#738A6E] mt-1">
          Guiding principles for our marriage covenant
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {verses.map((v, i) => (
          <div
            key={i}
            className="bg-white border border-[#ecc19c]/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#738A6E] bg-[#738A6E]/10 px-2.5 py-1 rounded-full">
                  {v.theme}
                </span>
                <Heart className="w-4 h-4 text-[#738A6E]/40 group-hover:text-[#738A6E] transition-colors" />
              </div>
              <p className="font-serif italic text-base text-stone-700 leading-relaxed">
                "{v.text}"
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-end">
              <span className="text-xs font-sans font-semibold text-[#0b192c] tracking-wider uppercase">
                — {v.reference}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
