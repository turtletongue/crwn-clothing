import { takeLatest, takeEvery, put, call, all } from 'redux-saga/effects';
import { 
    FETCH_CART_ITEMS_START,
    ADD_CART_ITEM_START,
    REMOVE_CART_ITEM_START,
    CLEAR_CART_ITEM_START,
    CLEAR_CART_START
} from '../action-types';
import { createUserCartDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { 
    addToCartFailure, 
    removeFromCartFailure,
    clearFromCartFailure,
    clearCartSuccess,
    clearCartFailure,
    fetchCartItemsStart,
    fetchCartItemsSuccess, 
    fetchCartItemsFailure 
} from './cartActions';
import { addItemToCart, removeItemFromCart } from './cart-utils';

export function* fetchCartItemsAsync() {
    try {
        const userAuth = yield getCurrentUser();
        const cartRef = yield call(createUserCartDocument, userAuth);
        const cartSnapshot = yield cartRef.get();
        const data = yield cartSnapshot.data();
        const cartItems = yield data.cartItems;
        yield put(fetchCartItemsSuccess(cartItems));
    } catch (error) {
        yield put(fetchCartItemsFailure(error.message));
    }
}

export function* onFetchCartItemsStart() {
    yield takeLatest(FETCH_CART_ITEMS_START, fetchCartItemsAsync);
}

export function* addCartItemAsync({ payload }) {
    try {
        const userAuth = yield getCurrentUser();
        const cartRef = yield call(createUserCartDocument, userAuth);
        const cartSnapshot = yield cartRef.get();
        const data = yield cartSnapshot.data();
        const cartItems = yield data.cartItems;
        yield cartRef.set({ cartItems: addItemToCart(cartItems, payload) });
        yield put(fetchCartItemsStart());
    } catch(error) {
        yield put(addToCartFailure(error.message));
    }
}

export function* onAddCartItemStart() {
    yield takeEvery(ADD_CART_ITEM_START, addCartItemAsync);
}

export function* removeCartItemsAsync({ payload }) {
    try {
        const userAuth = yield getCurrentUser();
        const cartRef = yield call(createUserCartDocument, userAuth);
        const cartSnapshot = yield cartRef.get();
        const data = yield cartSnapshot.data();
        const cartItems = yield data.cartItems;
        yield cartRef.set({ cartItems: removeItemFromCart(cartItems, payload) });
        yield put(fetchCartItemsStart());
    } catch(error) {
        yield put(removeFromCartFailure(error.message));
    }
}

export function* onRemoveCartItemStart() {
    yield takeEvery(REMOVE_CART_ITEM_START, removeCartItemsAsync);
}

export function* clearCartItemAsync({ payload }) {
    try {
        const userAuth = yield getCurrentUser();
        const cartRef = yield call(createUserCartDocument, userAuth);
        const cartSnapshot = yield cartRef.get();
        const data = yield cartSnapshot.data();
        const cartItems = yield data.cartItems;
        yield cartRef.set({ cartItems: cartItems.filter(item => item.id !== payload.id) });
        yield put(fetchCartItemsStart());
    } catch(error) {
        yield put(clearFromCartFailure(error.message));
    }
}

export function* onClearCartItemStart() {
    yield takeLatest(CLEAR_CART_ITEM_START, clearCartItemAsync);
}

export function* clearCartAsync() {
    try {
        const userAuth = yield getCurrentUser();
        const cartRef = yield call(createUserCartDocument, userAuth);
        yield cartRef.set({ cartItems: [] });
        yield put(clearCartSuccess());
    } catch(error) {
        yield put(clearCartFailure(error.message));
    }
}

export function* onClearCartStart() {
    yield takeLatest(CLEAR_CART_START, clearCartAsync);
}

export function* cartSagas() {
    yield all([
        call(onFetchCartItemsStart),
        call(onAddCartItemStart),
        call(onClearCartItemStart),
        call(onRemoveCartItemStart),
        call(onClearCartStart)
    ]);
}