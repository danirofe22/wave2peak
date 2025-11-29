import React, { useState } from 'react';
import { ACTIVITIES } from '../constants';
import { ActivityCategory } from '../types';
import { Mountain, Droplets, Wind, Map } from 'lucide-react';

export const Activities: React.FC = () => {
  const [filter, setFilter] = useState<ActivityCategory | 'ALL'>('ALL');

  const filteredActivities = filter === 'ALL' 
    ? ACTIVITIES 
    : ACTIVITIES.filter(a => a.category === filter);

  const categories = [
    { id: 'ALL', label: 'Todas', icon: <Map size={18} /> },
    { id: ActivityCategory.SNOW, label: 'Nieve', icon: <Mountain size={18} /> },
    { id: ActivityCategory.WATER, label: 'Agua', icon: <Droplets size={18} /> },
    { id: ActivityCategory.AIR, label: 'Aire', icon: <Wind size={18} /> },
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Elige tu Elemento</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Desde los picos más altos de Sierra Nevada hasta las aguas cristalinas de la Costa Tropical.
            Lo organizamos todo para que solo te preocupes de disfrutar.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat.id 
                  ? 'bg-wave text-white shadow-md transform scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-md shadow-sm uppercase text-slate-800">
                  {activity.season}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-wave mb-2 uppercase tracking-wider">
                  {activity.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-wave transition-colors">
                  {activity.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};