import { SET_SIGN_STATE } from '../constants';

export const setSignState = (signState) => {
    return {
        type: SET_SIGN_STATE,
        payload: signState
    };
}