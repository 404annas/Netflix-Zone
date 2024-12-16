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
  apiKey: "AIzaSyD0Wfh4ne3Fis4ir1j0PoBGyYPtJcNOXoY",
  authDomain: "netflix-zone.firebaseapp.com",
  projectId: "netflix-zone",
  storageBucket: "netflix-zone.firebasestorage.app",
  messagingSenderId: "1076791747176",
  appId: "1:1076791747176:web:c342e51d75fcde4146d1dd",
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
