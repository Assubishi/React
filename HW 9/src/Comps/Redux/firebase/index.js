import firebase from "firebase";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFpWMxD4_v9b4NSK-sZOdG5uel-YSV1qI",
  authDomain: "assylzhan-9cac9.firebaseapp.com",
  projectId: "assylzhan-9cac9",
  storageBucket: "assylzhan-9cac9.appspot.com",
  messagingSenderId: "863190391539",
  appId: "1:863190391539:web:d9723232a3379d2ec6b586",
  measurementId: "G-GTYJ11BX2Q"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();


export const profileRef = db.ref("profile");
export const chatsRef = db.ref("chats");
export const messageRef = db.ref("messages");