import React, { useState, useEffect } from 'react';
import { Clock, Lightbulb, ArrowRight, ExternalLink, Calendar, User } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function CaseStudies({ onPageChange }) {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    try {
      if (!db) {
        const localStudies = JSON.parse(localStorage.getItem('caseStudies') || '[]');
        setCaseStudies(localStudies);
        setLoading(false);
        return;
      }

      const querySnapshot = await getDocs(collection(db, 'caseStudies'));
      const studiesData = [];
      querySnapshot.forEach((doc) => {
        studiesData.push({ id: doc.id, ...doc.data() });
      });
      
      setCaseStudies(studiesData);
      
      // Also save to localStorage as backup
      localStorage.setItem('caseStudies', JSON.stringify(studiesData));
    } catch (error) {
      console.error('Error loading case studies:', error);
      // Fallback to localStorage
      const localStudies = JSON.parse(localStorage.getItem('caseStudies') || '[]');
      setCaseStudies(localStudies);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Case <span className="text-sky-400">Studies</span>
            </h1>
            <div className="w-20 h-1 bg-sky-400 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Amazing projects are on the way. Stay tuned for our success stories!
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 animate-slide-up">
              <div className="mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock size={64} className="text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Coming Soon
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We're currently working on showcasing our most impressive projects and success stories.
                  Our case studies will demonstrate how we've helped businesses transform their digital presence
                  and achieve remarkable results.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-sky-50 rounded-2xl p-6">
                  <div className="text-sky-500 mb-4">
                    <Lightbulb size={32} className="mx-auto" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Innovative Solutions</h3>
                  <p className="text-gray-600 text-sm">Cutting-edge technology implementations</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <div className="text-green-500 mb-4">
                    <ArrowRight size={32} className="mx-auto" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Measurable Results</h3>
                  <p className="text-gray-600 text-sm">Proven impact on business growth</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="text-purple-500 mb-4">
                    <Clock size={32} className="mx-auto" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">On-Time Delivery</h3>
                  <p className="text-gray-600 text-sm">Projects completed within timeline</p>
                </div>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-400 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading case studies...</p>
                </div>
              )}

              {/* Case Studies Display */}
              {!loading && caseStudies.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Recent Projects</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {caseStudies.map((study, index) => (
                      <div key={study.id} className="bg-white rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        {study.image && (
                          <div className="mb-4 overflow-hidden rounded-xl">
                            <img 
                              src={study.image} 
                              alt={study.title}
                              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`w-3 h-3 rounded-full ${
                            study.category === 'Web' ? 'bg-blue-500' :
                            study.category === 'App' ? 'bg-green-500' :
                            study.category === 'SaaS' ? 'bg-purple-500' :
                            study.category === 'Custom' ? 'bg-orange-500' :
                            'bg-gray-500'
                          }`}></span>
                          <span className="text-sm font-medium text-gray-600">{study.category}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg hover:text-sky-600 transition-colors">{study.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <User size={12} />
                            <span>{study.client}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{new Date(study.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        {study.link && (
                          <a 
                            href={study.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold text-sm transition-colors"
                          >
                            View Project <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* No Case Studies Found */}
              {!loading && caseStudies.length === 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-100">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">W</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Website Development</h3>
                    <p className="text-gray-600 text-sm mb-4">Coming Soon: E-commerce platform case study with 300% conversion increase</p>
                    <div className="text-xs text-blue-600 font-semibold">Expected: Next Month</div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Mobile App Success</h3>
                    <p className="text-gray-600 text-sm mb-4">Coming Soon: Healthcare app with 50k+ downloads and 4.8★ rating</p>
                    <div className="text-xs text-green-600 font-semibold">Expected: Next Month</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">SaaS Platform</h3>
                    <p className="text-gray-600 text-sm mb-4">Coming Soon: B2B automation tool serving 1000+ businesses</p>
                    <div className="text-xs text-purple-600 font-semibold">Expected: Next Month</div>
                  </div>
                </div>
              )}

              <div className="text-center">
                <p className="text-gray-500 mb-6">
                  In the meantime, let's discuss how we can help with your project
                </p>
                <button
                  onClick={() => onPageChange('contact')}
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;