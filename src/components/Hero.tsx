import React, { useState, useEffect, useRef } from 'react';
import legolanOkVideo from '@/assets/videos/legolanok.mp4';
import fallbackPoster from '@/assets/images/general/ellugar_02.webp';

interface HeroProps {
  onReserveClick?: () => void;
  videoSrc?: string;
}

interface SlidePhrase {
  tag: string;
  tagBg: string;
  line1: string;
  line2: string;
  textColor: string;
}

const PHRASES: SlidePhrase[] = [
  {
    tag: 'Festejos & Cumpleaños',
    tagBg: 'bg-[#EF4444]',
    line1: 'Festejá tu cumpleaños',
    line2: 'con todos tus amigos',
    textColor: 'text-[#FACC15]', // Frase completamente amarilla
  },
  {
    tag: 'Pelotero & Diversión',
    tagBg: 'bg-[#2563EB]',
    line1: 'Juegos y pelotero',
    line2: 'para divertirte al máximo',
    textColor: 'text-[#4ADE80]', // Frase completamente verde
  },
  {
    tag: 'Momentos Mágicos',
    tagBg: 'bg-[#7C3AED]',
    line1: 'Cumpleaños mágicos',
    line2: 'e inolvidables en tu día',
    textColor: 'text-[#38BDF8]', // Frase completamente celeste
  },
  {
    tag: 'Festejos Inolvidables',
    tagBg: 'bg-[#10B981]',
    line1: 'Tu fiesta soñada',
    line2: 'para celebrar y compartir',
    textColor: 'text-[#FB923C]', // Frase completamente naranja
  },
];

// Gotita súper fina y estilizada como en el logo de LEGOLAND
const FineDroplet: React.FC<{ fill: string; className?: string; style?: React.CSSProperties }> = ({
  fill,
  className = '',
  style,
}) => (
  <svg viewBox="0 0 10 32" className={`drop-shadow-sm ${className}`} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M5 0 C5 6, 2 18, 2 26 C2 29.3, 3.3 32, 5 32 C6.7 32, 8 29.3, 8 26 C8 18, 5 6, 5 0 Z" fill={fill} />
  </svg>
);

// Arco / línea de salpicadura súper fina
const FineSplashArc: React.FC<{ stroke: string; className?: string; style?: React.CSSProperties }> = ({
  stroke,
  className = '',
  style,
}) => (
  <svg viewBox="0 0 40 18" fill="none" className={`drop-shadow-xs ${className}`} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 16 C 12 4, 26 2, 38 4" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Sparkle Star delicada en colores del logo
const SparkleStar: React.FC<{ fill: string; size?: number; className?: string }> = ({ fill, size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={`drop-shadow-xs ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.7 8.3L23 9.4L16.8 14.8L18.6 23.2L12 18.8L5.4 23.2L7.2 14.8L1 9.4L9.3 8.3L12 0Z" />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ videoSrc = legolanOkVideo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBouncing, setIsBouncing] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Intervalo de frases
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PHRASES.length);
        setIsBouncing(true);
      }, 400);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  // Reproducción continua
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const playVideo = () => {
      v.muted = true;
      v.play().catch(() => {});
    };

    playVideo();
    window.addEventListener('focus', playVideo);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) playVideo();
    });

    return () => {
      window.removeEventListener('focus', playVideo);
    };
  }, []);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const activePhrase = PHRASES[currentIndex];

  return (
    <section id="inicio" className="relative w-full min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#2E1065]">
      {/* 1. Permanent Colorful Fallback Image */}
      <img
        src={fallbackPoster}
        alt="LEGOLAND Pelotero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={fallbackPoster}
        onEnded={handleVideoEnded}
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={videoSrc}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-12 sm:py-16 flex flex-col items-center">
        {/* Animated tag */}
        <div className="mb-4 sm:mb-6">
          <span
            className={`inline-block ${activePhrase.tagBg} text-white font-display font-black text-xs sm:text-sm tracking-wider uppercase px-5 py-1.5 rounded-full shadow-xl transition-all duration-300 ${
              isBouncing ? 'scale-100 opacity-100 animate-bounce' : 'scale-75 opacity-0'
            }`}
          >
            {activePhrase.tag}
          </span>
        </div>

        {/* Text Container with Animated Super-Fine Droplets and Stars */}
        <div className="relative min-h-[120px] sm:min-h-[160px] md:min-h-[190px] flex items-center justify-center w-full px-4">
          {/* Animated Fine Droplets & Splash Lines (Left Side) */}
          <div
            className={`absolute -left-1 sm:left-4 top-1 pointer-events-none transition-all duration-500 ${
              isBouncing ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 -translate-x-4'
            }`}
          >
            <div className="relative flex flex-col items-center">
              {/* Gotita roja súper fina */}
              <FineDroplet fill="#EF4444" className="w-2.5 h-8 sm:w-3 sm:h-10 transform -rotate-45 animate-bounce" />
              {/* Estrellita amarilla fina */}
              <SparkleStar fill="#FACC15" size={20} className="absolute -top-2.5 -right-3 animate-spin" />
              {/* Arco celeste fino */}
              <FineSplashArc stroke="#38BDF8" className="w-8 h-4 mt-0.5 transform rotate-12 animate-pulse" />
            </div>
          </div>

          {/* Animated Fine Droplets & Splash Lines (Right Side) */}
          <div
            className={`absolute -right-1 sm:right-4 bottom-1 pointer-events-none transition-all duration-500 ${
              isBouncing ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 translate-x-4'
            }`}
          >
            <div className="relative flex flex-col items-center">
              {/* Gotita verde súper fina */}
              <FineDroplet fill="#10B981" className="w-2.5 h-8 sm:w-3 sm:h-10 transform rotate-45 animate-bounce" />
              {/* Estrellita naranja fina */}
              <SparkleStar fill="#F59E0B" size={18} className="absolute -bottom-2 -left-3 animate-ping" />
              {/* Arco amarillo fino */}
              <FineSplashArc stroke="#FACC15" className="w-8 h-4 mt-0.5 transform -rotate-12 animate-pulse" />
            </div>
          </div>

          {/* Gotita azul fina satélite arriba a la derecha */}
          <div
            className={`absolute right-10 sm:right-20 -top-3 pointer-events-none transition-all duration-500 delay-100 ${
              isBouncing ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <FineDroplet fill="#3B82F6" className="w-2 h-6 sm:w-2.5 sm:h-8 transform rotate-20 animate-pulse" />
          </div>

          {/* Headline: Más grande en mobile (text-3xl), interlineado súper ajustado, sentence case, un solo color por frase */}
          <h1
            key={currentIndex}
            className={`font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.94] sm:leading-[0.9] tracking-tight max-w-4xl drop-shadow-[0_5px_20px_rgba(0,0,0,0.9)] transition-all duration-500 transform ${
              isBouncing
                ? 'scale-100 opacity-100 translate-y-0'
                : 'scale-90 opacity-0 -translate-y-4'
            }`}
          >
            <span className={`block ${activePhrase.textColor} drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]`}>
              {activePhrase.line1}
            </span>
            <span className={`block ${activePhrase.textColor} drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] mt-0.5 sm:mt-1`}>
              {activePhrase.line2}
            </span>
          </h1>
        </div>

        {/* Interactive Dots indicator */}
        <div className="flex items-center gap-2 mt-6 sm:mt-8">
          {PHRASES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsBouncing(false);
                setTimeout(() => {
                  setCurrentIndex(i);
                  setIsBouncing(true);
                }, 200);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? 'w-8 bg-[#FACC15] shadow-lg scale-110'
                  : 'w-2.5 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Ir a frase ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
