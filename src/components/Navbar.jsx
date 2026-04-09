import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bell, Search, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const currentLangs = Object.keys(i18n.options.resources || {});

  return (
    <header className="h-20 px-8 flex items-center justify-between sticky top-0 z-10 glass-panel border-x-0 border-t-0 rounded-none bg-slate-900/60 shadow-md">
      <div className="flex items-center gap-4 text-slate-300">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search farm metrics..." 
            className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-slate-200 placeholder-slate-500 w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Globe size={18} className="text-slate-400" />
          <select 
            onChange={handleLanguageChange} 
            value={i18n.language}
            className="bg-transparent text-sm text-slate-300 border-none outline-none cursor-pointer focus:ring-0 appearance-none font-medium"
          >
            {currentLangs.map((lang) => (
              <option key={lang} value={lang} className="bg-slate-800 text-slate-200">
                {t(`languages.${lang}`, { defaultValue: lang.toUpperCase() })}
              </option>
            ))}
          </select>
        </div>

        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-slate-700">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accent-purple to-accent-blue flex items-center justify-center text-sm font-bold text-white shadow-md">
            RK
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-slate-200">Raju Kisan</p>
            <p className="text-xs text-slate-500">Premium Farmer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
