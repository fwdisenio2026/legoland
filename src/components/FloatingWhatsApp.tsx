import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contacto rápido" className="fixed bottom-24 md:bottom-6 right-4 sm:right-6 z-40">
      <a
        href="https://wa.me/5493424078054?text=Hola%20LEGOLAND!%20Quisiera%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group ring-4 ring-green-400/20"
      >
        <MessageCircle className="w-8 h-8 fill-white text-[#22C55E]" />
      </a>
    </aside>
  );
};
