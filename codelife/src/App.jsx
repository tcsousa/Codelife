import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DNABasics from './pages/DNABasics';
import GeneticEngineering from './pages/GeneticEngineering';
import DragonProject from './pages/DragonProject';
import OceanLab from './pages/OceanLab';
import InteractiveZone from './pages/InteractiveZone';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dna-basics" element={<DNABasics />} />
            <Route path="/genetic-engineering" element={<GeneticEngineering />} />
            <Route path="/dragon-project" element={<DragonProject />} />
            <Route path="/ocean-lab" element={<OceanLab />} />
            <Route path="/interactive-zone" element={<InteractiveZone />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

