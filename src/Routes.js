import React from 'react';
import { Route, Switch } from 'react-router-dom';

import withTracker from './withTracker';

import Home from './containers/Home';
import About from './containers/About';
import FAQ from './containers/FAQ';
import Resources from './containers/Resources';
import Contact from './containers/Contact';
import NotFound from './containers/NotFound';

export default () => (
  <Switch>
    <Route path="/" exact component={withTracker(Home)} />
    <Route path="/about" exact component={withTracker(About)} />
    <Route path="/faq" exact component={withTracker(FAQ)} />
    <Route path="/resources" exact component={withTracker(Resources)} />
    <Route path="/contact" exact component={withTracker(Contact)} />
    <Route component={NotFound} />
  </Switch>
);
