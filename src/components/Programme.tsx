import React from 'react';
import { Clock, Church, PartyPopper, Camera, Sparkles, Info } from 'lucide-react';

export default function Programme() {
  const scheduleItems = [
    {
      time: '10:00 AM',
      title: 'Holy Matrimony Service',
      location: 'ACK Emmanuel Church Kikuyu',
      description: 'Exchange of vows, worship, and blessing of the marriage covenant.',
      icon: Church,
      highlight: true,
    },
    {
      time: '12:00 PM',
      title: 'Photoshoot & Procession',
      location: 'Church Grounds to Leilani Gardens',
      description: 'Family photography session and movement to the reception venue.',
      icon: Camera,
      highlight: false,
    },
    {
      time: '01:00 PM',
      title: 'Wedding Reception & Cake Celebration',
      location: 'Leilani Gardens Kikuyu',
      description: 'Grand entrance, feast, speeches, and cutting the wedding cake!',
      icon: PartyPopper,
      highlight: true,
    },
  ];

  return (
    <div className="bg-[#FAF9F6] border border-[#ecc19c]/40 rounded-3xl p-6 md:p-10 shadow-2xl text-stone-800 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#738A6E] block mb-1">
          Order of the Day
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#0b192c] font-light tracking-wide">
          Wedding Programme
        </h3>
        <p className="font-cursive text-2xl text-[#738A6E] mt-1">
          Ceremony at 10:00 AM • Reception at 1:00 PM
        </p>

        {/* Generic Update Notice as requested */}
        <div className="mt-4 inline-flex items-center gap-2 bg-[#738A6E]/10 border border-[#738A6E]/30 text-[#42523E] px-4 py-2 rounded-full text-xs font-sans">
          <Info className="w-4 h-4 shrink-0 text-[#738A6E]" />
          <span>Detailed schedule will be updated. Expected reception time is <strong>1:00 PM</strong>.</span>
        </div>
      </div>

      <div className="relative border-l-2 border-[#738A6E]/30 ml-4 md:ml-32 space-y-8 my-8 font-sans">
        {scheduleItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="relative pl-6 md:pl-8 group">
              {/* Timeline Marker Node */}
              <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                item.highlight
                  ? 'border-[#738A6E] bg-[#738A6E] text-white shadow-md'
                  : 'border-[#738A6E]/40 bg-white text-[#738A6E]'
              }`}>
                <Icon className="w-4 h-4" />
              </div>

              {/* Time Label on left side for desktop */}
              <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right">
                <span className="text-xs font-bold text-[#0b192c] tracking-wider uppercase block">
                  {item.time}
                </span>
              </div>

              {/* Card item */}
              <div className="bg-white border border-[#ecc19c]/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="md:hidden text-xs font-bold text-[#738A6E] tracking-wider uppercase">
                    {item.time}
                  </span>
                  <h4 className="font-serif text-xl font-semibold text-[#0b192c]">
                    {item.title}
                  </h4>
                  <span className="text-[11px] font-medium text-[#738A6E] bg-[#738A6E]/10 px-2.5 py-0.5 rounded-full w-fit">
                    {item.location}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center border-t border-[#ecc19c]/30 pt-6 mt-6">
        <p className="text-xs text-stone-500 italic">
          "Guess what? We have found a reason to have cake! Come join us!"
        </p>
      </div>
    </div>
  );
}
