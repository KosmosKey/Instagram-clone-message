import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmQxxgiCncdmEbYJF1WqOUsRd9376HsJc",
  authDomain: "instagram-applicqa.firebaseapp.com",
  databaseURL: "https://instagram-applicqa.firebaseio.com",
  projectId: "instagram-applicqa",
  storageBucket: "instagram-applicqa.appspot.com",
  messagingSenderId: "765869077861",
  appId: "1:765869077861:web:66f47d255bbe5193d55d8c",
  measurementId: "G-6TN76KXK0Z",
});

const db = firebaseApp.firestore();

export default db;
