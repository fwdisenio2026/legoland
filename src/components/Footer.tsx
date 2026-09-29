import React from 'react';
import { MapPin, MessageCircle, Instagram } from 'lucide-react';
import logoPng from '@/assets/logos/logo_oksf.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-14 pb-28 md:pb-14 border-t-4 border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800">
          {/* Logo brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img src={logoPng} alt="LEGOLAND Pelotero" className="h-24 sm:h-28 w-auto mb-3 object-contain drop-shadow-md" />
            <p className="text-slate-400 text-sm font-medium">
              Un espacio para celebrar, jugar y compartir en Santa Fe.
            </p>
          </div>

          {/* Core Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2.5 bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800">
              <MapPin className="w-5 h-5 text-[#EF4444]" />
              <span className="font-medium">Av. Facundo Zuviría 5951, Santa Fe</span>
            </div>
            <a
              href="https://wa.me/5493424078054"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-emerald-950/60 hover:bg-emerald-900/80 px-4 py-2.5 rounded-xl border border-emerald-800/60 text-emerald-200 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#22C55E]" />
              <span className="font-bold">3424078054</span>
            </a>
            <a
              href="https://www.instagram.com/pelotero.legoland.santafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-purple-950/60 hover:bg-purple-900/80 px-4 py-2.5 rounded-xl border border-purple-800/60 text-purple-200 transition-colors"
            >
              <Instagram className="w-5 h-5 text-[#EC4899]" />
              <span className="font-bold">Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} LEGOLAND Pelotero. Todos los derechos reservados.</p>
          <p className="font-display font-bold tracking-widest text-[#FACC15] text-sm">
            JUGAR • FESTEJAR • SOÑAR
          </p>
        </div>
      </div>
    </footer>
  );
};
