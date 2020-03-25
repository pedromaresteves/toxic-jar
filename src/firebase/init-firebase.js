const firebase = require("firebase/app");
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDM9EuZwEyYTCS7obD6QSgUhI_69C-GHpk",
    authDomain: "toxic-jar-api.firebaseapp.com",
    databaseURL: "https://toxic-jar-api.firebaseio.com",
    projectId: "toxic-jar-api",
    storageBucket: "toxic-jar-api.appspot.com",
    messagingSenderId: "951909825290",
    appId: "1:951909825290:web:72d8a1c10fab4c206a18f3",
    measurementId: "G-1QFET2KR4E"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const db = firebase.firestore();

module.exports = {db: db};