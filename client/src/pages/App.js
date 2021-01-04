import { GlobalStyle } from '../global.styles';
import Header from '../components/header/header.component.jsx';
import Homepage from './homepage/homepage.component.jsx';
import ShopPage from './shop-page/shop-page.component.jsx';
import CheckoutPage from './checkout-page/checkout-page.component.jsx';
import SignInAndSignUpPage from './sign-in-and-sign-up-page/sign-in-and-sign-up-page.component.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { checkUserSession } from '../redux/user/userActions';
import { useEffect } from 'react';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    checkUserSession: () => dispatch(checkUserSession()) 
  };
}

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <GlobalStyle />
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
