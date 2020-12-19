import { SET_REGISTER_STATE } from "../action-types";

const initialState = {
    registerState: {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isCorrect: true
    }
};

const registerReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case SET_REGISTER_STATE:
            return {...state, registerState: action.payload};
        default:
            return state;
    }
}

export default registerReducer;