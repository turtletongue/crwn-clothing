import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM, REMOVE_ITEM } from "../action-types";
import { appendItemToCart, clearCartItem, removeItemFromCart } from './cartUtils';

const initialState = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden };
        case ADD_ITEM:
            return { ...state, cartItems: appendItemToCart(state.cartItems, action.payload) };
        case REMOVE_ITEM:
            return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) }
        case CLEAR_ITEM:
            return { ...state, cartItems: clearCartItem(state.cartItems, action.payload) };
        default:
            return state;
    }
}

export default cartReducer;