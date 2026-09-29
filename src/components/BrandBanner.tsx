import React from 'react';

export const BrandBanner: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-r from-[#2A0845] via-[#3B0764] to-[#2A0845] py-5 sm:py-7 shadow-inner border-y border-purple-950/40">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center flex-wrap gap-3 sm:gap-6 font-display font-black text-white text-xl sm:text-2xl md:text-3xl tracking-widest uppercase">
          <span className="drop-shadow-sm">JUGAR</span>
          <span className="text-[#F59E0B] text-2xl leading-none">•</span>
          <span className="drop-shadow-sm">FESTEJAR</span>
          <span className="text-[#F59E0B] text-2xl leading-none">•</span>
          <span className="drop-shadow-sm">SOÑAR</span>
        </div>
        {/* Yellow curved accent bar beneath the ribbon */}
        <div className="w-48 sm:w-72 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-2.5 shadow-xs" />
      </div>
    </div>
  );
};
