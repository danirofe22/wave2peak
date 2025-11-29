import React from 'react';
import { PRICING_TIERS } from '../constants';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Paquetes de Aventura</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Precios transparentes. Sin tarifas ocultas. Ya quieras un solo día de diversión o una semana completa de inmersión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                tier.recommended 
                  ? 'border-2 border-wave shadow-2xl transform md:-translate-y-4' 
                  : 'border border-slate-200 shadow-lg'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-wave text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  MÁS POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <p className="text-slate-500 mb-6 h-10">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                <span className="text-slate-400"> / persona</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                tier.recommended 
                  ? 'bg-wave hover:bg-wave-dark text-white shadow-lg' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}>
                Reservar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};