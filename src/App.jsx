import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import CaseStudies from './components/CaseStudies';
import ServiceDetailPage from './components/ServiceDetailPage';

const Admin = React.lazy(() => import('./components/Admin'));
const AdminLogin = React.lazy(() => import('./components/AdminLogin'));

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    () => localStorage.getItem('admin_authenticated') === 'true'
  );

  const handleAdminLogin = (success) => {
    if (success) {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
    } else {
      setIsAdminAuthenticated(false);
      sessionStorage.removeItem('admin_authenticated');
      alert('Invalid credentials. Please try again.');
    }
  };

  useEffect(() => {
    document.title = 'DropTechify - Leading Software Development Company | Web & App Development';
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'shortcut icon';
    favicon.href = '/attached_assets/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(favicon);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <ServicesPage />
            </Layout>
          }
        />
        <Route
          path="/services/:id"
          element={
            <Layout>
              <ServiceDetailPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <TermsConditions />
            </Layout>
          }
        />
        <Route
          path="/case-studies"
          element={
            <Layout>
              <CaseStudies />
            </Layout>
          }
        />
        <Route
          path="/admin-login"
          element={
            <Suspense fallback={<Loader />}>
              <AdminLogin onLogin={handleAdminLogin} />
            </Suspense>
          }
        />
        <Route
          path="/admin"
          element={
            isAdminAuthenticated ? (
              <Suspense fallback={<Loader />}>
                <Admin />
              </Suspense>
            ) : (
              <Suspense fallback={<Loader />}>
                <AdminLogin onLogin={handleAdminLogin} />
              </Suspense>
            )
          }
        />
      </Routes>
    </Router>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 animate-page-transition">{children}</main>
      <Footer />
    </div>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
    </div>
  );
}

export default App;
