import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunkMiddleware from "redux-thunk";
import indexRoutes from "routes/index.jsx";
import "assets/scss/material-kit-react.css?v=1.3.0";

var hist = createBrowserHistory();
const createStoreWithMiddleware = applyMiddleware(promise, thunkMiddleware)(
  createStore
);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} key={key} component={prop.component} />
          );
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
