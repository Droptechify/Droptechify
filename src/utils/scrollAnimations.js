
// Scroll-based animation utilities
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all fade elements
  const fadeElements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up, .service-section');
  fadeElements.forEach((el) => observer.observe(el));

  return observer;
};

// Initialize animations when page loads
export const startScrollAnimations = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
};
