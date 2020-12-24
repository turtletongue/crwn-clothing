import { useEffect, useRef } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Homepage from './Homepage/Homepage';
import ShopPage from './ShopPage/ShopPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import SignInAndSignUpPage from './SignIn-and-SignUp-Page/SignIn-and-SignUp-Page';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/userActions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelectors';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setCurrentUser(user))
  };
}

const App = ({ currentUser, setUser }) => {

  const unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setUser(userAuth);
      }
    });
    return unsubscribeFromAuth.current;
  }, [setUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" exact render={() => (currentUser) ? 
          <Redirect to="/" /> 
          : 
          <SignInAndSignUpPage />} />
        <Route path="/checkout" exact component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
