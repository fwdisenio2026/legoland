import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import introVideo from '@/assets/videos/legoland_intro.mp4';

interface IntroScreenProps {
  onEnter: () => void;
}

// Sparkle Star with custom color and size
const Star: React.FC<{ fill: string; size: number; className?: string; style?: React.CSSProperties }> = ({
  fill,
  size,
  className = '',
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    className={`drop-shadow-xs ${className}`}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.7 8.3L23 9.4L16.8 14.8L18.6 23.2L12 18.8L5.4 23.2L7.2 14.8L1 9.4L9.3 8.3L12 0Z" />
  </svg>
);

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  const handleEnterClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      onEnter();
    }, 450);
  };

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (v && v.duration && v.currentTime >= v.duration - 0.25) {
      setVideoEnded(true);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-4 transition-all duration-500 overflow-hidden ${
        isClosing ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. Animated Stars of different sizes and logo colors (Red, Yellow, Blue, Green, Purple) on solid white background */}
      {/* Top Left - Red & Yellow */}
      <div className="absolute top-6 left-6 sm:top-12 sm:left-14 pointer-events-none animate-bounce">
        <Star fill="#EF4444" size={32} className="transform rotate-12" />
      </div>
      <div className="absolute top-20 left-20 sm:top-32 sm:left-36 pointer-events-none animate-spin" style={{ animationDuration: '9s' }}>
        <Star fill="#FACC15" size={22} />
      </div>

      {/* Top Right - Blue & Green */}
      <div className="absolute top-8 right-8 sm:top-14 sm:right-16 pointer-events-none animate-pulse">
        <Star fill="#2563EB" size={36} className="transform -rotate-12" />
      </div>
      <div className="absolute top-28 right-16 sm:top-36 sm:right-40 pointer-events-none animate-bounce" style={{ animationDuration: '3s' }}>
        <Star fill="#10B981" size={20} />
      </div>

      {/* Center Floating Accents */}
      <div className="absolute top-1/3 left-4 sm:left-16 pointer-events-none animate-pulse">
        <Star fill="#7C3AED" size={24} />
      </div>
      <div className="absolute top-1/2 right-4 sm:right-20 pointer-events-none animate-spin" style={{ animationDuration: '12s' }}>
        <Star fill="#EF4444" size={18} />
      </div>

      {/* Bottom Left - Green & Purple */}
      <div className="absolute bottom-10 left-8 sm:bottom-16 sm:left-24 pointer-events-none animate-pulse">
        <Star fill="#10B981" size={34} className="transform rotate-45" />
      </div>
      <div className="absolute bottom-24 left-24 sm:bottom-32 sm:left-48 pointer-events-none animate-bounce">
        <Star fill="#7C3AED" size={22} />
      </div>

      {/* Bottom Right - Yellow & Blue */}
      <div className="absolute bottom-8 right-10 sm:bottom-16 sm:right-24 pointer-events-none animate-bounce">
        <Star fill="#FACC15" size={38} className="transform -rotate-12" />
      </div>
      <div className="absolute bottom-24 right-24 sm:bottom-32 sm:right-48 pointer-events-none animate-pulse">
        <Star fill="#2563EB" size={22} />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-xl w-full text-center">
        {/* Video de la animación: SIN ningún recuadro, sombra, borde ni fondo que lo contenga */}
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg flex items-center justify-center mb-4">
          <video
            ref={videoRef}
            src={introVideo}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-auto max-h-[60vh] object-contain bg-transparent border-0 outline-none shadow-none"
          />
        </div>

        {/* 3. El cartel ingresar SOLO aparece cuando termina la animación del logo (mucho más chico) */}
        <div className="min-h-[60px] flex flex-col items-center justify-center">
          {videoEnded && (
            <div className="flex flex-col items-center animate-bounce">
              <button
                onClick={handleEnterClick}
                className="group inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#DC2626] text-white font-display font-black text-sm sm:text-base px-6 py-2.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-red-400/30"
              >
                <span>Ingresar</span>
                {/* Arrow with playful moving animation */}
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transform transition-transform group-hover:translate-x-1 animate-pulse" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
