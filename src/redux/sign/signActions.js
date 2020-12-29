import { SET_SIGN_IN_IS_WRONG, SET_SIGN_IN_IS_CORRECT, CHANGE_SIGN_IN_FORM_DATA } from '../action-types';

export const setIsWrong = () => {
    return {
        type: SET_SIGN_IN_IS_WRONG,
    };
}

export const setIsCorrect = () => {
    return {
        type: SET_SIGN_IN_IS_CORRECT,
    };
}

export const setSignInFormData = (name, value) => {
    return {
        type: CHANGE_SIGN_IN_FORM_DATA,
        payload: { name, value }
    };
}