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

//async action due to api request
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    //specifies which collection/document the user is stored in
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //checks if the id exists in the database
    const snapShot = await userRef.get(); //async

    if (!snapShot.exists) {
        //if user doesn't exist in the database, add it with relevant fields.
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ //adds to the DB
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('There was an error while creating a user', error.message);
        }
    }
    //always return the userRef
    return userRef;
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