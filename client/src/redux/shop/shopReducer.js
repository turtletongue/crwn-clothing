import { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } from "../action-types";

const initialState = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case FETCH_COLLECTIONS_START:
            return { ...state, isFetching: true };
        case FETCH_COLLECTIONS_SUCCESS:
          return { ...state, collections: action.payload, isFetching: false };
        case FETCH_COLLECTIONS_FAILURE:
            return { ...state, isFetching: false, errorMessage: action.payload };
        default:
            return state;
    }
}

export default shopReducer;