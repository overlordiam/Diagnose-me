import firebase from "firebase/compat/app";
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBefrzgsahHKag_jqcdYb37TYLQiUQSm2s",
  authDomain: "finalyearproj-a4b0e.firebaseapp.com",
  projectId: "finalyearproj-a4b0e",
  storageBucket: "finalyearproj-a4b0e.appspot.com",
  messagingSenderId: "721586669677",
  appId: "1:721586669677:web:ae4e92c643ed7d35d19764",
  measurementId: "G-9BPXEFVJTY"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Creation of database
const auth = firebase.auth();

export {auth};