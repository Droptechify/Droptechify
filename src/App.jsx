import React, { useState, useEffect, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams
} from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import CaseStudies from './components/CaseStudies';

// Lazy Loaded Components
const Admin = React.lazy(() => import('./components/Admin'));
const AdminLogin = React.lazy(() => import('./components/AdminLogin'));
import ServiceDetailPage from './components/ServiceDetailPage';

function ServiceDetailWrapper() {
  const { id } = useParams();
  return <ServiceDetailPage service={id} />;
}

function AppContent() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    () => sessionStorage.getItem('admin_authenticated') === 'true'
  );
  const navigate = useNavigate();

  // Admin Login Handler
  const handleAdminLogin = (success) => {
    if (success) {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      navigate('/admin');
    } else {
      setIsAdminAuthenticated(false);
      sessionStorage.removeItem('admin_authenticated');
      alert('Invalid credentials. Please try again.');
      navigate('/admin-login');
    }
  };

  // Favicon & Title
  useEffect(() => {
    document.title =
      'DropTechify - Leading Software Development Company | Web & App Development';
    const favicon =
      document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'shortcut icon';
    favicon.href = '/attached_assets/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(favicon);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Routes */}
      <main className="flex-1 animate-page-transition">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-detail/:id" element={<ServiceDetailWrapper />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/case-studies" element={<CaseStudies />} />

          {/* Admin Pages */}
          <Route
            path="/admin-login"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
                  </div>
                }
              >
                <AdminLogin onLogin={handleAdminLogin} />
              </Suspense>
            }
          />
          <Route
            path="/admin"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
                  </div>
                }
              >
                {isAdminAuthenticated ? (
                  <Admin />
                ) : (
                  <AdminLogin onLogin={handleAdminLogin} />
                )}
              </Suspense>
            }
          />

          {/* 404 / fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
