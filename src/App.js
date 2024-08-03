import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Valentine from './Components/Valentine';
import MyValentine from './Components/MyValentine';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Valentine />
        </Route>
        <Route exact path="/my-valentine">
          <MyValentine />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
