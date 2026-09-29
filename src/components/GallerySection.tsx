import React, { useState } from 'react';
import { Instagram, ExternalLink, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

import img01 from '@/assets/images/general/ellugar_01.webp';
import img02 from '@/assets/images/general/ellugar_02.webp';
import img03 from '@/assets/images/general/ellugar_03.webp';
import img04 from '@/assets/images/general/ellugar_04.webp';
import img05 from '@/assets/images/general/ellugar_05.webp';
import img06 from '@/assets/images/general/ellugar_06.webp';

interface PhotoItem {
  src: string;
  alt: string;
  tag: string;
}

export const GallerySection: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const photos: PhotoItem[] = [
    { src: img01, alt: 'Espacio de juegos y pelotero en LEGOLAND', tag: 'El Pelotero' },
    { src: img02, alt: 'Área de recreación e instalaciones en LEGOLAND', tag: 'Diversión' },
    { src: img03, alt: 'Ambiente climatizado para cumples en Santa Fe', tag: 'Festejos' },
    { src: img04, alt: 'Sector de celebración y mesas para familias', tag: 'Cumpleaños' },
    { src: img05, alt: 'Juegos y entretenimiento para chicos y grandes', tag: 'Instalaciones' },
    { src: img06, alt: 'Detalles y espacios de recreación en LEGOLAND', tag: 'Momentos' },
  ];

  // Duplicated list for seamless infinite loop scrolling from right to left
  const displayPhotos = [...photos, ...photos];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % photos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#2563EB] text-white relative overflow-hidden">
      {/* Background festive shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        {/* Section Header - Without 'fotos reales' */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#2563EB] bg-white font-display font-extrabold text-sm sm:text-base tracking-wider uppercase px-5 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Galería del Lugar
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-3 drop-shadow-sm">
            Un Recorrido por LEGOLAND
          </h2>
          <p className="text-base sm:text-xl text-blue-100 font-medium max-w-xl mx-auto">
            Deslizá o tocá cualquier imagen para ver nuestro espacio.
          </p>
        </div>
      </div>

      {/* Infinite Continuous Carousel Passing Slowly From Right to Left */}
      <div className="w-full overflow-hidden py-4 select-none">
        <div className="animate-carousel-slow flex items-center gap-6">
          {displayPhotos.map((photo, index) => {
            const originalIndex = index % photos.length;
            return (
              <div
                key={index}
                onClick={() => setActivePhotoIndex(originalIndex)}
                className="w-72 sm:w-88 md:w-96 shrink-0 group relative bg-white p-3 rounded-3xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-103"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex items-center justify-between w-full text-white">
                      <span className="font-display font-bold text-sm bg-[#7C3AED] px-3.5 py-1 rounded-full shadow-xs">
                        {photo.tag}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold bg-white/30 backdrop-blur-xs px-3 py-1 rounded-full">
                        <Eye className="w-3.5 h-3.5" />
                        Ver
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Instagram Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <a
          href="https://www.instagram.com/pelotero.legoland.santafe/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#FACC15] hover:bg-[#EAB308] text-gray-950 font-display font-black text-lg px-8 py-4 rounded-2xl shadow-xl transition-transform hover:scale-105"
        >
          <Instagram className="w-6 h-6 text-gray-950" />
          <span>Ver Más en Instagram @pelotero.legoland.santafe</span>
          <ExternalLink className="w-5 h-5 text-gray-950" />
        </a>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhotoIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors z-20 cursor-pointer"
            aria-label="Cerrar vista grande"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 p-3.5 rounded-full transition-colors z-20 cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] relative flex flex-col items-center"
          >
            <img
              src={photos[activePhotoIndex].src}
              alt={photos[activePhotoIndex].alt}
              className="max-h-[75vh] w-auto rounded-3xl shadow-2xl object-contain border-4 border-white/20"
            />
            <p className="mt-4 text-white font-display font-bold text-lg text-center">
              {photos[activePhotoIndex].alt}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 p-3.5 rounded-full transition-colors z-20 cursor-pointer"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </section>
  );
};
