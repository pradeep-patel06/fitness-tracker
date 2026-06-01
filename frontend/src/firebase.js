import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyA_lHSBtmN9GjLFjqTWZ_5HV4gGoBtDtVQ",

  authDomain:
    "fitness-tracker-b3899.firebaseapp.com",

  projectId:
    "fitness-tracker-b3899",

  storageBucket:
    "fitness-tracker-b3899.firebasestorage.app",

  messagingSenderId:
    "631217415160",

  appId:
    "1:631217415160:web:7b37cbc21907c81133ac0d",

  measurementId:
    "G-2F6D4QSR6N"
};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);

export const provider =
  new GoogleAuthProvider();