import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firestore =firebase.firestore();

//firestore.collection("users") will query the users collection.
firestore.collection("users")

//and .doc("PmjvIEqammsUAl0AzKrI"); will query for a doc inside the users collection.
.doc("PmjvIEqammsUAl0AzKrI")

//I can also keep chaining my query into more items inside the collection.
.collection("cartItem")

//and so on
.doc("4EQZMQPF2jLx9RKyVi1k");

//or.. we can retype the above syntax, in the following:
firestore.doc("/users/PmjvIEqammsUAl0AzKrI/cartItem/4EQZMQPF2jLx9RKyVi1k");


//Firebase config key and code :
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

const auth = firebase.auth();
//const firestore = firebase.firestore();


//Storing Firebase user info in DB:

export const createUserProfileDocument = 
async(userAuth, additionalData) => {

     if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    //==================
    //query collection:
    const collectionRef = firestore.collection(`users`);
    const collectionSnapShot = await collectionRef.get();
     console.log(collectionSnapShot.docs.map(doc =>
      doc.data()));
     //==================

     

    if (!snapShot.exists) {
         const { displayName, email } = userAuth;
         const createdAt = new Date();

          try {
             await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  additionalData
             })
        }
          catch (error) {
             console.log("Error creating new user! ",error);
        }

    } 
    else {
         return userRef;
    }
}

//Firebase Google auth setup:

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;







 

