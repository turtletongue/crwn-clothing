import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { SignInContainer, TitleContainer, ButtonsContainer, SpanContainer, ErrorContainer } from './sign-in.styles.jsx';
import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSignInEmail, selectSignInIsCorrect, selectSignInPassword } from '../../redux/sign/signSelectors.js';
import { setSignInFormData } from '../../redux/sign/signActions.js';

const mapStateToProps = createStructuredSelector({
    email: selectSignInEmail,
    password: selectSignInPassword,
    isCorrect: selectSignInIsCorrect
});

const mapDispatchToProps = dispatch => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
        setFormData: (name, value) => dispatch(setSignInFormData(name, value))
    };
}

const SignIn = ({ email, password, isCorrect, setFormData, googleSignInStart, emailSignInStart }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(name, value);
    }

    return (
        <SignInContainer onSubmit={handleSubmit}>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" label="Email" type="email" value={email} handler={handleChange} required />
                <FormInput name="password" label="Password" type="password" value={password} handler={handleChange} required />
                <ButtonsContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </ButtonsContainer>
                <SpanContainer>
                    {
                        (!isCorrect) ?
                        <ErrorContainer>Incorrect email or password.</ErrorContainer>
                        :
                        <></>
                    }
                </SpanContainer>
            </form>
        </SignInContainer>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);