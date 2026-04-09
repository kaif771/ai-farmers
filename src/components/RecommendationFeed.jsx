import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, CheckCircle2, Zap } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    type: 'alert',
    icon: <AlertTriangle className="text-amber-500" size={20} />,
    title: 'Delay Irrigation',
    desc: 'AI predicts 80% chance of rain in 48 hours. Delaying irrigation will save approx 30% water.',
    action: 'Postpone 2 Days'
  },
  {
    id: 2,
    type: 'success',
    icon: <CheckCircle2 className="text-primary-500" size={20} />,
    title: 'Optimal Fertilizer Time',
    desc: 'Soil temperature and moisture are perfectly suited for Nitrogen application right now.',
    action: 'Mark Applied'
  },
  {
    id: 3,
    type: 'action',
    icon: <Zap className="text-accent-blue" size={20} />,
    title: 'Pest Risk Detected',
    desc: 'Nearby farms reported aphid outbreaks. Recommend preventative spray.',
    action: 'View Details'
  }
];

const RecommendationFeed = () => {
  const { t } = useTranslation();

  return (
    <div className="glass-panel p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-100">{t('recommendations')}</h2>
        <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
          <Zap size={12} />
          Rule-Base + AI Active
        </span>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors flex items-start gap-4 group">
            <div className="mt-1 p-2 rounded-lg bg-slate-900 shadow-inner border border-slate-800">
              {rec.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-slate-200 font-semibold text-sm">{rec.title}</h3>
              <p className="text-slate-400 text-sm mt-1 leading-relaxed">{rec.desc}</p>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg whitespace-nowrap">
              {rec.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationFeed;
