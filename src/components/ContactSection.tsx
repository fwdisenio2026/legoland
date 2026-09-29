import React from 'react';
import { MapPin, MessageCircle, Instagram, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 sm:py-28 bg-[#7C3AED] text-white relative overflow-hidden">
      {/* Decorative festive blur accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#7C3AED] bg-white font-display font-extrabold text-sm sm:text-base tracking-wider uppercase px-5 py-1.5 rounded-full inline-block mb-4 shadow-md">
            Ubicación y Contacto
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4 drop-shadow-sm">
            Encontranos en Santa Fe
          </h2>
          <p className="text-purple-100 text-lg sm:text-xl font-medium">
            Av. Facundo Zuviría 5951 • Festejos inolvidables cerca tuyo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white text-gray-900 rounded-3xl p-8 sm:p-10 shadow-2xl border-4 border-white/80 space-y-7 h-full flex flex-col justify-between">
              <div>
                {/* Address */}
                <div className="flex items-start gap-4 mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-7 h-7 text-[#EF4444]" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-gray-900">
                      Dirección
                    </h3>
                    <p className="text-gray-800 font-bold text-base mt-0.5">
                      Av. Facundo Zuviría 5951
                    </p>
                    <p className="text-gray-500 text-sm font-medium">
                      Santa Fe, Provincia de Santa Fe
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-7 h-7 text-[#10B981]" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-gray-900">
                      WhatsApp Oficial
                    </h3>
                    <p className="text-gray-900 font-black text-2xl mt-0.5">
                      3424078054
                    </p>
                    <p className="text-gray-500 text-xs font-semibold mt-0.5">
                      Consultas y reservas de fechas
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0 shadow-xs">
                    <Instagram className="w-7 h-7 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-gray-900">
                      Instagram
                    </h3>
                    <p className="text-gray-800 font-bold text-base mt-0.5">
                      @pelotero.legoland.santafe
                    </p>
                    <p className="text-gray-500 text-xs font-semibold mt-0.5">
                      Fotos, videos y novedades
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 space-y-3">
                <a
                  href="https://wa.me/5493424078054?text=Hola%20LEGOLAND!%20Quisiera%20hacer%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-[#16A34A] text-white font-display font-black text-lg py-4 px-6 rounded-2xl shadow-xl transition-transform hover:scale-102"
                >
                  <MessageCircle className="w-6 h-6 fill-white text-[#22C55E]" />
                  <span>Chatear por WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/pelotero.legoland.santafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-95 text-white font-display font-bold text-base py-3.5 px-6 rounded-2xl shadow-md transition-transform hover:scale-102"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Seguinos en Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Maps Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 shadow-2xl border-4 border-white/80 overflow-hidden flex flex-col min-h-[420px]">
            <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden relative">
              <iframe
                title="Ubicación de LEGOLAND Pelotero"
                src="https://maps.google.com/maps?q=Av.+Facundo+Zuvir%C3%ADa+5951,+Santa+Fe,+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0 rounded-2xl"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="pt-3 px-2 flex items-center justify-between text-xs text-gray-600 font-bold">
              <span>Av. Facundo Zuviría 5951, Santa Fe</span>
              <a
                href="https://maps.google.com/?q=Av.+Facundo+Zuvir%C3%ADa+5951,+Santa+Fe,+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#2563EB] hover:underline"
              >
                <span>Cómo llegar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
