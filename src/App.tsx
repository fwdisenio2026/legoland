/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandBanner } from './components/BrandBanner';
import { ProposalSection } from './components/ProposalSection';
import { PinatasMarianSection } from './components/PinatasMarianSection';
import { GallerySection } from './components/GallerySection';
import { BookingCalendar } from './components/BookingCalendar';
import { PromoJerarquicos } from './components/PromoJerarquicos';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Intro Video Overlay Screen */}
      {showIntro && <IntroScreen onEnter={() => setShowIntro(false)} />}

      {/* Top Header */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with full-width video container & bouncing phrases */}
        <Hero onReserveClick={() => scrollToSection('reservas')} />

        {/* Brand Ribbon Banner */}
        <BrandBanner />

        {/* Core Value Proposal - ROJO */}
        <ProposalSection />

        {/* Súper Alianza Piñatas Marian - TEAL / TURQUESA */}
        <PinatasMarianSection />

        {/* Gallery Carousel - AZUL */}
        <GallerySection />

        {/* Booking Calendar Module - VERDE */}
        <BookingCalendar />

        {/* Promo Tarjetas Jerárquicos (after calendar, secondary importance) */}
        <PromoJerarquicos />

        {/* Preguntas Frecuentes - AMARILLO */}
        <FaqSection />

        {/* Contact & Google Maps Section - PÚRPURA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button (icon only) */}
      <FloatingWhatsApp />
    </div>
  );
}
