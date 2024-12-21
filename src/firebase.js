import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_PROJECT_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    // alert("SignUp Success !");
    console.log("SignUp Success !");
  } catch (error) {
    console.log(error);
    // alert("Error Occured " + error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // alert("LogIn Success !");
    console.log("LogIn Success !");
  } catch (error) {
    console.log(error);
    // alert("Error Occured " + error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logOut = async () => {
  //   alert("Logged Out !");
  console.log("Logged Out !");
  signOut(auth);
};

export { auth, db, signUp, logIn, logOut };
