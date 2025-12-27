// firebase.js  (repo kökü)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsOde5aNv6HnNJMXtPLlGisXF_zXp3E5o",
  authDomain: "diyarbakirtenis-254b1.firebaseapp.com",
  projectId: "diyarbakirtenis-254b1",
  storageBucket: "diyarbakirtenis-254b1.firebasestorage.app",
  messagingSenderId: "664290250808",
  appId: "1:664290250808:web:bd0ff27083ea50f145d6cd",
  measurementId: "G-LL1R6KD89Q",
};

const app = initializeApp(firebaseConfig);

// ESKİ DEĞİŞKENLERİ KORUYORUZ (kolay geçiş için)
window.firebaseAuth = getAuth(app);
window.firebaseDb = getFirestore(app);

// window.firebaseUtils KALDIRILDI ✅
// Onun yerine: window.firebase
window.firebase = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  firebaseSignOut,
  onAuthStateChanged,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
};
