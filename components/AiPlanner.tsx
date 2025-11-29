import React, { useState } from 'react';
import { planAdventure } from '../services/geminiService';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { AiResponseState } from '../types';
import ReactMarkdown from 'react-markdown';

export const AiPlanner: React.FC = () => {
  const [input, setInput] = useState('');
  const [state, setState] = useState<AiResponseState>({
    loading: false,
    response: null,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setState({ loading: true, response: null, error: null });
    try {
      const result = await planAdventure(input);
      setState({ loading: false, response: result, error: null });
    } catch (err) {
      setState({ loading: false, response: null, error: "No pudimos conectar con el guía de aventuras. Por favor inténtalo de nuevo." });
    }
  };

  return (
    <section id="planner" className="py-20 bg-wave-dark text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-wave opacity-20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
              <Sparkles className="text-yellow-400 mr-2" />
              <span className="font-semibold tracking-wide">GUÍA DE AVENTURAS IA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿No estás seguro de qué hacer?</h2>
            <p className="text-blue-100 text-lg">
              Cuéntale a nuestra IA cuándo quieres venir y qué te gusta. Te sugeriremos el itinerario perfecto "Wave2Peak".
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-900">
            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="relative">
                <label htmlFor="ai-input" className="block text-sm font-medium text-slate-500 mb-2">
                  Pregúntanos cualquier cosa (ej. "Quiero esquiar en Febrero" o "Deportes de agua para un grupo")
                </label>
                <div className="flex gap-2">
                  <input
                    id="ai-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Describe tu aventura soñada..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-wave focus:border-transparent outline-none transition-all"
                  />
                  <button
                    type="submit"
                    disabled={state.loading || !input.trim()}
                    className="bg-wave hover:bg-wave-dark text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                  </button>
                </div>
              </form>

              {state.response && (
                <div className="mt-8 bg-slate-50 p-6 rounded-xl border border-slate-100 animate-fade-in">
                  <h3 className="text-wave font-bold mb-3 flex items-center">
                    <Sparkles size={16} className="mr-2" />
                    Itinerario Sugerido
                  </h3>
                  <div className="prose prose-slate max-w-none text-sm md:text-base">
                    {/* Using ReactMarkdown to render the Gemini response nicely */}
                    <ReactMarkdown>{state.response}</ReactMarkdown>
                  </div>
                </div>
              )}

              {state.error && (
                <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                  {state.error}
                </div>
              )}
            </div>
            <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
              <span>Powered by Gemini 2.5</span>
              <span>Wave2Peak © Asistente IA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};