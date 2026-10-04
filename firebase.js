import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';
const firebaseConfig = {

  apiKey: "AIzaSyClTcMw_VSr6ZyWac_5y41qBMaHKqE4468",

  authDomain: "van-4a7a6.firebaseapp.com",

  projectId: "van-4a7a6",

  storageBucket: "van-4a7a6.firebasestorage.app",

  messagingSenderId: "158111205378",

  appId: "1:158111205378:web:b1d7179eccb8ff9775ff1b",

  measurementId: "G-PW6MTB75EP"

};
const app=initializeApp(firebaseConfig); export const auth=getAuth(app); export const db=getFirestore(app);
