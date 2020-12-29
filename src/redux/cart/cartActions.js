import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM, REMOVE_ITEM, CLEAR_CART } from "../action-types";

export const toggleCartHidden = () => {
    return {
        type: TOGGLE_CART_HIDDEN,
        payload: ''
    };
}

export const addToCart = item => {
    return {
        type: ADD_ITEM,
        payload: item
    };
}

export const clearFromCart = item => {
    return {
        type: CLEAR_ITEM,
        payload: item
    };
}

export const removeFromCart = item => {
    return {
        type: REMOVE_ITEM,
        payload: item
    };
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    };
}