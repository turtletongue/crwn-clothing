import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';
import { connect } from 'react-redux';
import { setSignState } from '../../redux/sign/signActions';
import { setRegisterState } from '../../redux/register/registerActions';
import { SignInAndSignUpPageContainer } from './sign-in-and-sign-up-page.styles.jsx';

const mapStateToProps = (state) => {
    return {
        signState: state.sign.signState,
        registerState: state.register.registerState
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignState: ((signState) => dispatch(setSignState(signState))),
        setRegisterState: ((registerState) => dispatch(setRegisterState(registerState))) 
    };
}

const SignInAndSignUpPage = ({ signState, setSignState, registerState, setRegisterState }) => {
    return (
        <SignInAndSignUpPageContainer>
            <SignIn signState={signState} setSignState={setSignState} />
            <SignUp registerState={registerState} setRegisterState={setRegisterState} />
        </SignInAndSignUpPageContainer>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndSignUpPage);