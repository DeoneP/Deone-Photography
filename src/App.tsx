import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { PortfolioItem, Category, PricingPackage, Testimonial } from './types';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Investment from './pages/Investment';
import Contact from './pages/Contact';
import ClientLogin from './pages/ClientLogin';
import AdminDashboard from './pages/AdminDashboard';

import ClientGallery from './pages/ClientGallery';
import FluidBackground from './components/FluidBackground';
import AIChat from './components/AIChat';
import CustomCursor from './components/CustomCursor';

// ScrollToTop component to handle scroll reset on route change
const ScrollToTop = () => {
  // Handled by ScrollRestoration from react-router-dom v6.4+, 
  // but simple functional component here for standard BrowserRouter usage if needed
  // Actually standard ScrollRestoration isn't available inside BrowserRouter in the same way as RouterProvider, 
  // so let's stick to a manual scroll effect or use a wrapper.
  // For simplicity with BrowserRouter:

  // We will assume standard behavior or use a useEffect in Layout/Wrapper.
  return null;
}

const App: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* Global Components */}
      <CustomCursor />
      <FluidBackground />
      <AIChat />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/gallery/:clientId" element={<ClientGallery />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
