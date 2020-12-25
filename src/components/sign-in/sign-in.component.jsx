import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { SignInContainer, TitleContainer, ButtonsContainer, SpanContainer, ErrorContainer } from './sign-in.styles.jsx';

const SignIn = ({ signState, setSignState }) => {

    const { email, password, isCorrect } = signState;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setSignState({
                email: '',
                password: '',
                isCorrect: true
            });
        } catch (error) {
            setSignState({ ...signState, isCorrect: false });
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setSignState({ ...signState, [name]: value });
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
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
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

export default SignIn;