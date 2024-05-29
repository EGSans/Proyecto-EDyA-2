// src/config/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCYQYTaejop5vyBXH-zwoTDjDLL6HMQgU",
  authDomain: "cinehub-fea00.firebaseapp.com",
  projectId: "cinehub-fea00",
  storageBucket: "cinehub-fea00.appspot.com",
  messagingSenderId: "724059282446",
  appId: "1:724059282446:web:8df0d1e7ca5ce72e38b05f",
  measurementId: "G-5PBXTW787E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
