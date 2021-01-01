import {  SIGN_IN_FAILURE, 
          EMAIL_SIGN_IN_START,
          SIGN_IN_SUCCESS,
          GOOGLE_SIGN_IN_START,
          CHECK_USER_SESSION,
          SIGN_OUT_START,
          SIGN_OUT_SUCCESS,
          SIGN_OUT_FAILURE,
          SIGN_UP_START,
          SIGN_UP_SUCCESS,
          SIGN_UP_FAILURE
} from '../action-types';

export const googleSignInStart = () => {
    return {
        type: GOOGLE_SIGN_IN_START,
    };
}

export const signInSuccess = user => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: user
    };
}

export const signInFailure = error => {
    return {
        type: SIGN_IN_FAILURE,
        payload: error
    };
}

export const emailSignInStart = emailAndPassword => {
    return {
        type: EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    };
}

export const checkUserSession = () => {
    return {
        type: CHECK_USER_SESSION,
    };
}

export const signOutStart = () => {
    return {
        type: SIGN_OUT_START,
    };
}

export const signOutSuccess = () => {
    return {
        type: SIGN_OUT_SUCCESS,
    };
}

export const signOutFailure = error => {
    return {
        type: SIGN_OUT_FAILURE,
        payload: error
    };
}

export const signUpStart = (email, password, displayName) => {
    return {
        type: SIGN_UP_START,
        payload: { email, password, displayName }
    };
}

export const signUpSuccess = user => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: user
    };
}

export const signUpFailure = error => {
    return {
        type: SIGN_UP_FAILURE,
        payload: error
    };
}