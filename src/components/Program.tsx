import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, CheckCircle, Award, Compass, Music, MessageCircle, Gift, Cake, LogOut } from 'lucide-react';
import { PROGRAM_ITEMS } from '../data';

export default function Program() {
  const [activeTab, setActiveTab] = useState<'all' | 'church' | 'reception'>('all');

  const filteredItems = PROGRAM_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'church') return item.isChurch;
    return !item.isChurch;
  });

  const getIconForTitle = (title: string, isChurch: boolean) => {
    const t = title.toLowerCase();
    if (t.includes('matrimony') || t.includes('mass') || t.includes('church')) return <Award className="w-4 h-4 text-sage-800" />;
    if (t.includes('photo') || t.includes('shoot')) return <Compass className="w-4 h-4 text-sage-800" />;
    if (t.includes('arrival')) return <Clock className="w-4 h-4 text-sage-800" />;
    if (t.includes('welcome') || t.includes('lunch') || t.includes('feast')) return <CheckCircle className="w-4 h-4 text-sage-800" />;
    if (t.includes('entrance') || t.includes('dancing')) return <Music className="w-4 h-4 text-sage-800" />;
    if (t.includes('speech') || t.includes('presentation')) return <MessageCircle className="w-4 h-4 text-sage-800" />;
    if (t.includes('cake')) return <Cake className="w-4 h-4 text-sage-800" />;
    if (t.includes('thanks') || t.includes('bouquet') || t.includes('vote')) return <Gift className="w-4 h-4 text-sage-800" />;
    return <LogOut className="w-4 h-4 text-sage-800" />;
  };

  return (
    <section className="relative py-24 bg-[#FAF7F2] text-stone-800 border-t border-stone-200/60" id="program-section">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-sage-800 text-xs font-semibold tracking-widest uppercase font-sans">The Wedding Schedule</span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-stone-900 mt-2 mb-4">Wedding Programme</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-sage-600/30 to-transparent mx-auto" />
          <p className="text-stone-600 text-sm md:text-base mt-4 max-w-xl mx-auto italic font-serif">
            “Two are better than one, because they have a good return for their labor.” <br />
            <span className="text-sage-800 uppercase font-sans text-xs tracking-wider font-semibold not-italic block mt-1">— Ecclesiastes 4:9</span>
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-stone-200 p-1.5 rounded-full shadow-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 text-xs md:text-sm font-sans font-medium uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-sage-700 text-white font-semibold shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Full Timeline
            </button>
            <button
              onClick={() => setActiveTab('church')}
              className={`px-5 py-2 text-xs md:text-sm font-sans font-medium uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeTab === 'church' ? 'bg-sage-700 text-white font-semibold shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Church
            </button>
            <button
              onClick={() => setActiveTab('reception')}
              className={`px-5 py-2 text-xs md:text-sm font-sans font-medium uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeTab === 'reception' ? 'bg-sage-700 text-white font-semibold shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Reception
            </button>
          </div>
        </div>

        {/* Program Timeline */}
        <div className="relative border-l-2 border-sage-200/80 ml-5 md:ml-10 pl-6 md:pl-10 space-y-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`program-item-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="relative"
            >
              {/* Timeline Node Centered Exactly on the Vertical Line */}
              <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-9 h-9 rounded-full bg-white border-2 border-sage-600 flex items-center justify-center shadow-xs z-10">
                {getIconForTitle(item.title, item.isChurch)}
              </div>

              {/* Program Detail Card */}
              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 md:p-6 hover:border-sage-300 transition-all shadow-xs hover:shadow-md group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-stone-100 mb-3">
                  {/* Time Badge - Always visible, clean, and never hidden by icons */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-sage-50 text-sage-900 border border-sage-200/80 px-3 py-1 rounded-full text-xs font-sans font-bold tracking-wide">
                      <Clock className="w-3.5 h-3.5 text-sage-700" />
                      <span>{item.time}</span>
                    </span>
                    <span className="text-[11px] text-stone-500 font-sans font-medium">({item.duration})</span>
                  </div>

                  {/* Category Pill */}
                  <span className={`text-[9px] uppercase tracking-wider font-sans font-bold px-2.5 py-1 rounded-full self-start sm:self-auto ${
                    item.isChurch 
                      ? 'bg-amber-50 text-amber-900 border border-amber-200/80' 
                      : 'bg-sage-100/70 text-sage-900 border border-sage-200'
                  }`}>
                    {item.isChurch ? 'Church Ceremony' : 'Reception'}
                  </span>
                </div>

                {/* Title and Description */}
                <h4 className="text-lg md:text-xl font-serif font-medium text-stone-900 group-hover:text-sage-800 transition-colors">
                  {item.title}
                </h4>

                {item.description && (
                  <p className="text-stone-600 text-xs md:text-sm mt-1.5 leading-relaxed font-sans">
                    {item.description}
                  </p>
                )}

                {/* Bullets if available */}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-600 font-sans">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Card */}
        <div className="mt-14 text-center bg-white border border-stone-200 p-6 rounded-2xl max-w-xl mx-auto shadow-xs">
          <p className="font-serif text-sage-900 italic text-base">“We look forward to celebrating this joyous occasion with you, as we say ‘I Do’”</p>
        </div>
      </div>
    </section>
  );
}

