import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form';
import Cohorts from './Cohorts'
import Applications from './Applications';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact={true} component={Cohorts} />
        <Route path={"/applications"} exact={true} component={Applications} />
        <Route path={"/application"} exact={true} component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
