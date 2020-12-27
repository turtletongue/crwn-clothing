import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrl => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrl] : null
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.values(collections) : []
);