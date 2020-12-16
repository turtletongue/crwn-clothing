import './App.css';
import Header from '../components/Header/Header';
import Homepage from './Homepage/Homepage';
import HatsPage from './HatsPage/HatsPage';
import ShopPage from './ShopPage/ShopPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/hats" exact component={HatsPage} />
        <Route path="/shop" exact component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
