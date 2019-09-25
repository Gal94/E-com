import firebase from "firebase/app"; //firebase util library
import 'firebase/firestore';
import 'firebase/auth';
//they are attached to the firebase keyword

const config ={
    apiKey: "AIzaSyCHhJXzyjH3_w__PWoomGmUbfyA96I9Q8Q",
        authDomain: "eshop-db-3d9dd.firebaseapp.com",
    databaseURL: "https://eshop-db-3d9dd.firebaseio.com",
    projectId: "eshop-db-3d9dd",
    storageBucket: "",
    messagingSenderId: "196892320407",
    appId: "1:196892320407:web:d9942dd9830650d7883fd2",
    measurementId: "G-77MYQFS8Y9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google AUTH
//always pop up the select account from google accounts
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;