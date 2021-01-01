import { CHANGE_REGISTER_FORM_DATA, SET_REGISTER_IS_CORRECT, SET_REGISTER_IS_WRONG } from "../action-types";

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isCorrect: true
};

const registerReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case SET_REGISTER_IS_WRONG:
            return { ...state, isCorrect: false };
        case SET_REGISTER_IS_CORRECT:
            return { ...state, isCorrect: true };
        case CHANGE_REGISTER_FORM_DATA:
            return { ...state, [action.payload.name]: action.payload.value };
        default:
            return state;
    }
}

export default registerReducer;