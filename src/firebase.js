import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgICX7-ExyZCngKAfHMWtRlp_ftY1QZ-o",
  authDomain: "arcane-talent-358010.firebaseapp.com",
  projectId: "arcane-talent-358010",
  storageBucket: "arcane-talent-358010.appspot.com",
  messagingSenderId: "413949019652",
  appId: "1:413949019652:web:c60e3396660e2e99ecd751",
  measurementId: "G-GTE294QKXS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
