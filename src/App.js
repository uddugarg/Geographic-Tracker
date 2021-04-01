import './App.css';
import Map from './components/Map';
import { Route, Switch } from 'react-router';
import Country from './components/Country.js/Country';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/country/:name' component={Country} />
        <Route path='/' component={Map} />
      </Switch>
    </div>
  );
}

export default App;
