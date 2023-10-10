// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIyYeHbTp3ospxfKmCGYwG6ViULAsmCdQ",
  authDomain: "e-commerce-6418c.firebaseapp.com",
  projectId: "e-commerce-6418c",
  storageBucket: "e-commerce-6418c.appspot.com",
  messagingSenderId: "577322910149",
  appId: "1:577322910149:web:3cdbf4f99655601f848bac",
  measurementId: "G-TNGKP87RGX"
};

const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};