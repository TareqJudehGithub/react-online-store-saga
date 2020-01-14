import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";

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







 

