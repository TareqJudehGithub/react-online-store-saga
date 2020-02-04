import {createSelector} from "reselect";

//133.
//  COLLECTION_ID_MAP maps the string value to it's respective ID.
//Where the string value (i.e /shop/hats) will be the actual property.
const COLLECTION_ID_MAP = {
     women: 1,
     men: 2,
     hats: 3,
     jackets: 4,
     sneakers: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
     [selectShop],
     (shop => shop.collections)
);

export const selectCollection = collectionUrlParam => createSelector(
     [selectCollections],
     collections =>
          collections.find(collection =>
               collection.id === COLLECTION_ID_MAP[collectionUrlParam]
               )
)