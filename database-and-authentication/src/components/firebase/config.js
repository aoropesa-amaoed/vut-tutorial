import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAxiL-zcHycQUUuPKO4rCrK5sPR2krVFho",
  authDomain: "vue-tutorial-beac0.firebaseapp.com",
  projectId: "vue-tutorial-beac0",
  storageBucket: "vue-tutorial-beac0.firebasestorage.app",
  messagingSenderId: "120878354874",
  appId: "1:120878354874:web:90cb451a5ba3379ce74d83",
  measurementId: "G-E667F9KLZV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const auth = getAuth();

export { db, auth };
