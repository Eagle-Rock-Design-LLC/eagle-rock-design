// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0D-hnSAZuCRYxbAVdH3fpZzllXsDDG8s",
  authDomain: "eagle-rock-design-llc.firebaseapp.com",
  databaseURL: "https://eagle-rock-design-llc-default-rtdb.firebaseio.com",
  projectId: "eagle-rock-design-llc",
  storageBucket: "eagle-rock-design-llc.appspot.com",
  messagingSenderId: "569454737547",
  appId: "1:569454737547:web:cd9b0d7800e8c6adf47c8e",
  measurementId: "G-BEP18EZTNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);        // Firebase Authentication
export const db = getFirestore(app);     // Firestore Database
export const analytics = getAnalytics(app); // Firebase Analytics
