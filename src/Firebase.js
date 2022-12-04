// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3T5C_nbvRG6kFAH6CBuEfIi8_tS6ZK8A",
  authDomain: "kotibet.firebaseapp.com",
  projectId: "kotibet",
  storageBucket: "kotibet.appspot.com",
  messagingSenderId: "935853094554",
  appId: "1:935853094554:web:c414925d8faeeaa703d123",
  measurementId: "G-PEH9WG8J7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
