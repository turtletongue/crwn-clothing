import { UPDATE_COLLECTIONS } from "../action-types";

export const updateCollections = collectuionsMap => {
    return {
        type: UPDATE_COLLECTIONS,
        payload: collectuionsMap
    };
}