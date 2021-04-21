import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBXM7uwi0pOGGjspKqX4RnS5WxKEolVQEw",
  authDomain: "web70-d9a6c.firebaseapp.com",
  databaseURL: "https://web70-d9a6c-default-rtdb.firebaseio.com",
  projectId: "web70-d9a6c",
  storageBucket: "web70-d9a6c.appspot.com",
  messagingSenderId: "945614222560",
  appId: "1:945614222560:web:e95d226d1773fa1f604c85",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
