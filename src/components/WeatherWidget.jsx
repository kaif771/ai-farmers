import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CloudRain, Sun, Wind, Droplets, MapPin, Search } from 'lucide-react';

const WeatherWidget = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState('Punjab, India');

  return (
    <div className="glass-panel p-6 flex flex-col justify-between h-full hover:shadow-2xl hover:shadow-primary-500/10 transition-shadow duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Sun className="text-amber-400" size={24} />
            {t('weather')}
          </h2>
          <div className="flex items-center gap-1 text-slate-400 mt-1 text-sm">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-4xl font-light text-white tracking-tighter">32°C</div>
          <p className="text-sm text-slate-400 mt-1">Sunny, Clear Skies</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/50 rounded-xl p-3 flex flex-col items-center justify-center border border-slate-700/50">
          <Droplets size={20} className="text-accent-blue mb-2" />
          <span className="text-xs text-slate-400">{t('humidity')}</span>
          <span className="text-sm font-semibold text-slate-200">45%</span>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-3 flex flex-col items-center justify-center border border-slate-700/50">
          <Wind size={20} className="text-teal-400 mb-2" />
          <span className="text-xs text-slate-400">Wind</span>
          <span className="text-sm font-semibold text-slate-200">12 km/h</span>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-3 flex flex-col items-center justify-center border border-slate-700/50">
          <CloudRain size={20} className="text-indigo-400 mb-2" />
          <span className="text-xs text-slate-400">Rain Prob.</span>
          <span className="text-sm font-semibold text-slate-200">10%</span>
        </div>
      </div>

      <div className="mt-auto">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Farmer Input Layer</div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Update location or farm sector..." 
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 text-slate-200 pr-10"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-500 hover:text-primary-400">
            <Search size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
