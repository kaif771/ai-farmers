import React from 'react';
import { useTranslation } from 'react-i18next';
import PredictiveChart from '../components/PredictiveChart';
import { TrendingUp, Wheat, Sprout, Tractor } from 'lucide-react';

const YieldPrediction = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 pl-1">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">{t('predictions') || 'Yield Prediction'}</h2>
        <p className="text-slate-400">Deep Learning (LSTM & Random Forest) crop yield forecasting module.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: <Wheat className="text-amber-500" size={24} />, title: "Expected Yield", val: "+14%", desc: "vs last season" },
          { icon: <TrendingUp className="text-primary-500" size={24} />, title: "Market Value", val: "High", desc: "Optimal sell window" },
          { icon: <Sprout className="text-emerald-500" size={24} />, title: "Crop Health", val: "92%", desc: "Excellent condition" },
          { icon: <Tractor className="text-accent-blue" size={24} />, title: "Harvest ETA", val: "24 Days", desc: "Ready mid-Nov" }
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-5 rounded-xl border border-slate-700/50 hover:bg-slate-800/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-slate-800 rounded-lg">{stat.icon}</div>
              <span className="text-slate-300 font-medium text-sm">{stat.title}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white tracking-tight">{stat.val}</span>
            </div>
            <p className="text-slate-500 text-xs mt-1">{stat.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PredictiveChart />
        </div>
        <div className="glass-panel p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Model Confidence</h3>
            <p className="text-sm text-slate-400 mb-6">Our ensemble AI currently guarantees a 94.2% accuracy bounding for the selected region.</p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                  <span>LSTM Sequence</span>
                  <span className="text-primary-500">96%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 w-[96%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                  <span>Random Forest (Yield)</span>
                  <span className="text-accent-purple">92%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-purple w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold tracking-wide shadow-lg shadow-primary-500/20 hover:scale-[1.02] transition-transform">
            Generate Full PDF Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default YieldPrediction;
