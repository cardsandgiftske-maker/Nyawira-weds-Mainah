import React, { useState } from 'react';
import { motion } from 'motion/react';

interface EnvelopeProps {
  onOpen: () => void;
  onStartOpening?: () => void;
  waxSealUrl: string;
  volume?: number;
  onVolumeChange?: (volume: number) => void;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
}

export default function Envelope({
  onOpen,
  onStartOpening,
  waxSealUrl
}: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    if (isClicked) return;
    setIsClicked(true);
    setIsOpening(true);
    
    if (onStartOpening) {
      onStartOpening();
    }

    // After 1.5s, once the splitting animation is complete, transition to the minisite
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  const floralBgUrl = '/src/assets/images/kp_floral_wallpaper_1783875359536.jpg';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isOpening ? { opacity: [1, 1, 0] } : { opacity: 1 }}
      transition={{ duration: 1.5, times: [0, 0.8, 1], ease: "easeInOut" }}
      className="flex items-center justify-center min-h-screen bg-[#1F2725] p-2 sm:p-6 select-none overflow-hidden relative font-serif"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B2828D]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Envelope Phone Canvas Container */}
      <div className="relative w-full max-w-[420px] h-[780px] sm:h-[820px] rounded-[2.5rem] bg-[#825A65] shadow-[0_30px_90px_rgba(0,0,0,0.6)] border border-[#D8C3A5]/30 overflow-hidden">
        
        {/* Full-bleed Damask Floral Texture Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay">
          <img
            src={floralBgUrl}
            alt="Floral Damask Wallpaper Texture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Top V-Flap Component */}
        <motion.div
          animate={isOpening ? { y: '-101%' } : { y: 0 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-10 origin-top bg-gradient-to-b from-[#8E616C] via-[#825A65] to-[#764E59]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 48%, 50% 58%, 0 48%)' }}
        >
          {/* Top Flap Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
            <img
              src={floralBgUrl}
              alt="Floral Flap Texture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Flap Header Monogram */}
          <div className="absolute inset-x-6 top-[22%] -translate-y-1/2 flex flex-col items-center justify-center text-center">
            <span className="text-[#E8DCC4]/80 uppercase tracking-[0.3em] text-[10px] font-sans font-semibold mb-2 block">
              THE WEDDING INVITATION OF
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl text-[#FAF9F6] tracking-widest font-light uppercase drop-shadow">
              NYAWIRA &amp; MAINAH
            </h1>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D8C3A5]/60 to-transparent my-2" />
          </div>
        </motion.div>

        {/* Bottom V-Flap Component */}
        <motion.div
          animate={isOpening ? { y: '101%' } : { y: 0 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-10 origin-bottom bg-gradient-to-t from-[#6D4550] via-[#825A65] to-[#8E616C]"
          style={{ clipPath: 'polygon(0 48%, 50% 58%, 100% 48%, 100% 100%, 0 100%)' }}
        >
          {/* Bottom Flap Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
            <img
              src={floralBgUrl}
              alt="Floral Bottom Flap Texture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* "YOU ARE INVITED" + Flourishes at Bottom */}
          <div className="absolute inset-x-6 bottom-16 flex flex-col items-center justify-center text-center">
            {/* Top Ornamental Scrollwork Flourish */}
            <svg className="w-32 h-6 text-[#D8C3A5] opacity-90 mb-1" viewBox="0 0 120 24" fill="none" stroke="currentColor">
              <path d="M10 12 C30 2, 40 22, 60 12 C80 2, 90 22, 110 12" strokeWidth="1.2" />
              <circle cx="60" cy="12" r="3" fill="currentColor" />
              <path d="M50 12 C53 8, 57 8, 60 12 C63 16, 67 16, 70 12" strokeWidth="1" />
            </svg>

            <p className="text-xs sm:text-sm font-serif text-[#F3E7D3] tracking-[0.35em] uppercase font-semibold drop-shadow-sm">
              YOU ARE INVITED
            </p>

            {/* Bottom Ornamental Scrollwork Flourish */}
            <svg className="w-28 h-5 text-[#D8C3A5] opacity-80 mt-1" viewBox="0 0 120 20" fill="none" stroke="currentColor">
              <path d="M15 10 C35 18, 45 2, 60 10 C75 18, 85 2, 105 10" strokeWidth="1" />
              <circle cx="60" cy="10" r="2" fill="currentColor" />
            </svg>
          </div>
        </motion.div>

        {/* Gold Border Line overlay along the V-Flap Seam */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 0,48 L 50,58 L 100,48"
            fill="none"
            stroke="url(#gold-v-gradient)"
            strokeWidth="0.6"
            opacity="0.85"
          />
          <path
            d="M 0,48.4 L 50,58.4 L 100,48.4"
            fill="none"
            stroke="#D8C3A5"
            strokeWidth="0.2"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="gold-v-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C8B89A" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F5E6D3" stopOpacity="1" />
              <stop offset="100%" stopColor="#C8B89A" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Realistic N | M Gold Wax Seal Button placed right at the center V-point */}
        <motion.div
          onClick={handleOpen}
          className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
          animate={isOpening ? {
            scale: [1, 1.25, 0],
            opacity: [1, 0.8, 0],
          } : {
            scale: [1, 1.04, 1],
          }}
          transition={isOpening ? {
            duration: 0.6,
            ease: "easeInOut",
          } : {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <div className="relative group select-none flex flex-col items-center">
            {/* Soft Ambient Gold Aura Glow */}
            <div className="absolute -inset-3 bg-[#D8C3A5]/30 rounded-full blur-md group-hover:bg-[#D8C3A5]/50 transition-all duration-300" />
            
            {/* Realistic Gold Wax Seal Image */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full relative overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.5)] border-2 border-[#D8C3A5]/60 bg-[#D8C3A5]">
              <img
                src={waxSealUrl}
                alt="Realistic Gold Wax Seal N | M"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full p-0.5"
              />
            </div>

            {/* Tap indicator pulse ring below */}
            {!isClicked && (
              <span className="mt-2 text-[9px] font-sans text-[#E8DCC4] tracking-[0.25em] uppercase font-bold animate-pulse drop-shadow">
                Tap seal to open
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
