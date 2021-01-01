import { SET_SIGN_IN_IS_CORRECT, SET_SIGN_IN_IS_WRONG, CHANGE_SIGN_IN_FORM_DATA } from '../action-types';

const initialState = {
    email: '',
    password: '',
    isCorrect: true
};

const signReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case SET_SIGN_IN_IS_WRONG:
            return { ...state, isCorrect: false };
        case SET_SIGN_IN_IS_CORRECT:
            return { ...state, isCorrect: true };
        case CHANGE_SIGN_IN_FORM_DATA:
            return { ...state, [action.payload.name]: action.payload.value };
        default:
            return state;
    }
}

export default signReducer;