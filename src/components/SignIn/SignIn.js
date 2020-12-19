import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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
        <div className="sign-in" onSubmit={handleSubmit}>
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" label="Email" type="email" value={email} handler={handleChange} required />
                <FormInput name="password" label="Password" type="password" value={password} handler={handleChange} required />
                <div className="buttons-container">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </div>
                <div className="span-container">
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

export default SignIn;