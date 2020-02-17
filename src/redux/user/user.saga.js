//184
import {takeLatest, put, all, call} from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
     auth, 
     googleProvider, 
     createUserProfileDocument,
     getCurrentUser
} from "../../firebase/firebase.utils";
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure }
 from "./user.actions";


export function* getSnapShotFromUserAuth(userAuth) {
     try {   
          const userRef= yield call(createUserProfileDocument, userAuth);
          const userSnapshot = yield userRef.get();
          yield put(
               signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
          );
     } catch (error) {
          yield put(signInFailure(error));
     };
}

export function* signInWithGoogle() {
     try {
          const {user} = yield auth.signInWithPopup(googleProvider);
          yield getSnapShotFromUserAuth(user);
     } catch (error) {
          yield put(signInFailure(error));
     };
};

export function* onGoogleSignInStart() {
     yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,
     signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }){
     try {
          const { user } = yield auth.signInWithEmailAndPassword(email, password);
          yield getSnapShotFromUserAuth(user); 
          alert("Welcome User!")
     } catch (error) {
          put(signInFailure(error))
     }
}
export function* onEmailSignInStart() {
     yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,
     signInWithEmail)
}

//187.6
export function* isUserAthenticated(){

try {
     const userAuth = yield getCurrentUser();
     if(!userAuth){
          return;
     }
     else{
          yield getSnapShotFromUserAuth(userAuth);
     }
} catch (error) {
     yield put(signInFailure(error));
};

}
export function* onCheckUsersSession() {
     yield takeLatest(UserActionTypes.CHECK_USER_SESSION,
     isUserAthenticated)
}
//188.7
export function* signOut(){
     try {
          yield auth.signOut();
          yield put(signOutSuccess())
          alert("Good Bye!")
     } catch (error) {
          yield put(signOutFailure(error))
     }
}
export function* onSignOutStart(){
     yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas(){
     yield all([
          call(onGoogleSignInStart),
          call(onEmailSignInStart),
          call(isUserAthenticated),
          call(onSignOutStart)
     ]);
}