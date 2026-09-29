import React, { useState } from 'react';
import { Smile, Gift, Users } from 'lucide-react';
import photo01 from '@/assets/images/general/ellugar_01.webp';
import photo02 from '@/assets/images/general/ellugar_02.webp';
import photo03 from '@/assets/images/general/ellugar_03.webp';

// Festive SVG Star Component for the sparkle animation requested by user
const FestiveStar: React.FC<{
  className?: string;
  fill?: string;
  size?: number;
}> = ({ className = '', fill = '#FACC15', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    className={`drop-shadow-md ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.7 8.3L23 9.4L16.8 14.8L18.6 23.2L12 18.8L5.4 23.2L7.2 14.8L1 9.4L9.3 8.3L12 0Z" />
  </svg>
);

const FourPointStar: React.FC<{
  className?: string;
  fill?: string;
  size?: number;
}> = ({ className = '', fill = '#FFFFFF', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    className={`drop-shadow-md ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
  </svg>
);

export const ProposalSection: React.FC = () => {
  const [activeTouchIndex, setActiveTouchIndex] = useState<number | null>(null);

  const pillars = [
    {
      title: 'Celebrar',
      badgeColor: 'bg-[#EF4444]',
      badgeText: 'text-[#EF4444]',
      icon: Gift,
      description: 'Cumples inolvidables para disfrutar en familia con la mejor energía y ambientación.',
      image: photo01,
      tag: '¡Festejo Mágico!',
      tagBg: 'bg-red-500',
      gradientOverlay: 'from-red-950/90 via-red-900/75 to-red-800/60',
      cardBorder: 'hover:border-red-400',
    },
    {
      title: 'Jugar',
      badgeColor: 'bg-[#2563EB]',
      badgeText: 'text-[#2563EB]',
      icon: Smile,
      description: 'Diversión asegurada pensada para los chicos... y también para que jueguen los grandes.',
      image: photo02,
      tag: '¡Pelotero & Juegos!',
      tagBg: 'bg-blue-500',
      gradientOverlay: 'from-blue-950/90 via-blue-900/75 to-blue-800/60',
      cardBorder: 'hover:border-blue-400',
    },
    {
      title: 'Compartir',
      badgeColor: 'bg-[#10B981]',
      badgeText: 'text-[#10B981]',
      icon: Users,
      description: 'Opciones prácticas y cómodas para que organizar tu evento sea fácil y sin estrés.',
      image: photo03,
      tag: '¡Momentos Únicos!',
      tagBg: 'bg-emerald-500',
      gradientOverlay: 'from-emerald-950/90 via-emerald-900/75 to-emerald-800/60',
      cardBorder: 'hover:border-emerald-400',
    },
  ];

  return (
    <section id="propuesta" className="py-20 sm:py-28 bg-[#EF4444] text-white relative overflow-hidden">
      {/* Subtle festive background lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EF4444] bg-white font-display font-extrabold text-sm sm:text-base tracking-wider uppercase px-6 py-2 rounded-full inline-block mb-4 shadow-lg">
            Nuestra Propuesta
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-5 drop-shadow-md">
            Organizar tu festejo nunca fue tan simple
          </h2>
          <p className="text-xl sm:text-2xl text-yellow-200 font-display font-bold leading-relaxed drop-shadow-sm">
            “Vos elegís la fecha, nosotros armamos la fiesta y los chicos se encargan de disfrutar.”
          </p>
        </div>

        {/* 3 Pillars Cards with hover photo background & animated stars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isTouchActive = activeTouchIndex === idx;

            return (
              <div
                key={pillar.title}
                tabIndex={0}
                onClick={() => setActiveTouchIndex(isTouchActive ? null : idx)}
                className={`group relative rounded-3xl p-8 sm:p-10 shadow-2xl border-4 border-white/80 ${pillar.cardBorder} transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] overflow-hidden cursor-pointer bg-white text-gray-900 select-none ${
                  isTouchActive ? '-translate-y-2 scale-[1.02]' : ''
                }`}
              >
                {/* 1. Background Photo revealed on hover */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-600 ease-out pointer-events-none ${
                    isTouchActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Rich Gradient Overlay for high text readability */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${pillar.gradientOverlay}`} />
                </div>

                {/* 2. Playful Animated Stars / Sparkles Layer on Hover */}
                <div
                  className={`absolute inset-0 z-10 pointer-events-none transition-all duration-500 ${
                    isTouchActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {/* Big Gold Star Top Right */}
                  <div className="absolute top-4 right-4 animate-bounce">
                    <FestiveStar fill="#FACC15" size={32} className="transform rotate-12" />
                  </div>

                  {/* Cyan Star Top Left */}
                  <div className="absolute top-12 left-6 animate-pulse">
                    <FourPointStar fill="#38BDF8" size={22} className="transform -rotate-12" />
                  </div>

                  {/* Pink Star Bottom Right */}
                  <div className="absolute bottom-8 right-6 animate-ping opacity-75">
                    <FestiveStar fill="#F472B6" size={24} />
                  </div>

                  {/* White Sparkle Center */}
                  <div className="absolute top-1/2 right-8 animate-spin" style={{ animationDuration: '8s' }}>
                    <FourPointStar fill="#FEF08A" size={18} />
                  </div>

                  {/* Green / Orange Accent Bottom Left */}
                  <div className="absolute bottom-4 left-24 animate-pulse">
                    <FourPointStar fill="#FB923C" size={16} />
                  </div>
                </div>

                {/* 3. Card Content Layer */}
                <div className="relative z-20 flex flex-col h-full">
                  {/* Icon & Hover Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${pillar.badgeColor} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Tag badge that pops on hover */}
                    <span
                      className={`px-3.5 py-1.5 rounded-full text-xs font-display font-black text-white ${pillar.tagBg} shadow-md transition-all duration-400 transform ${
                        isTouchActive
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                      }`}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display font-black text-3xl sm:text-4xl mb-3 transition-colors duration-300 ${
                      isTouchActive
                        ? 'text-yellow-300 drop-shadow-md'
                        : `${pillar.badgeText} group-hover:text-yellow-300 group-hover:drop-shadow-md`
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-medium leading-relaxed text-base sm:text-lg transition-colors duration-300 ${
                      isTouchActive
                        ? 'text-white drop-shadow-md font-semibold'
                        : 'text-gray-700 group-hover:text-white group-hover:drop-shadow-md'
                    }`}
                  >
                    {pillar.description}
                  </p>

                  {/* Subtext indicating touch / interactive delight */}
                  <div className="mt-auto pt-6 flex items-center gap-1.5 text-xs font-bold text-gray-400 group-hover:text-yellow-200 transition-colors">
                    <span>✨ Tocá o pasá el mouse para descubrir</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
