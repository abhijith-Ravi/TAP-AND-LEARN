import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"; // ✅ Add this import

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBIuof8Oon8SuopUEM2bGOgRR3-FbeYhC4",
  authDomain: "tapandlearn-8e5c0.firebaseapp.com",
  databaseURL: "https://tapandlearn-8e5c0-default-rtdb.firebaseio.com",
  projectId: "tapandlearn-8e5c0",
  storageBucket: "tapandlearn-8e5c0.appspot.com",
  messagingSenderId: "611734747114",
  appId: "1:611734747114:web:7fcf39c62b4f31ff3aa493",
  measurementId: "G-K3NT7MGKJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getFirestore(app); // ✅ This is what you pass to Firestore functions

export { app, auth, database, db }; // ✅ Export db here (not default)
