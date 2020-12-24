import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrl => createSelector(
    [selectShopCollections],
    collections => collections[collectionUrl]
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.values(collections)
);