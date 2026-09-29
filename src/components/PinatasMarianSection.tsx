import React from 'react';
import { Sparkles, Gift, Heart, Palette, CheckCircle2 } from 'lucide-react';

export const PinatasMarianSection: React.FC = () => {
  const features = [
    {
      icon: Palette,
      color: 'bg-[#F43F5E]',
      title: 'Diseños 100% Personalizados',
      emoji: '🌈',
      description:
        'Desde Stitch, Toy Story y princesas, hasta dinosaurios, mariposas y números 3D con el nombre de tu peque.',
      badge: 'Stitch • Toy Story • Princesas • 3D',
    },
    {
      icon: Heart,
      color: 'bg-[#8B5CF6]',
      title: 'Temáticas para Todos los Gustos',
      emoji: '🎂',
      description:
        '¡La idea que tu hijo o hija tenga en mente, Marian la hace realidad con pura creatividad y amor!',
      badge: 'Cualquier personaje o idea',
    },
    {
      icon: Gift,
      color: 'bg-[#10B981]',
      title: 'Listas para Llenar',
      emoji: '🎁',
      description:
        'Súper resistentes, con amplia capacidad y preparadas para cargarse con los mejores caramelos y sorpresitas.',
      badge: 'Máxima resistencia & capacidad',
    },
  ];

  return (
    <section id="pinatas" className="py-14 sm:py-20 bg-gradient-to-br from-[#0D9488] via-[#06B6D4] to-[#0284C7] text-white relative overflow-hidden">
      {/* Decorative circles and playful shapes matching the flyer */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Alliance Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center bg-[#F43F5E] text-white font-display font-black text-xs sm:text-sm tracking-wider uppercase px-5 py-1.5 rounded-full shadow-lg mb-4 animate-bounce">
            <span>¡Súper Alianza Exclusiva!</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-3 drop-shadow-md leading-tight">
            Elegí tu <span className="text-yellow-300 underline decoration-pink-400 decoration-wavy">Piñata Temática</span>
          </h2>

          <p className="text-base sm:text-xl text-cyan-50 font-display font-bold leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            ¡Tu festejo en <span className="text-yellow-300">Legoland</span> ahora viene con una sorpresa increíble! Nos unimos a <span className="text-pink-200">Piñatas Marian</span> para que la fiesta de tu peque sea 100% personalizada, mágica e inolvidable.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-white/90 text-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-900/30 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-13 h-13 rounded-2xl ${feat.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl">{feat.emoji}</span>
                </div>

                <h3 className="font-display font-black text-2xl text-gray-900 mb-2 leading-snug">
                  {feat.title}
                </h3>

                <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed mb-5 flex-1">
                  {feat.description}
                </p>

                <div className="pt-3 border-t-2 border-gray-100 flex items-center gap-2 text-xs font-extrabold text-[#0D9488]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>{feat.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Piñatas Marian Alliance Summary Card (Without WhatsApp and Instagram as requested) */}
        <div className="bg-white/15 backdrop-blur-md border-2 border-white/40 rounded-3xl p-6 sm:p-8 shadow-xl text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-950 font-display font-black text-xs uppercase px-4 py-1.5 rounded-full mb-2 shadow-xs">
            🎁 Piñatas Marian • Santa Fe
          </div>
          <h4 className="font-display font-black text-xl sm:text-2xl text-white mb-2">
            La piñata soñada para tu cumple en LEGOLAND
          </h4>
          <p className="text-cyan-50 text-sm sm:text-base font-medium">
            Sumá una piñata artesanal temática totalmente a medida con tu festejo para que la fiesta de tu peque sea completa, divertida y única.
          </p>
        </div>
      </div>
    </section>
  );
};
