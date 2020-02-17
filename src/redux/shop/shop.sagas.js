//179.4  180.2 (import call, put) 189.6(all)
import {takeLatest, call, put, all} from "redux-saga/effects";
import ShopActionTypes from "./shop.types";

//180.1
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import {fetchCollectionsSuccess, fetchCollectionsFailure} from "./shop.actions";
//declaring the saga:

export function* fetchCollectionsAsync(){
     yield console.log("I am fired!!!");

     //180.2 copied from shop.actions.js:
     try {
          const collectionRef = firestore.collection("collections");

          const snapshot = yield collectionRef.get();
          const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
          yield put(fetchCollectionsSuccess(collectionsMap));
     } catch (error) {    
          yield put(fetchCollectionsFailure(error.message));
     }
};
export function* fetchCollectionsStart() {
     yield takeLatest(
          ShopActionTypes.FETCH_COLLECTIONS_START,
          fetchCollectionsAsync);
};
 export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
 }

 