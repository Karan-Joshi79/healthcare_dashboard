// App.jsx
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app-container">
      
      
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;