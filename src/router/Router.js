import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouteFallback from '../components/RouteFallback';
import App from '../pages/App';
import One from '../pages/one/One';
import Two from '../pages/two/Two';
import Three from '../pages/three/Three';

const BasicRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/one" component={One} />
        <Route path="/two" component={Two} />
        <Route path="/three" component={Three} />
        <Route path="/four" component={Two} />
        <Route component={RouteFallback} />
      </Switch>
    </Router>
  );
}

export default BasicRoute;