import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignUpContainer, TitleContainer, ErrorContainer } from './sign-up.styles.jsx';

const SignUp = ({ registerState, setRegisterState }) => {

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
        <SignUpContainer onSubmit={handleSubmit}>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="displayName" label="Name" type="text" value={displayName} handler={handleChange} required />
                <FormInput name="email" label="Email" type="email" value={email} handler={handleChange} required />
                <FormInput name="password" label="Password" type="password" value={password} handler={handleChange} required />
                <FormInput name="confirmPassword" label="Confirm Password" type="password" value={confirmPassword} handler={handleChange} required />
                <div>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                    {
                        (!isCorrect) ?
                        <ErrorContainer>Passwords do not match.</ErrorContainer>
                        :
                        <></>
                    }
                </div>
            </form>
        </SignUpContainer>
    );
}

export default SignUp;