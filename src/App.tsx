import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Sessions from './pages/Sessions';
import SessionInsights from './pages/SessionInsights';
import DetailedInsights from './components/DetailedInsights';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/sessions/:sessionId" element={<SessionInsights />} />
            <Route path="/sessions/:sessionId/insights/:insightCategory" element={<DetailedInsights />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;