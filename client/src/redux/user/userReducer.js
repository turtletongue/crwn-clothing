import { SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../action-types';

const initialState = {
    currentUser: null,
    error: null
}

const userReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:
            return { ...state, currentUser: action.payload, error: null };
        case SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null, error: null };
        case SIGN_IN_FAILURE:
        case SIGN_OUT_FAILURE:
        case SIGN_UP_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default userReducer;