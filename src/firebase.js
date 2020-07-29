import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBi8SDb3Ook2OGkvaSHiRpZP7ypI5PPbiA",
  authDomain: "instgram-messenger.firebaseapp.com",
  databaseURL: "https://instgram-messenger.firebaseio.com",
  projectId: "instgram-messenger",
  storageBucket: "instgram-messenger.appspot.com",
  messagingSenderId: "532653819701",
  appId: "1:532653819701:web:cb6aab24d10d1b00f66e7c",
  measurementId: "G-PM15KSY7W0",
});

const db = firebaseApp.firestore();

export default db;
