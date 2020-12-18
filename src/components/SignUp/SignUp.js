import './SignUp.scss';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
    const [ registerState, setRegisterState ] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isCorrect: true
    });

    const { displayName, email, password, confirmPassword, isCorrect } = registerState;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setRegisterState({ ...registerState, isCorrect: false });
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName });
    
            setRegisterState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                isCorrect: true
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setRegisterState({ ...registerState, [name]: value });
    }

    return (
        <div className="sign-up" onSubmit={handleSubmit}>
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput name="displayName" label="Name" type="text" value={displayName} handler={handleChange} required />
                <FormInput name="email" label="Email" type="email" value={email} handler={handleChange} required />
                <FormInput name="password" label="Password" type="password" value={password} handler={handleChange} required />
                <FormInput name="confirmPassword" label="Confirm Password" type="password" value={confirmPassword} handler={handleChange} required />
                <div className="buttons-container">
                    <CustomButton type="submit">SIGN UP</CustomButton>
                    {
                        (!isCorrect) ?
                        <span className="error">Incorrect email or password.</span>
                        :
                        <></>
                    }
                </div>
            </form>
        </div>
    );
}

export default SignUp;