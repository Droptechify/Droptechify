import React, { useState, useEffect } from 'react';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [initializing, setInitializing] = useState(true);

  // Initialize default admin credentials in Firestore if they don't exist
  useEffect(() => {
    initializeAdminCredentials();
  }, []);

  const initializeAdminCredentials = async () => {
    try {
      setInitializing(true);
      const adminDocRef = doc(db, 'admin', 'credentials');
      const adminDoc = await getDoc(adminDocRef);

      if (!adminDoc.exists()) {
        // Create default admin credentials
        const defaultCredentials = {
          username: 'admin@droptechify.com',
          password: 'DropTech2024@Secure!',
          createdAt: new Date().toISOString(),
          lastUpdated: new Date().toISOString()
        };

        await setDoc(adminDocRef, defaultCredentials);
        console.log('Default admin credentials created');
      }
    } catch (error) {
      console.error('Error initializing admin credentials:', error);
      setError('Failed to initialize admin system. Please try again.');
    } finally {
      setInitializing(false);
    }
  };

  const verifyCredentials = async (username, password) => {
    try {
      const adminDocRef = doc(db, 'admin', 'credentials');
      const adminDoc = await getDoc(adminDocRef);

      if (adminDoc.exists()) {
        const storedCredentials = adminDoc.data();
        return storedCredentials.username === username && storedCredentials.password === password;
      }
      return false;
    } catch (error) {
      console.error('Error verifying credentials:', error);
      throw new Error('Authentication failed. Please check your connection.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const isValid = await verifyCredentials(credentials.username, credentials.password);

      if (isValid) {
        // Store session info
        sessionStorage.setItem('admin_authenticated', 'true');
        sessionStorage.setItem('admin_login_time', new Date().toISOString());
        onLogin(true);
      } else {
        setError('Invalid username or password');
        onLogin(false);
      }
    } catch (error) {
      setError(error.message);
      onLogin(false);
    } finally {
      setLoading(false);
    }
  };

  if (initializing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-sky-500 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Initializing Admin System</h2>
              <p className="text-gray-600">Please wait...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-sky-500 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-400 to-sky-500 p-8 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-sky-500" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Login</h1>
            <p className="text-sky-100 mt-2">DropTechify Dashboard</p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Username / Email
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-400 hover:bg-sky-500 disabled:bg-gray-400 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p className="text-gray-400">Secure authentication via Firestore</p>
              <p className="text-xs text-gray-300 mt-1">Default: admin@droptechify.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
