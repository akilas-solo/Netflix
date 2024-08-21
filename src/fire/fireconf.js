// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function for user signup
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1])
  }
};

// Function for user login
const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log("User logged in:", user);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1])
  }
};

// Function for user logout
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1])
  }
};

export { signup, login, db, logout, auth };
