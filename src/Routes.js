import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import FAQ from "./containers/FAQ";
import NotFound from "./containers/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
		<Route path="/about" exact component={About} />
		<Route path="/faq" exact component={FAQ} />
		<Route component={NotFound} />
  </Switch>;
