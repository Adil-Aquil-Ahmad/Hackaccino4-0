import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import FormsLanding from './components/FormsLanding';
import CommunityPartnerPage from './pages/CommunityPartnerPage';
import SponsorPage from './pages/SponsorPage';
import JudgePage from './pages/JudgePage';

function AppContent() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormsLanding />} />
        <Route path="/community-partner" element={<CommunityPartnerPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/judge" element={<JudgePage />} />
      </Routes>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
