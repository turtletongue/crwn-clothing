import { SET_REGISTER_STATE } from "../action-types";

export const setRegisterState = (registerState) => {
    return {
        type: SET_REGISTER_STATE,
        payload: registerState
    };
}