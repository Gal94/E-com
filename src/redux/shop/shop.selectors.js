import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    collections => Object.keys(collections).map(key => collections[key]) //converts the object into an array
);

export const selectShopItem = collectionUrlParam => createSelector(
    [selectShopItems],
    collections => collections[collectionUrlParam]
);