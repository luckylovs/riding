import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyBrvVTKf6QeH9qYM5wxgePeVtHZplqPsDI",
    authDomain: "riding-8eb00.firebaseapp.com",
    projectId: "riding-8eb00",
    storageBucket: "riding-8eb00.appspot.com",
    messagingSenderId: "513743671449",
    appId: "1:513743671449:web:11c96c5158a2d69871a808"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
