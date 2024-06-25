import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Valentine from './Components/Valentine';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Valentine />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
