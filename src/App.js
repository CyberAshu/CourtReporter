import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import BillManagement from './pages/BillManagement';
import SearchBills from './pages/SearchBills';
import Notifications from './pages/Notifications';
import FilesDirectory from './pages/FilesDirectory';
import HolidayPlanner from './pages/HolidayPlanner';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({
    name: 'Tarun Goud',
    email: 'tarun@gmail.com',
    role: 'Court Reporter',
    avatar: null
  });

  useEffect(() => {
    // Check if user is logged in from localStorage
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (credentials) => {
    // Simple authentication logic - in real app, this would be API call
    if (credentials.email && credentials.password) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
          onLogout={handleLogout}
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header 
            setSidebarOpen={setSidebarOpen}
            user={user}
            onLogout={handleLogout}
          />
          
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/bills" element={<BillManagement />} />
              <Route path="/search-bills" element={<SearchBills />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/files" element={<FilesDirectory />} />
              <Route path="/holidays" element={<HolidayPlanner />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
