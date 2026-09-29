import React from 'react';
import { CreditCard, Check } from 'lucide-react';

export const PromoJerarquicos: React.FC = () => {
  return (
    <div className="py-8 bg-amber-50/80 border-b border-amber-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FACC15] text-gray-950 flex items-center justify-center shrink-0 shadow-xs">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-md">
                  Financiación
                </span>
                <h4 className="font-display font-bold text-lg text-gray-900">
                  Tarjetas Jerárquicos
                </h4>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                Facilidades para que la organización de tu cumpleaños sea accesible y cómoda.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-xl">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>3 cuotas sin interés</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-xl">
              <Check className="w-4 h-4 text-blue-600" />
              <span>Hasta 12 cuotas fijas</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
