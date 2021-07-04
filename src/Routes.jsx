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
        <Route exact path="/about">
        <Header>
            <AboutView />
          </Header>
        </Route>
        <Route exact path="/search">
        <Header>
            <SearchView />
          </Header>
        </Route>
        <Route exact path="/">
          <Header>
            <IndexView />
          </Header>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
