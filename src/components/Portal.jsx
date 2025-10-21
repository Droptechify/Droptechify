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

  // ✅ ADD THIS useEffect TO SET CSP HEADER DYNAMICALLY
  useEffect(() => {
    const nonce = btoa(Date.now().toString()); // create a nonce
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' https://www.gstatic.com https://www.googleapis.com https://www.youtube.com https://www.youtube-nocookie.com https://cdnjs.cloudflare.com 'nonce-${nonce}';
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src https://fonts.gstatic.com;
      frame-src https://www.youtube.com https://www.youtube-nocookie.com;
    `.replace(/\s+/g, ' ');

    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);
  // ✅ END CSP FIX

  useEffect(() => {
    loadVideoUrl();

    const handleStorageChange = () => {
      loadVideoUrl();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const loadVideoUrl = async () => {
    try {
      if (!db) {
        const localVideo = localStorage.getItem('portalVideoUrl') || '';
        setVideoUrl(localVideo);
        return;
      }

      const docRef = doc(db, 'portalSettings', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const url = docSnap.data().videoUrl || '';
        setVideoUrl(url);
        localStorage.setItem('portalVideoUrl', url);
      } else {
        const localVideo = localStorage.getItem('portalVideoUrl') || '';
        setVideoUrl(localVideo);
      }
    } catch (error) {
      console.error('Error loading video URL:', error);
      const localVideo = localStorage.getItem('portalVideoUrl') || '';
      setVideoUrl(localVideo);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const messageData = {
        ...formData,
        date: new Date().toISOString(),
        timestamp: Date.now()
      };

      const existingMessages = JSON.parse(localStorage.getItem('portalMessages') || '[]');
      messageData.id = Date.now().toString();
      existingMessages.push(messageData);
      localStorage.setItem('portalMessages', JSON.stringify(existingMessages));

      if (db) {
        await addDoc(collection(db, 'portalMessages'), messageData);
        alert('Thank you! Your message has been submitted successfully.');
      } else {
        alert('Message saved locally!');
      }

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
      alert('Error saving message!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen" style={{ backgroundColor: '#f9fafb' }}>
      {/* your UI remains the same */}
      {/* ... everything below unchanged ... */}
    </div>
  );
}

export default Portal;
