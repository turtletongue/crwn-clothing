import { useEffect, useRef } from 'react';
import './App.css';
import Header from '../components/header/header.component.jsx';
import Homepage from './homepage/homepage.component.jsx';
import ShopPage from './shop-page/shop-page.component.jsx';
import CheckoutPage from './checkout-page/checkout-page.component.jsx';
import SignInAndSignUpPage from './sign-in-and-sign-up-page/sign-in-and-sign-up-page.component.jsx';
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
