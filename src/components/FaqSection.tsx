import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  badgeColor: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: '¿Cómo consulto o reservo una fecha para mi festejo?',
      answer: 'Elegí el día deseado en nuestro calendario interactivo y presioná el botón "Reservar". Te llevará directamente a nuestro WhatsApp oficial (3424078054) con la fecha precompletada para coordinar la disponibilidad de forma rápida y directa.',
      badgeColor: 'bg-[#EF4444]',
    },
    {
      question: '¿Dónde está ubicado el pelotero LEGOLAND?',
      answer: 'Estamos ubicados en Av. Facundo Zuviría 5951, en la ciudad de Santa Fe, provincia de Santa Fe. Más abajo podés consultar el mapa de ubicación para llegar fácilmente.',
      badgeColor: 'bg-[#2563EB]',
    },
    {
      question: '¿Qué opciones de financiación con tarjeta tienen?',
      answer: 'Contamos con financiación especial con Tarjetas Jerárquicos: 3 cuotas sin interés y hasta 12 cuotas fijas para que organizar el cumpleaños sea accesible y cómodo.',
      badgeColor: 'bg-[#10B981]',
    },
    {
      question: '¿Para qué edades está pensado LEGOLAND?',
      answer: 'LEGOLAND es un espacio para celebrar, jugar y compartir con diversión garantizada tanto para chicos... ¡como también para los grandes!',
      badgeColor: 'bg-[#7C3AED]',
    },
    {
      question: '¿Cómo puedo ver más fotos y videos del lugar?',
      answer: 'Podés seguirnos en nuestro Instagram oficial @pelotero.legoland.santafe, donde compartimos historias, videos y el día a día de todos nuestros festejos.',
      badgeColor: 'bg-[#EF4444]',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-20 sm:py-28 bg-[#FACC15] text-gray-900 relative overflow-hidden">
      {/* Background festive shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-white bg-[#7C3AED] font-display font-extrabold text-sm tracking-wider uppercase px-5 py-1.5 rounded-full inline-block mb-3 shadow-md">
            Dudas Frecuentes
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-gray-950 mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-800 text-base sm:text-lg font-medium">
            Todo lo que necesitás saber para planificar tu festejo en LEGOLAND.
          </p>
        </div>

        {/* Accordion list - Solid white cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border-2 border-yellow-500/20 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-3 h-3 rounded-full shrink-0 ${faq.badgeColor}`} />
                    <span className="font-display font-bold text-lg sm:text-xl text-gray-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#7C3AED] text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-gray-700 text-base sm:text-lg font-medium leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
