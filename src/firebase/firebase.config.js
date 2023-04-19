// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4gyilPD-qLWkuuUjpjq0tmyj9JuYfZRA",
  authDomain: "phero-practice-project.firebaseapp.com",
  projectId: "phero-practice-project",
  storageBucket: "phero-practice-project.appspot.com",
  messagingSenderId: "84175125328",
  appId: "1:84175125328:web:fef3bf06967cc383ff8a55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;