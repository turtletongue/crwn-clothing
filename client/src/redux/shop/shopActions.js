import { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } from "../action-types";

export const fetchCollectionsStart = () => {
    return {
        type: FETCH_COLLECTIONS_START,
    };
}

export const fetchCollectionsSuccess = collectionsMap => {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    };
}

export const fetchCollectionsFailure = errorMessage => {
    return {
        type: FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    };
}