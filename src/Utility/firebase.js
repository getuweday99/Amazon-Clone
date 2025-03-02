import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASIPdfPxqWK_Q9r_2_C2RvnbSBXyvveRY",
  authDomain: "fir-dc36e.firebaseapp.com",
  projectId: "fir-dc36e",
  storageBucket: "fir-dc36e.firebasestorage.app",
  messagingSenderId: "966906966389",
  appId: "1:966906966389:web:6792e2e95abe78d4a5a33c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyASIPdfPxqWK_Q9r_2_C2RvnbSBXyvveRY",
//   authDomain: "fir-dc36e.firebaseapp.com",
//   projectId: "fir-dc36e",
//   storageBucket: "fir-dc36e.firebasestorage.app",
//   messagingSenderId: "966906966389",
//   appId: "1:966906966389:web:6792e2e95abe78d4a5a33c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
