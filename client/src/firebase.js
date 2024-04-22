// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-54142.firebaseapp.com",
  projectId: "blog-app-54142",
  storageBucket: "blog-app-54142.appspot.com",
  messagingSenderId: "88707654581",
  appId: "1:88707654581:web:f21b92a986b420c135effc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);