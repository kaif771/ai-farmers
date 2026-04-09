import React from 'react';
import { useTranslation } from 'react-i18next';
import WeatherWidget from '../components/WeatherWidget';
import PredictiveChart from '../components/PredictiveChart';
import RecommendationFeed from '../components/RecommendationFeed';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 pl-1">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">{t('dashboard') || 'Farm Overview'}</h2>
        <p className="text-slate-400">Monitoring crop health and resource optimization in real-time.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <WeatherWidget />
        </div>
        <div className="lg:col-span-2">
          <PredictiveChart />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <RecommendationFeed />
      </div>
    </div>
  );
};

export default Dashboard;
