/* eslint-disable no-unused-vars */

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5IjjlhhSuS2Lqhom1rJ-RRsWPHHnbTlQ",
  authDomain: "full-stact-ecommerce.firebaseapp.com",
  projectId: "full-stact-ecommerce",
  storageBucket: "full-stact-ecommerce.appspot.com",
  messagingSenderId: "1028480865062",
  appId: "1:1028480865062:web:27bcc38597425571aca7e7",
  measurementId: "G-0ZQVVXRYG5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)