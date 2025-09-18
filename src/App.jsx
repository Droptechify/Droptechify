import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import CaseStudies from './components/CaseStudies';

const Admin = React.lazy(() => import('./components/Admin'));
const AdminLogin = React.lazy(() => import('./components/AdminLogin'));
const ServiceDetailPage = React.lazy(() => import('./components/ServiceDetailPage'));

// Service detail wrapper (URL param se ID lena)
function ServiceDetailWrapper() {
  const { id } = useParams();
  return <ServiceDetailPage service={id} />;
}

function AppContent() {
  const navigate = useNavigate();
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    () => sessionStorage.getItem('admin_authenticated') === 'true'
  );

  const handleAdminLogin = (success) => {
    if (success) {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      navigate('/admin');
    } else {
      setIsAdminAuthenticated(false);
      sessionStorage.removeItem('admin_authenticated');
      navigate('/admin-login');
      alert('Invalid credentials. Please try again.');
    }
  };

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
    <Routes>
      {/* Admin Login */}
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

      {/* Admin Panel */}
      <Route
        path="/admin"
        element={
          isAdminAuthenticated ? (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
                </div>
              }
            >
              <Admin />
            </Suspense>
          ) : (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
                </div>
              }
            >
              <AdminLogin onLogin={handleAdminLogin} />
            </Suspense>
          )
        }
      />

      {/* Public Website */}
      <Route
        path="*"
        element={
          <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-1 animate-page-transition">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:id" element={<ServiceDetailWrapper />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/portfolio" element={<AboutPage />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsConditions />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        }
      />
    </Routes>
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
