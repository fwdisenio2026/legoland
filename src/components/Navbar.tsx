import React, { useState, useEffect } from 'react';
import { Home, Image as ImageIcon, Calendar, HelpCircle, MapPin } from 'lucide-react';
import logoPng from '@/assets/logos/logo_oksf.png';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navButtons = [
    {
      label: 'Inicio',
      id: 'inicio',
      icon: Home,
      bgColor: 'bg-[#7C3AED] hover:bg-[#6D28D9]',
      textColor: 'text-white',
    },
    {
      label: 'Galería',
      id: 'galeria',
      icon: ImageIcon,
      bgColor: 'bg-[#2563EB] hover:bg-[#1D4ED8]',
      textColor: 'text-white',
    },
    {
      label: 'Reservas',
      id: 'reservas',
      icon: Calendar,
      bgColor: 'bg-[#10B981] hover:bg-[#059669]',
      textColor: 'text-white',
    },
    {
      label: 'Preguntas',
      id: 'preguntas',
      icon: HelpCircle,
      bgColor: 'bg-[#FACC15] hover:bg-[#EAB308]',
      textColor: 'text-gray-900',
    },
    {
      label: 'Contacto',
      id: 'contacto',
      icon: MapPin,
      bgColor: 'bg-[#EF4444] hover:bg-[#DC2626]',
      textColor: 'text-white',
    },
  ];

  return (
    <>
      {/* Top Navbar: Altura reducida, márgenes blancos mínimos arriba y abajo, logo grande y nítido */}
      <header
        className={`sticky top-0 z-40 bg-white border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? 'py-1 shadow-md' : 'py-1.5 sm:py-2 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4 my-0 py-0">
            {/* Logo: Logo recortado al ras, más grande en mobile y desktop, con márgenes mínimos */}
            <div className="flex items-center justify-center w-full md:w-auto my-0 py-0">
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('inicio');
                }}
                className="group flex items-center justify-center py-0 my-0 leading-none"
                aria-label="Ir al inicio"
              >
                <img
                  src={logoPng}
                  alt="LEGOLAND Pelotero"
                  className={`w-auto object-contain transition-all duration-300 group-hover:scale-102 drop-shadow-xs my-0 py-0 ${
                    isScrolled
                      ? 'h-13 sm:h-15 md:h-17 lg:h-19'
                      : 'h-16 sm:h-18 md:h-21 lg:h-23'
                  }`}
                />
              </a>
            </div>

            {/* Desktop Navigation: Botones con márgenes superior e inferior drásticamente reducidos */}
            <nav className="hidden md:flex items-center gap-2 my-0 py-0">
              {navButtons.map((btn) => {
                const Icon = btn.icon;
                return (
                  <button
                    key={btn.id}
                    onClick={() => onNavigate(btn.id)}
                    className={`inline-flex items-center gap-1.5 ${btn.bgColor} ${btn.textColor} font-display font-black shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                      isScrolled
                        ? 'px-3.5 py-1.5 rounded-lg text-xs lg:text-sm'
                        : 'px-4 py-2 lg:px-4.5 lg:py-2.5 rounded-xl text-sm lg:text-base'
                    }`}
                  >
                    <Icon className={isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile App Bottom Navigation Bar: Fondo 100% BLANCO PLENO y Reservas en verde pleno */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-[0_-4px_25px_rgba(0,0,0,0.14)] px-3 pt-1.5 pb-2.5">
        <div className="grid grid-cols-5 items-end max-w-md mx-auto relative">
          {/* 1. Inicio */}
          <button
            onClick={() => onNavigate('inicio')}
            className="flex flex-col items-center justify-center py-1 text-[#7C3AED] active:scale-95 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center mb-0.5 shadow-xs">
              <Home className="w-4.5 h-4.5 text-[#7C3AED]" />
            </div>
            <span className="text-[10px] font-display font-extrabold leading-tight">Inicio</span>
          </button>

          {/* 2. Galería */}
          <button
            onClick={() => onNavigate('galeria')}
            className="flex flex-col items-center justify-center py-1 text-[#2563EB] active:scale-95 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center mb-0.5 shadow-xs">
              <ImageIcon className="w-4.5 h-4.5 text-[#2563EB]" />
            </div>
            <span className="text-[10px] font-display font-extrabold leading-tight">Galería</span>
          </button>

          {/* 3. Reservas: Verde pleno (#10B981) sin latido */}
          <div className="flex flex-col items-center -mt-6">
            <button
              onClick={() => onNavigate('reservas')}
              className="w-15 h-15 rounded-full bg-[#10B981] hover:bg-[#059669] text-white shadow-2xl border-4 border-white flex flex-col items-center justify-center active:scale-95 transition-all ring-3 ring-emerald-500/40 cursor-pointer"
              aria-label="Reservar fecha"
            >
              <Calendar className="w-6.5 h-6.5 text-white" />
            </button>
            <span className="text-[10px] font-display font-black text-[#10B981] mt-1 tracking-tight">
              Reservas
            </span>
          </div>

          {/* 4. Preguntas */}
          <button
            onClick={() => onNavigate('preguntas')}
            className="flex flex-col items-center justify-center py-1 text-[#D97706] active:scale-95 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center mb-0.5 shadow-xs">
              <HelpCircle className="w-4.5 h-4.5 text-[#D97706]" />
            </div>
            <span className="text-[10px] font-display font-extrabold leading-tight">Preguntas</span>
          </button>

          {/* 5. Contacto */}
          <button
            onClick={() => onNavigate('contacto')}
            className="flex flex-col items-center justify-center py-1 text-[#EF4444] active:scale-95 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center mb-0.5 shadow-xs">
              <MapPin className="w-4.5 h-4.5 text-[#EF4444]" />
            </div>
            <span className="text-[10px] font-display font-extrabold leading-tight">Contacto</span>
          </button>
        </div>
      </div>
    </>
  );
};
