import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "new-gpt-87273.firebaseapp.com",
    projectId: "new-gpt-87273",
    storageBucket: "new-gpt-87273.appspot.com",
    messagingSenderId: "937225445774",
    appId: "1:937225445774:web:d0950204e6caccd98844df"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)