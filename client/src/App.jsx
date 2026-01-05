import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chat from './components/Chat';
import Lessons from './components/Lessons';
import Scenarios from './components/Scenarios';
import { BookOpen, MessageCircle, Target } from 'lucide-react';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">
            <span className="nav-icon">🤖</span>
            <h1>AI PM Coach</h1>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              <MessageCircle size={20} />
              <span>Chat</span>
            </Link>
            <Link to="/lessons" className="nav-link">
              <BookOpen size={20} />
              <span>Lessons</span>
            </Link>
            <Link to="/scenarios" className="nav-link">
              <Target size={20} />
              <span>Practice</span>
            </Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/scenarios" element={<Scenarios />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
