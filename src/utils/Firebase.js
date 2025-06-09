// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClGeuAuf_HundsWt-GBbKBoNEpqr4kRb4",
  authDomain: "netflixgpt-e5299.firebaseapp.com",
  projectId: "netflixgpt-e5299",
  storageBucket: "netflixgpt-e5299.firebasestorage.app",
  messagingSenderId: "422997956274",
  appId: "1:422997956274:web:1e598a043f6a3bdbc55bab",
  measurementId: "G-F8NHW8WBMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const ANALYTICS = getAnalytics(app);