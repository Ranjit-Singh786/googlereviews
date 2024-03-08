import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';
import Home from './components/Home';

function App() {
  const [token, setToken] = useState(localStorage.getItem('accessToken'));
  const CLIENT_ID="459880402329-mt19aunan8bs692kgvhigrigh3ipe9vn.apps.googleusercontent.com";

  const getToken = async () => {
    console.log("ydyydydyydyd")
    const response = await gapi.auth.getToken();
    const accessToken = await response?.access_token;
    setToken(accessToken);
    localStorage.setItem('accessToken', accessToken);
  }

  useEffect(() => {
    const start = async () => {
      await gapi.client.init({
        clientId: CLIENT_ID,
        scope: ""
      });
      getToken();
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleLogin = () => {
    // console.log("yes working")
    if (!token) {
      gapi.auth2.getAuthInstance().signIn().then(() => getToken());
    }
  }

  const handleLogout = () => {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      setToken(null);
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
  }
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login login={handleLogin} />} />
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
