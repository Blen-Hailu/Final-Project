/* FirebaseConfig.js */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkl16MJ4uFw1tH9dwlSHZH_S1P7QLMI5o",
  authDomain:"zestiikitchens-7c56d.firebaseapp.com",
  projectId: "zestiikitchens-7c56d",
  storageBucket:"zestiikitchens-7c56d.appspot.com",
  messagingSenderId:"333355157406",
  appId:"1:333355157406:web:195f59c397387cb3d0388f",
  measurementId:"G-PR9P9PSLT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);