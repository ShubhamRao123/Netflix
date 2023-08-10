import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFJHPgRAdEcuPoi2fC2jdit1NrkauvQDY",
  authDomain: "netflix-bc14e.firebaseapp.com",
  projectId: "netflix-bc14e",
  storageBucket: "netflix-bc14e.appspot.com",
  messagingSenderId: "743273739348",
  appId: "1:743273739348:web:da0f0b4f0f90b6fdc6a9c1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
