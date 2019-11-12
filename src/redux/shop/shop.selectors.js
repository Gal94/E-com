import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    //converts the object into an array
    collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
);

export const selectShopItem = collectionUrlParam => createSelector(
    [selectShopItems],
    collections => (collections ? collections[collectionUrlParam] : null)
);