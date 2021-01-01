import { CHANGE_REGISTER_FORM_DATA, SET_REGISTER_IS_WRONG, SET_REGISTER_IS_CORRECT } from "../action-types";

export const setIsWrong = () => {
    return {
        type: SET_REGISTER_IS_WRONG,
    };
}

export const setIsCorrect = () => {
    return {
        type: SET_REGISTER_IS_CORRECT,
    };
}

export const setRegisterFormData = (name, value) => {
    return {
        type: CHANGE_REGISTER_FORM_DATA,
        payload: { name, value }
    };
}