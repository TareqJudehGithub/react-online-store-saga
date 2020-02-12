import ShopActionTypes from "./shop.types";

export const UpdateCollection = (collectionMap) => ({
     type: ShopActionTypes.UPDATE_COLLECTIONS,
     payload: collectionMap
});