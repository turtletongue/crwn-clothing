import { SET_SIGN_STATE } from '../action-types';

const initialState = {
    signState: {
        email: '',
        password: '',
        isCorrect: true
    }
};

const signReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case SET_SIGN_STATE:
            return {...state, signState: action.payload};
        default:
            return state;
    }
}

export default signReducer;