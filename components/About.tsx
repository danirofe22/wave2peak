import React from 'react';
import { ShieldCheck, Calendar, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
             <div className="grid grid-cols-2 gap-4">
                <img className="rounded-2xl shadow-lg mt-8" src="https://picsum.photos/id/1036/300/400" alt="Nieve" />
                <img className="rounded-2xl shadow-lg mb-8" src="https://picsum.photos/id/1041/300/400" alt="Surf" />
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h4 className="text-wave font-bold uppercase tracking-wide mb-2">Sobre Wave2Peak</h4>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Impulsados por la Pasión, Definidos por la Seguridad</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Fundada por Mario Rodríguez Fernández en Granada, Wave2Peak nació de una idea simple: 
              ¿por qué elegir entre el mar y la montaña cuando puedes tener ambos?
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Operamos bajo un modelo "Asset-Light", asociándonos con las mejores escuelas locales para garantizar 
              el mejor equipamiento y disponibilidad sin costes fijos innecesarios, repercutiendo ese valor directamente en ti.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-wave">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Wild & Safe</h5>
                  <p className="text-sm text-slate-500">Protocolos de seguridad rigurosos e instructores certificados (TD1/TD2).</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-wave">
                  <Calendar size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Todo el Año</h5>
                  <p className="text-sm text-slate-500">Pivotando entre Sierra Nevada (Invierno) y Costa Tropical (Verano).</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-wave">
                  <Users size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Enfoque Comunitario</h5>
                  <p className="text-sm text-slate-500">Grupos reducidos, packs universitarios y team building corporativo.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};