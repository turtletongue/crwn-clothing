import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { SignUpContainer, TitleContainer, ErrorContainer, ButtonsContainer } from './sign-up.styles.jsx';
import { signUpStart } from '../../redux/user/userActions.js';
import { connect } from 'react-redux';
import { setIsCorrect, setIsWrong, setRegisterFormData } from '../../redux/register/registerActions.js';
import { createStructuredSelector } from 'reselect';
import { selectRegisterEmail,
        selectRegisterPassword,
        selectRegisterDisplayName,
        selectRegisterConfirmPassword,
        selectRegisterIsCorrect
} from '../../redux/register/registerSelectors.js';

const mapStateToProps = createStructuredSelector({
    email: selectRegisterEmail,
    password: selectRegisterPassword,
    confirmPassword: selectRegisterConfirmPassword,
    displayName: selectRegisterDisplayName,
    isCorrect: selectRegisterIsCorrect
});

const mapDispatchToProps = dispatch => {
    return {
        signUp: (email, password, displayName) => dispatch(signUpStart(email, password, displayName)),
        setIsWrong: () => dispatch(setIsWrong()),
        setIsCorrect: () => dispatch(setIsCorrect()),
        setFormData: (name, value) => dispatch(setRegisterFormData(name, value))
    };
}

const SignUp = ({ email, password, displayName, isCorrect, confirmPassword, signUp, setIsWrong, setIsCorrect, setFormData }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setIsWrong();
            return;
        }

        setIsCorrect();
        signUp(email, password, displayName);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(name, value);
    }

    return (
        <SignUpContainer onSubmit={handleSubmit}>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="displayName" label="Name" type="text" value={displayName} handler={handleChange} required />
                <FormInput name="email" label="Email" type="email" value={email} handler={handleChange} required />
                <FormInput name="password" label="Password" type="password" value={password} handler={handleChange} required />
                <FormInput name="confirmPassword" label="Confirm Password" type="password" value={confirmPassword} handler={handleChange} required />
                <ButtonsContainer>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                    {
                        (!isCorrect) ?
                        <ErrorContainer>Passwords do not match.</ErrorContainer>
                        :
                        <></>
                    }
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);