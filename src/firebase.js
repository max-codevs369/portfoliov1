import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk5xz75z_S1E8ztY2yCo4G4F8Uz93oJBI",
  authDomain: "portfolio-af942.firebaseapp.com",
  projectId: "portfolio-af942",
  storageBucket: "portfolio-af942.firebasestorage.app",
  messagingSenderId: "6561603142",
  appId: "1:6561603142:web:cd0cf832662ec9954c3447",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);