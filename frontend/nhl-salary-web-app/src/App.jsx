import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Players from './pages/Players';
import './styles/App.css';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/players" element={<Players />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 