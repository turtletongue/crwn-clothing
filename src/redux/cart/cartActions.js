import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../action-types";

export const toggleCartHidden = () => {
    return {
        type: TOGGLE_CART_HIDDEN,
        payload: ''
    };
}

export const addToCart = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    };
}