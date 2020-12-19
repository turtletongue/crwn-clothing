import { SET_SIGN_STATE } from '../action-types';

export const setSignState = (signState) => {
    return {
        type: SET_SIGN_STATE,
        payload: signState
    };
}