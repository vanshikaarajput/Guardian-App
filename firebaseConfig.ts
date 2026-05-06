import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEL4wBDHpfFpmJ_saiGhNGxddYNbk4hpw",
  authDomain: "guardianapp1.firebaseapp.com",
  projectId: "guardianapp1",
  storageBucket: "guardianapp1.firebasestorage.app",
  messagingSenderId: "895210745994",
  appId: "1:895210745994:web:5c3a0bff954fff0b0bbd73",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);