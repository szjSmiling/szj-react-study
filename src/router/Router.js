import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouteFallback from '../components/RouteFallback';
import App from '../pages/App';
import One from '../pages/one/One';
import Two from '../pages/two/Two';

const BasicRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/one" component={One} />
        <Route path="/two" component={Two} />
        <Route component={RouteFallback} />
      </Switch>
    </Router>
  );
}

export default BasicRoute;