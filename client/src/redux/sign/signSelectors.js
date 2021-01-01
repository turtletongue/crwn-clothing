import { createSelector } from 'reselect';

export const selectSign = state => state.sign;

export const selectSignInEmail = createSelector(
    [selectSign],
    sign => sign.email
);

export const selectSignInPassword = createSelector(
    [selectSign],
    sign => sign.password
);

export const selectSignInIsCorrect = createSelector(
    [selectSign],
    sign => sign.isCorrect
);