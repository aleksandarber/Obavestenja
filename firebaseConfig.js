import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
//import { getAuth } from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDXqL7rXgtLnJeVRB-N3S1p3BafljBFrpU",
    authDomain: "firstfirebaseapp-6ab69.firebaseapp.com",
    projectId: "firstfirebaseapp-6ab69",
    storageBucket: "firstfirebaseapp-6ab69.appspot.com",
    messagingSenderId: "830554241056",
    appId: "1:830554241056:web:19434522fa7f1d258b6445"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DP = getFirestore(FIREBASE_APP);
//export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
