import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBWsDAXZN_YJ55akXlf_yIJTqWm09sXNw",
    authDomain: "pract-react-firegram.firebaseapp.com",
    databaseURL: "https://pract-react-firegram.firebaseio.com",
    projectId: "pract-react-firegram",
    storageBucket: "pract-react-firegram.appspot.com",
    messagingSenderId: "414242119108",
    appId: "1:414242119108:web:32030f3df4bfc29d5c5891"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fbStorage = firebase.storage();
export const fbFirestore = firebase.firestore();
export const { serverTimestamp } = firebase.firestore.FieldValue;