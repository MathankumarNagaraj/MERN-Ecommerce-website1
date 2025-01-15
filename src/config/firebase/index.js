import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlyajtMFdJKE0cZdfM3UXViIw8ubIv2b8",
  authDomain: "mern-e-commerce-website.firebaseapp.com",
  projectId: "mern-e-commerce-website",
  storageBucket: "mern-e-commerce-website.firebasestorage.app",
  messagingSenderId: "21682764537",
  appId: "1:21682764537:web:db0f1f9de804da5fb78028",
  measurementId: "G-NMSK1Q8X32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
export const auth = getAuth(app);

// Create Google authentication provider
export const provider = new GoogleAuthProvider();
