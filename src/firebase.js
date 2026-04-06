// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, setAnalyticsCollectionEnabled } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5RMXno2kl7-H5nWazrFJbMwb-hEGWNuE",
  authDomain: "dev-portfolio-cf631.firebaseapp.com",
  projectId: "dev-portfolio-cf631",
  storageBucket: "dev-portfolio-cf631.firebasestorage.app",
  messagingSenderId: "335861886151",
  appId: "1:335861886151:web:9e28fa74a183c4346e62e2",
  measurementId: "G-845DFG4TWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Analytics is initialized but collection is disabled by default (GDPR).
// It is only enabled after the user explicitly accepts cookies.
let analytics = null;
try {
  analytics = getAnalytics(app);
  setAnalyticsCollectionEnabled(analytics, false);
} catch {
  // analytics unavailable (e.g. SSR)
}

export function enableAnalytics() {
  if (analytics) setAnalyticsCollectionEnabled(analytics, true);
}

export function disableAnalytics() {
  if (analytics) setAnalyticsCollectionEnabled(analytics, false);
}