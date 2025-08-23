// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
export const db = getFirestore(app);