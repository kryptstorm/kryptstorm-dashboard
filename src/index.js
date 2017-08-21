import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./custom/css/lte.min.css";
import "./custom/css/skin-green.min.css";
import "./custom/css/kryptstorm.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.body);
registerServiceWorker();
