// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACFM4I6EkjGwyaAFEY4ouvKTEvZSuPcKM",
  authDomain: "resturant-ecommerce.firebaseapp.com",
  projectId: "resturant-ecommerce",
  storageBucket: "resturant-ecommerce.appspot.com",
  messagingSenderId: "737536231311",
  appId: "1:737536231311:web:be642e8b61230a3a81adfa",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
