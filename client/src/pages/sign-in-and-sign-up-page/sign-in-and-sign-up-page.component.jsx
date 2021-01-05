import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';
import { SignInAndSignUpPageContainer } from './sign-in-and-sign-up-page.styles.jsx';

const SignInAndSignUpPage = () => {
    return (
        <SignInAndSignUpPageContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpPageContainer>
    );
}

export default SignInAndSignUpPage;