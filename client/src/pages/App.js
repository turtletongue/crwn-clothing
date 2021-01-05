import React, { lazy, Suspense } from 'react';
import { GlobalStyle } from '../global.styles';
import Header from '../components/header/header.component.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { checkUserSession } from '../redux/user/userActions';
import { useEffect } from 'react';
import Spinner from '../components/spinner/spinner.component';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';

const Homepage = lazy(() => import('./homepage/homepage.component'));
const ShopPage = lazy(() => import('./shop-page/shop-page.component'));
const CheckoutPage = lazy(() => import('./checkout-page/checkout-page.component'));
const SignInAndSignUpPage = lazy(() => import('./sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'));

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" exact render={() => (currentUser) ? 
              <Redirect to="/" /> 
              : 
              <SignInAndSignUpPage />} />
            <Route path="/checkout" exact component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
