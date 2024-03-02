import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './components/ListPage';
import Dashboard from './components/Dashboard';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<ListPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
