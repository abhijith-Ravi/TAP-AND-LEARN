import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// You don't need analytics right now unless you are tracking app usage.
// So you can skip importing `getAnalytics`

// Your firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBIuof8Oon8SuopUEM2bGOgRR3-FbeYhC4",
  authDomain: "tapandlearn-8e5c0.firebaseapp.com",
  projectId: "tapandlearn-8e5c0",
  storageBucket: "tapandlearn-8e5c0.firebasestorage.app",
  messagingSenderId: "611734747114",
  appId: "1:611734747114:web:7fcf39c62b4f31ff3aa493",
  measurementId: "G-K3NT7MGKJ7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // <-- Export app also
export const auth = getAuth(app); // <-- Export auth
