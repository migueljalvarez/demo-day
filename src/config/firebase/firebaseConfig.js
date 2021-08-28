import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw7jJlSIQHhvnxBShMjoUF9C_4sBYMFRk",
  authDomain: "code-name-demo-day.firebaseapp.com",
  projectId: "code-name-demo-day",
  storageBucket: "code-name-demo-day.appspot.com",
  messagingSenderId: "365461229453",
  appId: "1:365461229453:web:97ebbbf92478cf12bf37c4"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();

export { db, google, facebook, firebase };
