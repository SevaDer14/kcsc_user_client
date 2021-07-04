import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
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
          render={() => <Header component={<AboutView />} />}
        />
        <Route
          exact
          path="/search"
          render={() => <Header component={<SearchView />} />}
        />
        <Route
          exact
          path="/"
          render={() => <Header component={<IndexView />} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
