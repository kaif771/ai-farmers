import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Home, CloudRain, TrendingUp, Settings as SettingsIcon, HelpCircle, Leaf } from 'lucide-react';

const Sidebar = () => {
  const { t } = useTranslation();

  const navItemClass = ({ isActive }) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
      isActive 
        ? 'bg-primary-500/10 text-primary-500' 
        : 'hover:bg-slate-800 text-slate-300 hover:text-white'
    }`;

  return (
    <aside className="w-64 h-screen fixed top-0 left-0 flex flex-col bg-slate-900 border-r border-slate-800 text-slate-300">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
          <Leaf size={24} />
        </div>
        <h1 className="text-xl font-bold text-white tracking-tight">AgroIntel <span className="text-primary-500">AI</span></h1>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2">
        <NavLink to="/dashboard" className={navItemClass}>
          <Home size={20} />
          {t('dashboard')}
        </NavLink>
        <NavLink to="/weather" className={navItemClass}>
          <CloudRain size={20} />
          {t('weather')}
        </NavLink>
        <NavLink to="/predictions" className={navItemClass}>
          <TrendingUp size={20} />
          {t('predictions')}
        </NavLink>
        <NavLink to="/settings" className={navItemClass}>
          <SettingsIcon size={20} />
          Settings
        </NavLink>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-slate-300 hover:text-white">
          <HelpCircle size={20} />
          Help & Support
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
