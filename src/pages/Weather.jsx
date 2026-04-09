import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cloud, CloudLightning, Droplets, Sun, Wind, MapPin } from 'lucide-react';
import WeatherWidget from '../components/WeatherWidget';

const Weather = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 pl-1">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">{t('weather') || 'Weather Forecast'}</h2>
        <p className="text-slate-400">Advanced 7-day meteorological prediction driven by Live APIs.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <WeatherWidget />
        </div>
        <div className="lg:col-span-2 glass-panel p-6">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-6">
            <CloudLightning className="text-indigo-400" /> Hourly Forecast
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
             {[
              { time: '10:00', icon: <Sun size={24} className="text-amber-400" />, temp: '32°C' },
              { time: '11:00', icon: <Sun size={24} className="text-amber-400" />, temp: '34°C' },
              { time: '12:00', icon: <Cloud size={24} className="text-slate-400" />, temp: '35°C' },
              { time: '13:00', icon: <CloudLightning size={24} className="text-indigo-400" />, temp: '32°C' },
              { time: '14:00', icon: <Droplets size={24} className="text-accent-blue" />, temp: '29°C' },
              { time: '15:00', icon: <Droplets size={24} className="text-accent-blue" />, temp: '28°C' },
              { time: '16:00', icon: <Cloud size={24} className="text-slate-400" />, temp: '29°C' },
             ].map((hour, idx) => (
                <div key={idx} className="flex-shrink-0 bg-slate-800/40 rounded-xl p-4 min-w-[80px] flex flex-col items-center gap-3 border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                  <span className="text-sm font-semibold text-slate-400">{hour.time}</span>
                  {hour.icon}
                  <span className="text-lg font-bold text-slate-200">{hour.temp}</span>
                </div>
             ))}
          </div>
        </div>
      </div>

      <div className="glass-panel p-6">
         <h3 className="text-xl font-bold text-slate-100 mb-6">7-Day Radar & Soil Impact</h3>
         <div className="h-64 border-2 border-dashed border-slate-700 rounded-2xl flex items-center justify-center text-slate-500">
           Interactive Map Layer integration coming soon...
         </div>
      </div>
    </div>
  );
};

export default Weather;
