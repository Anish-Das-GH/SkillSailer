import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW_SnUYIMQEf6h2e0GRm_zZMrAY1t4llU",
  authDomain: "skillsailer-f58e2.firebaseapp.com",
  projectId: "skillsailer-f58e2",
  storageBucket: "skillsailer-f58e2.appspot.com",
  messagingSenderId: "168424108421",
  appId: "1:168424108421:web:fb92fb69e3efe3faaf94ec",
  measurementId: "G-C9YFS4BXF1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Login failed:", error);
  }
};

const handleSignup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Signup failed:", error);
  }
};

export { handleLogin, handleSignup };

export { auth };
