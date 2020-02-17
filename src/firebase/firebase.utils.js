//Firebase configuration and setup:
//A.
import firebase from "firebase/app";

//B.
//for the database
import "firebase/firestore";

//C.
//for the authentication
import "firebase/auth";

//D.
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

//E.
  firebase.initializeApp(config);
  
//storing user DB

export const auth = firebase.auth();  //from import "firebase/auth";
export const firestore =firebase.firestore(); //import "firebase/firestore";

//creating a func to allows us to take that user we logged on with in Firebase,
//and store it (the user) inside our DB in Firebase.

export const createUserProfileDocument = async (userAuth, additionalData) => {

if(!userAuth) return; 

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();

  if(!snapShot.exists) {  
    const { displayName, email } = userAuth;  
    const createdAt = new Date();   

    try {
      await userRef.set({   
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
};

// fetch the data from firestore:
export const convertCollectionsSnapshotToMap = (collections) => {

  //new transformed collection array:
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  
 //We need to use reduce() on the new transformed collection array:

    return  transformedCollection.reduce( (accumilator, collection) => {

      accumilator[collection.title.toLowerCase()] = collection;
      return accumilator;
    } , {});
}

//187.7
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);    
    }, reject)
  });

}

//to setup the google auth

//184.

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;


