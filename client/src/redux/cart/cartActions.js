import { 
    TOGGLE_CART_HIDDEN, 
    FETCH_CART_ITEMS_START,
    FETCH_CART_ITEMS_SUCCESS,
    FETCH_CART_ITEMS_FAILURE,
    ADD_CART_ITEM_START, 
    ADD_CART_ITEM_FAILURE,
    CLEAR_CART_START,
    CLEAR_CART_SUCCESS,
    CLEAR_CART_FAILURE, 
    REMOVE_CART_ITEM_START,
    REMOVE_CART_ITEM_FAILURE, 
    CLEAR_CART_ITEM_START,
    CLEAR_CART_ITEM_FAILURE
} from "../action-types";

export const toggleCartHidden = () => {
    return {
        type: TOGGLE_CART_HIDDEN,
        payload: ''
    };
}

export const fetchCartItemsStart = () => {
    return {
        type: FETCH_CART_ITEMS_START,
    };
}

export const fetchCartItemsSuccess = cartItems => {
    return {
        type: FETCH_CART_ITEMS_SUCCESS,
        payload: cartItems
    };
}

export const fetchCartItemsFailure = errorMessage => {
    return {
        type: FETCH_CART_ITEMS_FAILURE,
        payload: errorMessage
    };
}

export const addToCartStart = item => {
    return {
        type: ADD_CART_ITEM_START,
        payload: item
    };
}

export const addToCartFailure = errorMessage => {
    return {
        type: ADD_CART_ITEM_FAILURE,
        payload: errorMessage
    };
}

export const clearFromCartStart = item => {
    return {
        type: CLEAR_CART_ITEM_START,
        payload: item
    };
}

export const clearFromCartFailure = errorMessage => {
    return {
        type: CLEAR_CART_ITEM_FAILURE,
        payload: errorMessage
    };
}

export const removeFromCartStart = item => {
    return {
        type: REMOVE_CART_ITEM_START,
        payload: item
    };
}

export const removeFromCartFailure = errorMessage => {
    return {
        type: REMOVE_CART_ITEM_FAILURE,
        payload: errorMessage
    };
}

export const clearCartStart = () => {
    return {
        type: CLEAR_CART_START,
    };
}

export const clearCartSuccess = () => {
    return {
        type: CLEAR_CART_SUCCESS,
    };
}

export const clearCartFailure = errorMessage => {
    return {
        type: CLEAR_CART_FAILURE,
        payload: errorMessage
    };
}