import {all, call} from "redux-saga/effects";

// import {fetchCollectionsStart} from "./shop/shop.sagas";
import {shopSagas} from "./shop/shop.sagas";
import {userSagas} from "./user/user.saga";
//189.4
import {cartSagas} from "./cart/cart.saga";

export default function* rootSaga() {
     yield all([
          call(shopSagas),
          call(userSagas),
          call(cartSagas)
     ]);
}