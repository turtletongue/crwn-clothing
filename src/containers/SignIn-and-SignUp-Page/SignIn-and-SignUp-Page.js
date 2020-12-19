import './SignIn-and-SignUp-Page.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import { connect } from 'react-redux';
import { setSignState } from '../../redux/sign/signActions';
import { setRegisterState } from '../../redux/register/registerActions';

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
        <div className="sign-in-and-sign-up">
            <SignIn signState={signState} setSignState={setSignState} />
            <SignUp registerState={registerState} setRegisterState={setRegisterState} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndSignUpPage);