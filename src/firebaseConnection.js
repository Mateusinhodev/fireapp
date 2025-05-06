// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBISNPpFRWjZwyVtgm7m_f_vuFeh5BEWcA",
  authDomain: "curso-firebase-5e182.firebaseapp.com",
  projectId: "curso-firebase-5e182",
  storageBucket: "curso-firebase-5e182.firebasestorage.app",
  messagingSenderId: "952380263739",
  appId: "1:952380263739:web:3da735a87e2aee8fbabb1e",
  measurementId: "G-K0Z7FWLCG2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
