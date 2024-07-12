// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2F0YVQSAK_dyc0oS1y7bbvYz6ZvuSaHw",
  authDomain: "login-otp-proj.firebaseapp.com",
  projectId: "login-otp-proj",
  storageBucket: "login-otp-proj.appspot.com",
  messagingSenderId: "620817772774",
  appId: "1:620817772774:web:6710e0f6260d59fc424b27",
  measurementId: "G-8H6W6PT22W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)