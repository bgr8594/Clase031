import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARzaIieXEidG42NFHxF5YSbH3GZ1P5WhA",
  authDomain: "pia-appmov-c0496.firebaseapp.com",
  projectId: "pia-appmov-c0496",
  storageBucket: "pia-appmov-c0496.appspot.com",
  messagingSenderId: "997276760045",
  appId: "1:997276760045:web:f4e58c5aad6eedf99f59e4",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
