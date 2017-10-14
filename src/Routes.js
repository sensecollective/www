import React from 'react';
import { Route, Switch } from 'react-router-dom';

import withTracker from './withTracker';

import Markdown from './components/Markdown';

import Home from './containers/Home';
import NotFound from './containers/NotFound';

export default () => (
  <Switch>
    <Route path="/" exact component={withTracker(Home)} />
    <Route path="/about" exact component={withTracker(Markdown)} />
    <Route path="/faq" exact component={withTracker(Markdown)} />
    <Route path="/resources" exact component={withTracker(Markdown)} />
    <Route path="/contact" exact component={withTracker(Markdown)} />
    <Route component={NotFound} />
  </Switch>
);
