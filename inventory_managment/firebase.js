// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf5OAojxBV0_x3gPZQghGMtE9JCbgz7Ho",
  authDomain: "inventory-managment-ecac6.firebaseapp.com",
  projectId: "inventory-managment-ecac6",
  storageBucket: "inventory-managment-ecac6.appspot.com",
  messagingSenderId: "407005252355",
  appId: "1:407005252355:web:79a326c47cd2e1d18b3736",
  measurementId: "G-JCKGTK7S7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export {firestore}