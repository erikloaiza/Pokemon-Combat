import React from 'react';

import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Battle from './views/battle';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Battle" component={Battle}/>
        <Redirect to="/Battle"/>
      </Switch>
    </Router>
  );  
}
export default App;
