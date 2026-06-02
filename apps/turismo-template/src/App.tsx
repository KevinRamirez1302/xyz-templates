import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import PublicSite from './pages/PublicSite';
import RestaurantePage from './pages/RestaurantePage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('lapalma_admin_auth') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin" />;
};

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicSite />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/restaurante" element={<RestaurantePage />} />
          {/* Catch-all to show beautiful 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
