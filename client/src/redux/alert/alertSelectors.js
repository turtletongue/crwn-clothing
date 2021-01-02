import { createSelector } from 'reselect';

export const selectAlert = state => state.alert;

export const selectAlertHidden = createSelector(
    [selectAlert],
    alert => alert.hidden
);

export const selectAlertTheme = createSelector(
    [selectAlert],
    alert => alert.theme
);

export const selectAlertText = createSelector(
    [selectAlert],
    alert => alert.text
);