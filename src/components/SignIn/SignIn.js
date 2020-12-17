import './SignIn.scss';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [ signState, setSignState ] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setSignState({
            email: '',
            password: ''
        });
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setSignState({ ...signState, [name]: value });
    }

    return (
        <div className="sign-in" onSubmit={handleSubmit}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" label="Email" type="email" value={signState.email} handler={handleChange} required />
                <FormInput name="password" label="Password" type="password" value={signState.password} handler={handleChange} required />
                <div className="buttons-container">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;