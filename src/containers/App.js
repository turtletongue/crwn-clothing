import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Homepage from './Homepage/Homepage';
import HatsPage from './HatsPage/HatsPage';
import ShopPage from './ShopPage/ShopPage';
import SignInAndSignUpPage from './SignIn-and-SignUp-Page/SignIn-and-SignUp-Page';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

function App() {
  const [ currentUser, setCurrentUser ] = useState(null);

  const unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return unsubscribeFromAuth.current;
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/hats" exact component={HatsPage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/signin" exact component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
