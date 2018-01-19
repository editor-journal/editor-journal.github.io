// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import AppStyle from "./App.scss";

const ErrorLog = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <section className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={ErrorLog} />
      </Switch>
    </section>
  </BrowserRouter>
);

export default App;
