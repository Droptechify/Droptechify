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
// Lazy load admin components for better performance
const Admin = React.lazy(() => import('./components/Admin'));
import ServiceDetailPage from './components/ServiceDetailPage';
const AdminLogin = React.lazy(() => import('./components/AdminLogin'));

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentService, setCurrentService] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    // Check if admin is already authenticated from localStorage
    return localStorage.getItem('admin_authenticated') === 'true';
  });

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
    if (success) {
      setIsAdminAuthenticated(true);
      setCurrentPage('admin');
      // Set session storage to remember authentication
      sessionStorage.setItem('admin_authenticated', 'true');
      // Update URL without causing a page reload
      window.history.pushState(null, '', '/#admin');
    } else {
      setIsAdminAuthenticated(false);
      setCurrentPage('admin-login');
      sessionStorage.removeItem('admin_authenticated');
      alert('Invalid credentials. Please try again.');
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
      // Check if already authenticated
      if (sessionAuth === 'true') {
        setIsAdminAuthenticated(true);
        setCurrentPage('admin');
      } else {
        setCurrentPage('admin-login');
        setIsAdminAuthenticated(false);
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

  // Protect admin routes
  useEffect(() => {
    if (currentPage === 'admin' && !isAdminAuthenticated) {
      const sessionAuth = sessionStorage.getItem('admin_authenticated');
      if (sessionAuth !== 'true') {
        setCurrentPage('admin-login');
      }
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
        return (
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div></div>}>
            <AdminLogin onLogin={handleAdminLogin} />
          </React.Suspense>
        );
      case 'admin':
        return isAdminAuthenticated ? (
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div></div>}>
            <Admin />
          </React.Suspense>
        ) : (
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div></div>}>
            <AdminLogin onLogin={handleAdminLogin} />
          </React.Suspense>
        );
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  useEffect(() => {
    // Set page title and favicon
    document.title = 'DropTechify - Leading Software Development Company | Web & App Development';

    // Ensure favicon is loaded
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'shortcut icon';
    favicon.href = '/attached_assets/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(favicon);

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the '#'
      if (hash) {
        if (hash.startsWith('service-detail-')) {
          const serviceId = hash.replace('service-detail-', '');
          setCurrentPage('service-detail');
          setCurrentService(serviceId);
        } else if (hash === 'admin') {
          const sessionAuth = sessionStorage.getItem('admin_authenticated');
          if (sessionAuth === 'true') {
            setIsAdminAuthenticated(true);
            setCurrentPage('admin');
          } else {
            setCurrentPage('admin-login');
          }
        } else if (hash === 'admin-login') {
          setCurrentPage('admin-login');
        } else if (['home', 'services', 'about', 'contact', 'portfolio', 'privacy', 'terms', 'case-studies'].includes(hash)) {
          setCurrentPage(hash);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange(); // Check initial hash
    checkAdminAccess(); // Check for admin access

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
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
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-1 animate-page-transition">
        {renderPage()}
      </main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;