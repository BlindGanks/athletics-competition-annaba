import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN7lwWZMR0yDW3rd-hHjb67tO9wzCkjps",
  authDomain: "atheltics-competition-annaba.firebaseapp.com",
  projectId: "atheltics-competition-annaba",
  storageBucket: "atheltics-competition-annaba.appspot.com",
  messagingSenderId: "659497798143",
  appId: "1:659497798143:web:a10070821a2070f29cffca",
  measurementId: "G-PPJVVDY59B",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
