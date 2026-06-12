import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey:
    "AIzaSyCuXVVxy7iRSpJc0D0TdOdYLDdrVnNUzuo",

  authDomain:
    "compressits-6fdff.firebaseapp.com",

  projectId:
    "compressits-6fdff",

  storageBucket:
    "compressits-6fdff.firebasestorage.app",

  messagingSenderId:
    "548973263238",

  appId:
    "1:548973263238:web:59cb5562d4061ba7f0d407",

  measurementId:
    "G-DZ4W76FEFJ"
};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);