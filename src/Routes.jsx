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
import ServiceSearchView from "./views/ServiceSearchView";
import ServicesView from "./views/ServicesView";
import AboutSelfCareView from "./views/AboutSelfCareView";

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
          path="/about/us"
          render={() => <App component={<AboutView />} />}
        />
        <Route
          exact
          path="/services/search"
          render={() => <App component={<ServiceSearchView />} />}
        />
        <Route
          exact
          path="/about/self_care"
          render={() => <App component={<AboutSelfCareView />} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
