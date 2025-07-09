// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ✅ ADD THIS

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4DQMPVtEUukES0N804Xesu33K94wxFas",
  authDomain: "testimonial-app-40902.firebaseapp.com",
  projectId: "testimonial-app-40902",
  storageBucket: "testimonial-app-40902.firebasestorage.app",
  messagingSenderId: "644414966275",
  appId: "1:644414966275:web:e059c0b2eaeb15f4a05c36",
  measurementId: "G-JKTWKQ70SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firestore and export it
const db = getFirestore(app);

export { db }; // ✅ Named export
