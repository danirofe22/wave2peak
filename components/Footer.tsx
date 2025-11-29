import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-peak-dark text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white text-xl font-bold mb-4">Wave2Peak</h4>
            <p className="text-sm mb-4">
              Wild & Safe. Conectando el mar con la cumbre con experiencias de aventura premium.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Actividades</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-wave-light">Esquí y Snowboard</a></li>
              <li><a href="#" className="hover:text-wave-light">Surf y Kitesurf</a></li>
              <li><a href="#" className="hover:text-wave-light">Parapente</a></li>
              <li><a href="#" className="hover:text-wave-light">Barranquismo</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Empresa</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-wave-light">Nosotros</a></li>
              <li><a href="#" className="hover:text-wave-light">Protocolos de Seguridad</a></li>
              <li><a href="#" className="hover:text-wave-light">Modelo Asset-Light</a></li>
              <li><a href="#" className="hover:text-wave-light">Empleo</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Contacto</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Granada Centro, España
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +34 958 000 000
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                hola@wave2peak.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
          © {new Date().getFullYear()} Wave2Peak SL. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};