import { SET_REGISTER_STATE } from "../constants";

export const setRegisterState = (registerState) => {
    return {
        type: SET_REGISTER_STATE,
        payload: registerState
    };
}