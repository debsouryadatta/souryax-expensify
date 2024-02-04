// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJrvcNdsf4Ag6pbSM2Gy8ufkYmAO8Og84",
  authDomain: "expensify-b4508.firebaseapp.com",
  projectId: "expensify-b4508",
  storageBucket: "expensify-b4508.appspot.com",
  messagingSenderId: "81883533436",
  appId: "1:81883533436:web:9d3c742f95b1107e3479f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");

export default app;