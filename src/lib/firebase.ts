import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYSAOb-xNeLlTs--h9-Gg_LW_2_c04vgA",
  authDomain: "wooma-488f1.firebaseapp.com",
  projectId: "wooma-488f1",
  storageBucket: "wooma-488f1.firebasestorage.app",
  messagingSenderId: "115679750699",
  appId: "1:115679750699:web:04740cba55db586036186e",
  measurementId: "G-RWRPM7L901"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);