import { 
    TOGGLE_CART_HIDDEN, 
    FETCH_CART_ITEMS_SUCCESS, 
    FETCH_CART_ITEMS_FAILURE,
    ADD_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_FAILURE,
    CLEAR_CART_ITEM_FAILURE,
    CLEAR_CART_FAILURE,
    CLEAR_CART_SUCCESS
} from "../action-types";

const initialState = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden };
        case FETCH_CART_ITEMS_SUCCESS:
            return { ...state, cartItems: action.payload, errorMessage: null };
        case CLEAR_CART_SUCCESS:
            return { ...state, cartItems: [] };
        case FETCH_CART_ITEMS_FAILURE:
        case ADD_CART_ITEM_FAILURE:
        case REMOVE_CART_ITEM_FAILURE:
        case CLEAR_CART_ITEM_FAILURE:
        case CLEAR_CART_FAILURE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}

export default cartReducer;