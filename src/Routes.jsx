import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import IndexView from "./views/IndexView";
import AboutView from "./views/AboutView";
import SearchView from "./views/SearchView";

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact
          path="/about"
          render={() => <App component={<AboutView />} />}
        />
        <Route
          exact
          path="/search"
          render={() => <App component={<SearchView />} />}
        />
        <Route
          exact
          path="/"
          render={() => <App component={<IndexView />} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
