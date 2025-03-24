import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1YZF-eacES1cSWF3xmZho7RpkQYUfVuk",
  authDomain: "chat-app-3228f.firebaseapp.com",
  projectId: "chat-app-3228f",
  storageBucket: "chat-app-3228f.appspot.com",
  messagingSenderId: "10318605155",
  appId: "1:10318605155:web:c10a655d56bbb919434156",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up Function
const signUp = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Create user document in Firestore
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "I'm using chatApp",
      lastSeen: Date.now(),
    });

    toast.success("Successfully signed up!");
  } catch (error) {
    console.error("Error signing up:", error.message);
    toast.error(error.message);
  }
};

// Login Function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login Successful!");
  } catch (error) {
    console.error("Login error:", error.message);
    toast.error(error.message);
  }
};
const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logout Successfully!");
  } catch (error) {
    console.log(error.message);
  }
};
// Export functions
export { signUp, login, logout };
