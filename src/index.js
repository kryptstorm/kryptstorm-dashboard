import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./custom/css/lte.min.css";
import "./custom/css/skin-green.min.css";
import "./custom/css/kryptstorm.css";

import App from "./layouts/App";
import registerServiceWorker from "./registerServiceWorker";

const history = createBrowserHistory();
ReactDOM.render(
  <HashRouter history={history}>
    <Switch>
      <Route path="/" name="Home" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById("kryptstorm-app")
);
registerServiceWorker();
