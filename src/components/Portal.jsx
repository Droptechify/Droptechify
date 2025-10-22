import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';

function Portal({ onPageChange }) {
  const [videoUrl, setVideoUrl] = useState('');
  const [formData, setFormData] = useState({
    fullname: '',
    contact: '',
    company: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    loadVideoUrl();

    const handleStorageChange = () => {
      loadVideoUrl();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const loadVideoUrl = async () => {
    try {
      if (!db) {
        const localVideo = localStorage.getItem('portalVideoUrl') || '';
        setVideoUrl(localVideo);
        console.log('Loaded video URL from localStorage:', localVideo);
        return;
      }

      const docRef = doc(db, 'portalSettings', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const url = docSnap.data().videoUrl || '';
        setVideoUrl(url);
        localStorage.setItem('portalVideoUrl', url);
        console.log('Loaded video URL from Firebase:', url);
      } else {
        console.log('No video URL document found in Firebase');
        const localVideo = localStorage.getItem('portalVideoUrl') || '';
        setVideoUrl(localVideo);
      }
    } catch (error) {
      console.error('Error loading video URL:', error);
      const localVideo = localStorage.getItem('portalVideoUrl') || '';
      setVideoUrl(localVideo);
    }
  };

  const showSuccessPopup = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const messageData = {
        fullname: formData.fullname,
        contact: formData.contact,
        company: formData.company,
        email: formData.email || '',
        message: formData.message || '',
        date: new Date().toISOString(),
        timestamp: Date.now()
      };

      console.log('Submitting portal message:', messageData);

      const existingMessages = JSON.parse(localStorage.getItem('portalMessages') || '[]');
      messageData.id = Date.now().toString();
      existingMessages.push(messageData);
      localStorage.setItem('portalMessages', JSON.stringify(existingMessages));

      if (db) {
        try {
          const docRef = await addDoc(collection(db, 'portalMessages'), messageData);
          console.log('Portal message added with ID:', docRef.id);
          showSuccessPopup();
        } catch (error) {
          console.log('Firebase save failed, message saved locally:', error);
          showSuccessPopup();
        }
      } else {
        console.log('Saved to localStorage:', messageData);
        showSuccessPopup();
      }

      window.dispatchEvent(new Event('localStorageUpdate'));
      window.dispatchEvent(new Event('storage'));

      setFormData({
        fullname: '',
        contact: '',
        company: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);

      const messageData = {
        fullname: formData.fullname,
        contact: formData.contact,
        company: formData.company,
        email: formData.email || '',
        message: formData.message || '',
        date: new Date().toISOString(),
        timestamp: Date.now(),
        id: Date.now().toString()
      };

      const existingMessages = JSON.parse(localStorage.getItem('portalMessages') || '[]');
      existingMessages.push(messageData);
      localStorage.setItem('portalMessages', JSON.stringify(existingMessages));
      showSuccessPopup();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen" style={{ backgroundColor: '#f9fafb' }}>
      {/* Success Popup Modal */}
      {showSuccess && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={() => setShowSuccess(false)}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '450px',
              width: '90%',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              animation: 'slideUp 0.4s ease-out',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon */}
            <div
              style={{
                width: '80px',
                height: '80px',
                background: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                animation: 'scaleUp 0.5s ease-out',
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)'
              }}
            >
              <svg
                style={{
                  width: '50px',
                  height: '50px',
                  color: '#10b981'
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Success Text */}
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '12px',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
              }}
            >
              Success!
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.95)',
                lineHeight: '1.6',
                marginBottom: '8px'
              }}
            >
              Thank you for reaching out!
            </p>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.5'
              }}
            >
Your request has been received successfully. Our team will contact you shortly to discuss your website requirements            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                marginTop: '24px',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: '#fff',
                padding: '12px 32px',
                borderRadius: '50px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Video Section */}
      <div style={{ background: '#fff', padding: '40px 0', width: '100%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          {videoUrl && (videoUrl.includes('youtube.com/embed') || videoUrl.includes('youtu.be')) ? (
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              paddingBottom: '56.25%',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }}>
              <iframe
                src={videoUrl}
                title="Website Overview"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div style={{
              background: '#e5e7eb',
              borderRadius: '14px',
              padding: '48px',
              textAlign: 'center'
            }}>
              <svg style={{ width: '64px', height: '64px', margin: '0 auto 16px', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p style={{ color: '#6b7280', fontSize: '16px', fontWeight: '500' }}>No video available</p>
              <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '8px' }}>The admin will upload a video soon</p>
            </div>
          )}
        </div>
      </div>

      {/* Form Section */}
      <div style={{ padding: '40px 20px 60px' }}>
        <div style={{
          maxWidth: '750px',
          margin: '0 auto',
          background: '#fff',
          padding: '45px 35px',
          borderRadius: '18px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '25px',
            fontWeight: 600,
            color: '#1a1a1a',
            fontSize: '24px'
          }}>
            Request a Website / Project Information
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ fontWeight: 500, color: '#444', display: 'block', marginBottom: '8px' }}>
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.fullname}
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  fontSize: '15px'
                }}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label style={{ fontWeight: 500, color: '#444', display: 'block', marginBottom: '8px' }}>
                WhatsApp / WeChat Number
              </label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  fontSize: '15px'
                }}
                placeholder="+1xxxxxxxxxx or your WeChat ID"
              />
            </div>

            <div>
              <label style={{ fontWeight: 500, color: '#444', display: 'block', marginBottom: '8px' }}>
                Company Name
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  fontSize: '15px'
                }}
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <label style={{ fontWeight: 500, color: '#444', display: 'block', marginBottom: '8px' }}>
                Email Address (optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  fontSize: '15px'
                }}
                placeholder="example@company.com"
              />
            </div>

            <div>
              <label style={{ fontWeight: 500, color: '#444', display: 'block', marginBottom: '8px' }}>
                Project Details
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  fontSize: '15px',
                  resize: 'vertical',
                  minHeight: '100px'
                }}
                placeholder="Write a few lines about your project or idea..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                background: submitting ? '#ccc' : '#007bff',
                color: '#fff',
                border: 'none',
                padding: '14px',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: submitting ? 'not-allowed' : 'pointer',
                fontSize: '15px'
              }}
            >
              {submitting ? 'Submitting...' : 'Submit Information'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes scaleUp {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Portal;
