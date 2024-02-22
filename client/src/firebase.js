// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3a19c.firebaseapp.com",
  projectId: "mern-blog-3a19c",
  storageBucket: "mern-blog-3a19c.appspot.com",
  messagingSenderId: "859888795409",
  appId: "1:859888795409:web:e44e7d6e1e9fdbc54696b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);