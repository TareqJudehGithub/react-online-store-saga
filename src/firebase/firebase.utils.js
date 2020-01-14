import firebase from "firebase/app";

//these are needed for the google authentication.

//for the database
import "firebase/firestore";

//for the authentication
import "firebase/auth";

const config = {
     apiKey: "AIzaSyDm0Y6cSdOXp4sFJDBugo1C0g2dhv1SrgM",
     authDomain: "react-online-store-app-3a252.firebaseapp.com",
     databaseURL: "https://react-online-store-app-3a252.firebaseio.com",
     projectId: "react-online-store-app-3a252",
     storageBucket: "react-online-store-app-3a252.appspot.com",
     messagingSenderId: "560602626333",
     appId: "1:560602626333:web:e22989e1a849b888de49f4",
     measurementId: "G-QFHBNHWM4B"
   };
  
//storing user DB

//creating a func to allows us to take that user we logged on with in Firebase,
//and store it (the user) inside our DB in Firebase.

export const createUserProfileDocument = async (userAuth, additionalData) => {
//userAuth is the user we are logged on with.
if(!userAuth) return; //if there is not userAuth (no user logged in) we want to/
//exit from this function (return;.)

//the userRef creates data (documentREf), retreives, delete, or updating the
//data in that place..in that location.
//retreive the data => calling .get().
//.get() is us pulling out a snap shot object of that place in the DB.
//

const userRef = firestore.doc(`users/${userAuth.uid}`);

// //The snapShot simply respresents data
const snapShot = await userRef.get();
// console.log(snapShot); 

//The actuall data we want to store in the DB, when the users logs.
if(!snapShot.exists){  //if snapshot doesn't exist
  const { displayName, email } = userAuth   //we want  displayname, email from userAuth.
  const createdAt = new Date();   //the current date and time for this event.

  try {
    await userRef.set({   //.set = creates an object
      displayName,
      email,
      createdAt,
      ...additionalData
    });
  } catch (error) {
    console.log("error creating user", error.message);
  };
}
return userRef;
}

// end of storing user in DB
//==================================


firebase.initializeApp(config);

//to setup the google auth

export const auth = firebase.auth();  //from import "firebase/auth";
export const firestore =firebase.firestore(); //import "firebase/auth";



//1. To get access to the  GoogleAuthProvider() from Google Authenticator Library.
const provider = new firebase.auth.GoogleAuthProvider();

//2. We want to always triger the google popup whenever we use this Google
// Auth Provider for authentication and sign in.
provider.setCustomParameters({ prompt: "select_account" });

//3. to specify which sign in..the Google Auth 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


//4. Next, from the Firebase website, configure how to enable the Google
// Popup to Sign in.