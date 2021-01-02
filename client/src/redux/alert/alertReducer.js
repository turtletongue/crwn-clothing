import { SHOW_ALERT, CLOSE_ALERT, SET_ALERT_TEXT } from '../action-types';

const initialState = {
    hidden: true,
    theme: null,
    text: ''
}

const alertReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case SHOW_ALERT:
            return { ...state, hidden: false, theme: action.payload };
        case CLOSE_ALERT:
            return { ...state, hidden: true, theme: null };
        case SET_ALERT_TEXT:
            return { ...state, text: action.payload };
        default:
            return state;
    }
}

export default alertReducer;