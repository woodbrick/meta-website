import * as React from 'react';
import './App.css';
import Backstage from './views/backstage';
import Home from './views/home';
import Login from './views/login';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/backstage" component={Backstage}/>
        <Route path="/login" component={Login}/>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;