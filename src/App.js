import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';
import Home from './components/Home';

function App() {
  // const navigate = useNavigate();
  const handleLogout = () => {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      // setToken(null);
      localStorage.removeItem('accessToken');
  
      // Clear sessionStorage
      sessionStorage.clear();
    
      // Clear all cookies
      document.cookie.split(";").forEach((cookie) => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      });
  
      // Clear all caches
      caches.keys().then((keys) => {
        keys.forEach((key) => {
          caches.delete(key);
        });
      });
    });
    window.location.href = 'http://localhost:3000/login';
  }
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login  />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home logoutComponent={<Logout onLogout={handleLogout} />}/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('accessToken');
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
