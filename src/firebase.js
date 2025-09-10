// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator, enableNetwork, disableNetwork } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration - using environment variables for security
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Validate Firebase configuration
const validateConfig = () => {
  const required = ['VITE_FIREBASE_API_KEY', 'VITE_FIREBASE_PROJECT_ID', 'VITE_FIREBASE_AUTH_DOMAIN'];
  const missing = required.filter(key => !import.meta.env[key]);

  if (missing.length > 0) {
    console.error('Missing Firebase environment variables:', missing);
    return false;
  }
  return true;
};

// Initialize Firebase only if config is valid
let app, db, storage;

if (validateConfig()) {
  try {
    app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore with settings for better offline support
    db = getFirestore(app);

    // Initialize Firebase Storage
    storage = getStorage(app);

    console.log('Firebase initialized successfully');

    // For development, you can uncomment the following lines to use emulator
    // if (import.meta.env.DEV && import.meta.env.VITE_USE_EMULATOR) {
    //   connectFirestoreEmulator(db, 'localhost', 8080);
    // }

  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
} else {
  console.error('Firebase configuration is invalid. Please check your environment variables.');
}

// Helper function to retry Firestore operations
export const retryFirestoreOperation = async (operation, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const result = await operation();
      return result;
    } catch (error) {
      console.error(`Firestore operation attempt ${i + 1} failed:`, error);

      if (i === maxRetries - 1) {
        throw error;
      }

      // Wait before retrying (exponential backoff)
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

export { db, storage };
