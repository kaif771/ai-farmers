import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Settings as SettingsIcon, Bell, User, Globe, Smartphone, MapPin, Zap, Mail, MessageSquare } from 'lucide-react';

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('Profile & Farm');
  
  const [autoIrrigate, setAutoIrrigate] = useState(false);
  const [aiYieldAlerts, setAiYieldAlerts] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [pushAlerts, setPushAlerts] = useState(true);

  const tabs = ['Profile & Farm', 'AI Preferences', 'Notifications', 'Mobile Alerts', 'Language & Region'];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <header className="mb-8 pl-1">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Settings</h2>
        <p className="text-slate-400">Manage your farm profile, AI preferences, and application logic.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar Nav */}
        <div className="md:col-span-1 space-y-2">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                activeTab === tab 
                ? 'bg-primary-500/10 text-primary-500 border border-primary-500/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-2 space-y-6">
          
          {/* PROFILE & FARM */}
          {activeTab === 'Profile & Farm' && (
            <div className="glass-panel p-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-6 border-b border-slate-700/50 pb-4">
                <User className="text-slate-400" size={20} />
                Profile & Farm Profile
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Farm Name</label>
                    <input type="text" defaultValue="Raju's Agro Farm" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 text-slate-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Owner Name</label>
                    <input type="text" defaultValue="Raju Kisan" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 text-slate-200" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Farm Location</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input type="text" defaultValue="Punjab, India" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 text-slate-200" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Size (Acres)</label>
                    <input type="number" defaultValue={24} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 text-slate-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Primary Crop</label>
                    <select className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 text-slate-200">
                      <option>Wheat</option>
                      <option>Rice</option>
                      <option>Cotton</option>
                      <option>Sugarcane</option>
                    </select>
                  </div>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-700/50">
                  <button className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm">Save Profile</button>
                </div>
              </div>
            </div>
          )}

          {/* AI PREFERENCES */}
          {activeTab === 'AI Preferences' && (
            <div className="glass-panel p-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-6 border-b border-slate-700/50 pb-4">
                <Zap className="text-slate-400" size={20} />
                AI & Rule-Based Automation
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1">Smart Irrigation Automation</h4>
                    <p className="text-xs text-slate-400 max-w-sm">Allow the AI to automatically toggle smart pumps based on LSTM moisture predictions.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={autoIrrigate} onChange={() => setAutoIrrigate(!autoIrrigate)} />
                    <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1">Random Forest Yield Check</h4>
                    <p className="text-xs text-slate-400 max-w-sm">Use intensive deep learning models weekly to recalculate yield trajectory.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={aiYieldAlerts} onChange={() => setAiYieldAlerts(!aiYieldAlerts)} />
                    <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === 'Notifications' && (
            <div className="glass-panel p-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-6 border-b border-slate-700/50 pb-4">
                <Bell className="text-slate-400" size={20} />
                Alert Routing
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                  <Mail size={24} className="text-slate-400" />
                  <div className="flex-1">
                    <h4 className="text-slate-200 font-semibold">Email Summary</h4>
                    <p className="text-xs text-slate-400">Receive a daily digest of farm insights.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={emailAlerts} onChange={() => setEmailAlerts(!emailAlerts)} />
                    <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                  </label>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                  <MessageSquare size={24} className="text-slate-400" />
                  <div className="flex-1">
                    <h4 className="text-slate-200 font-semibold">SMS Critical Alerts</h4>
                    <p className="text-xs text-slate-400">Instant SMS for immediate threats (Pests, Frost).</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={smsAlerts} onChange={() => setSmsAlerts(!smsAlerts)} />
                    <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* MOBILE ALERTS */}
          {activeTab === 'Mobile Alerts' && (
            <div className="glass-panel p-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-6 border-b border-slate-700/50 pb-4">
                <Smartphone className="text-slate-400" size={20} />
                Mobile Integration
              </h3>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <Smartphone size={48} className="mx-auto text-primary-500 mb-4 opacity-80" />
                <h4 className="text-slate-200 font-semibold mb-2">Connect Your Device</h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">Link your mobile device to receive direct push notifications when AI detects anomalies or initiates smart irrigation.</p>
                
                <div className="flex items-center justify-center gap-4">
                  <button className="bg-white text-slate-900 px-6 py-2.5 rounded-lg font-bold tracking-tight hover:bg-slate-200 transition-colors text-sm">Download iOS App</button>
                  <button className="bg-white text-slate-900 px-6 py-2.5 rounded-lg font-bold tracking-tight hover:bg-slate-200 transition-colors text-sm">Download Android App</button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700 w-full flex justify-between items-center text-left">
                   <div>
                    <h5 className="text-slate-200 text-sm font-semibold">Web Push Notifications</h5>
                    <p className="text-xs text-slate-400">Receive alerts in this browser.</p>
                   </div>
                   <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={pushAlerts} onChange={() => setPushAlerts(!pushAlerts)} />
                    <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* LANGUAGE & REGION */}
          {activeTab === 'Language & Region' && (
            <div className="glass-panel p-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-6 border-b border-slate-700/50 pb-4">
                <Globe className="text-slate-400" size={20} />
                Localization
              </h3>
              
              <div className="space-y-6">
                 <div>
                   <label className="block text-sm font-medium text-slate-400 mb-2">Display Language (10+ Supported)</label>
                   <select 
                      value={i18n.language}
                      onChange={(e) => i18n.changeLanguage(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 text-slate-200"
                    >
                      {Object.keys(i18n.options.resources || {}).map((lang) => (
                        <option key={lang} value={lang}>
                          {t(`languages.${lang}`, { defaultValue: lang.toUpperCase() })}
                        </option>
                      ))}
                   </select>
                   <p className="text-xs text-slate-500 mt-2">This application supports real-time multi-language AI translation.</p>
                 </div>

                 <div>
                   <label className="block text-sm font-medium text-slate-400 mb-2">Interface Theme</label>
                   <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 text-slate-200">
                     <option>Dark Mode (Recommended for Battery)</option>
                     <option>Light Mode</option>
                     <option>System Default</option>
                   </select>
                 </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Settings;
