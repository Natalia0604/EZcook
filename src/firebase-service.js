import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0lbl6bkrDdWizW_OS4vLw-HC9qET6fbs",
    authDomain: "ezcook-0701.firebaseapp.com",
    databaseURL: "https://ezcook-0701-default-rtdb.firebaseio.com",
    projectId: "ezcook-0701",
    storageBucket: "ezcook-0701.appspot.com",
    messagingSenderId: "374233237155",
    appId: "1:374233237155:web:d1495fcb506eb55b9a6116",
    measurementId: "G-VRTV2PCHHF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore= firebase.firestore();
// const storage=firebase.storage();
export {firebaseConfig,firestore};