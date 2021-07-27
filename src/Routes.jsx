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
import ContactView from "./views/ContactView";
import ServiceSearchView from "./views/ServiceSearchView";
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
          path="/contact"
          render={() => <App component={<ContactView />} />}
        />
        <Route
          exact
          path="/services/search"
          render={() => <App component={<ServiceSearchView />} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
