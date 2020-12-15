import './App.css';
import Homepage from './Homepage/Homepage';
import HatsPage from './HatsPage/HatsPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/hats" exact component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
