// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdxfULdPC5FkiKjBR6VWXbD3cPTImr-t0",
  authDomain: "netflix-f83b7.firebaseapp.com",
  projectId: "netflix-f83b7",
  storageBucket: "netflix-f83b7.appspot.com",
  messagingSenderId: "1046840988471",
  appId: "1:1046840988471:web:f2f4b2ab515c16577d80b2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
