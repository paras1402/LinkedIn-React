import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDETT2COBbflx3Nf3jpt75VHYtvDh2RSfs",
  authDomain: "react-linkedin-1ba0e.firebaseapp.com",
  projectId: "react-linkedin-1ba0e",
  storageBucket: "react-linkedin-1ba0e.appspot.com",
  messagingSenderId: "638617970470",
  appId: "1:638617970470:web:b6af7ed8574560e1b583e7",
  measurementId: "G-S9W5WWES90",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
