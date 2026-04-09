import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Weather from './pages/Weather';
import YieldPrediction from './pages/YieldPrediction';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B1120] text-slate-200 flex font-sans">
        <Sidebar />
        <div className="ml-64 flex-1 flex flex-col relative overflow-hidden">
          {/* Dynamic ambient background blobs */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none"></div>
          
          <Navbar />
          
          <main className="flex-1 overflow-y-auto p-8 relative z-10 scrollbar-hide">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/predictions" element={<YieldPrediction />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
