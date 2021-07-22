import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./components/App";
import IndexView from "./views/IndexView";
import AboutView from "./views/AboutView";
import SearchView from "./views/SearchView";
import ServicesView from "./views/ServicesView";

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/home" />;
          }}
        />
        <Route
          exact
          path="/home"
          render={() => <App component={<IndexView />} />}
        />
        <Route
          exact
          path="/services"
          render={() => <App component={<ServicesView />} />}
        />
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
      </Switch>
    </Router>
  );
};

export default Routes;
