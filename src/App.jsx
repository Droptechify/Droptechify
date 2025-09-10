import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import CaseStudies from './components/CaseStudies';
import Admin from './components/Admin';
import ServiceDetailPage from './components/ServiceDetailPage';
import AdminLogin from './components/AdminLogin';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentService, setCurrentService] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handlePageChange = (page, serviceId = '') => {
    if (page === 'service-detail') {
      setCurrentService(serviceId);
    }
    setCurrentPage(page);

    // Update URL hash (but not for admin)
    if (page !== 'admin' && page !== 'admin-login' && page !== 'service-detail') {
      window.history.pushState(null, null, `#${page}`);
    } else if (page === 'service-detail') {
      window.history.pushState(null, null, `#services/${serviceId}`);
    }

    // Scroll to top for new pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminLogin = (success) => {
    setIsAdminAuthenticated(success);
    if (success) {
      setCurrentPage('admin');
    } else {
      setCurrentPage('admin-login'); // Redirect back to login if login fails
    }
  };

  // Check session authentication for admin
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('admin_authenticated');
    // Only redirect to login if we're not already authenticated in state and sessionStorage is also empty
    if ((currentPage === 'admin' || currentPage === 'admin-login') && !isAuthenticated && !isAdminAuthenticated) {
      setIsAdminAuthenticated(false);
      setCurrentPage('admin-login');
    }
  }, [currentPage, isAdminAuthenticated]);


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onPageChange={handlePageChange} />;
      case 'service-detail':
        return (
          <ServiceDetailPage
            service={currentService}
            onBack={() => handlePageChange('services')}
            onPageChange={handlePageChange}
          />
        );
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <AboutPage />; // Temporary, you can create Portfolio component later
      case 'privacy':
        return <PrivacyPolicy onBack={() => handlePageChange('home')} />;
      case 'terms':
        return <TermsConditions onBack={() => handlePageChange('home')} />;
      case 'case-studies':
        return <CaseStudies onPageChange={handlePageChange} />;
      case 'admin-login':
        return <AdminLogin onLogin={handleAdminLogin} />;
      case 'admin':
        return isAdminAuthenticated ? <Admin /> : <AdminLogin onLogin={handleAdminLogin} />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  useEffect(() => {
    // Handle hash-based navigation
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        if (hash.startsWith('services/')) {
          const serviceId = hash.split('/')[1];
          setCurrentPage('service-detail');
          setCurrentService(serviceId);
        } else if (['home', 'services', 'about', 'contact', 'portfolio', 'privacy', 'terms'].includes(hash)) {
          setCurrentPage(hash);
        }
      }
    };

    // Check for admin access - require proper authentication
    const checkAdminAccess = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const adminParam = urlParams.get('admin');
      const isAdminPath = window.location.pathname.includes('admin');
      const isAdminHash = window.location.hash === '#admin';
      const sessionAuth = sessionStorage.getItem('admin_authenticated');

      if (adminParam === 'true' || isAdminPath || isAdminHash) {
        // Check if already authenticated before forcing login
        if (!sessionAuth && !isAdminAuthenticated) {
          setCurrentPage('admin-login');
          setIsAdminAuthenticated(false);
        } else if (sessionAuth && !isAdminAuthenticated) {
          // Restore authentication state from sessionStorage
          setIsAdminAuthenticated(true);
          setCurrentPage('admin');
        }
        // Clear the admin param to prevent redirect loops
        if (adminParam === 'true') {
          const newUrl = new URL(window.location);
          newUrl.searchParams.delete('admin');
          window.history.replaceState(null, '', newUrl.pathname + newUrl.hash);
        }
      } else if (window.location.pathname.includes('admin-login') || window.location.hash === '#admin-login') {
        setCurrentPage('admin-login');
      }
    };

    // Listen for keyboard shortcut to access admin (Ctrl + Alt + A)
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        e.preventDefault();
        if (currentPage !== 'admin' && currentPage !== 'admin-login') {
          setCurrentPage('admin-login'); // Go to login first
          setIsAdminAuthenticated(false);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('keydown', handleKeyPress);

    handleHashChange(); // Check initial hash
    checkAdminAccess(); // Check for admin access

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentPage]); // Depend on currentPage to re-evaluate admin access if needed

  // Don't show header/footer for admin panel or admin login
  if (currentPage === 'admin' || currentPage === 'admin-login') {
    return (
      <div className="min-h-screen bg-gray-50">
        {renderPage()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="animate-page-transition">
        {renderPage()}
      </main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
