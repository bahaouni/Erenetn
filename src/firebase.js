import firebase from "firebase"
import "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyDDummVJhGqvcfn2H1MQ4HqvBcqymADKc8",
    authDomain: "eren-tn.firebaseapp.com",
    databaseURL: "https://eren-tn-default-rtdb.firebaseio.com",
    projectId: "eren-tn",
    storageBucket: "eren-tn.appspot.com",
    messagingSenderId: "594025037002",
    appId: "1:594025037002:web:339b0bb2a4a7d32b790833",
    measurementId: "G-VTYH17RZ79"
  };
  firebase.initializeApp(firebaseConfig)
  const databaseref = firebase.database().ref()
  export const notesref = databaseref.child("Erentn")
  export default firebase