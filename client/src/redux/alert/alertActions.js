import { SHOW_ALERT, CLOSE_ALERT, SET_ALERT_TEXT } from '../action-types';

export const showAlert = theme => ({
    type: SHOW_ALERT,
    payload: theme
});

export const closeAlert = () => ({
    type: CLOSE_ALERT,
});

export const setAlertText = text => ({
    type: SET_ALERT_TEXT,
    payload: text
});