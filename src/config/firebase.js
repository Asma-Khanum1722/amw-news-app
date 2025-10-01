import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDHgQwBo9ory0fHN-SgYEuV0ldR2qLFeYs",
  authDomain: "amw-news-app.firebaseapp.com",
  projectId: "amw-news-app",
  storageBucket: "amw-news-app.firebasestorage.app",
  messagingSenderId: "979981298217",
  appId: "1:979981298217:web:61293501bca5e6e7edca38",
  measurementId: "G-89CNV75VBQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();