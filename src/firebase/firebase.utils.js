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