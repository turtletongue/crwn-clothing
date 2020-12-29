import { createSelector } from 'reselect';

export const selectRegister = state => state.register;

export const selectRegisterIsCorrect = createSelector(
    [selectRegister],
    register => register.isCorrect
);

export const selectRegisterDisplayName = createSelector(
    [selectRegister],
    register => register.displayName
);

export const selectRegisterEmail = createSelector(
    [selectRegister],
    register => register.email
);

export const selectRegisterPassword = createSelector(
    [selectRegister],
    register => register.password
);

export const selectRegisterConfirmPassword = createSelector(
    [selectRegister],
    register => register.confirmPassword
);