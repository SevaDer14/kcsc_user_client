import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./components/App";
import IndexView from "./views/IndexView";
import ContactView from "./views/ContactView";
import AboutUsView from "./views/AboutUsView";
import ServiceSearchView from "./views/ServiceSearchView";
import ServicesView from "./views/ServicesView";
import AboutSelfCareView from "./views/AboutSelfCareView";
import NewsView from "./views/NewsView";
import ArticleView from "./views/ArticleView";
import InformationView from "./views/InformationView";
import ErrorView from "./views/ErrorView";
import SearchWidget from "./views/SearchWidget";
import CaseStudiesView from "./views/CaseStudiesView";

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
          path="/services/search"
          render={() => <App component={<ServiceSearchView />} />}
        />
        <Route
          exact
          path="/about/organization"
          render={() => <App component={<AboutUsView />} />}
        />
        <Route
          exact
          path="/contact"
          render={() => <App component={<ContactView />} />}
        />
        <Route
          exact
          path="/about/self_care"
          render={() => <App component={<AboutSelfCareView />} />}
        />
        <Route
          exact
          path="/about/case_studies"
          render={() => <App component={<CaseStudiesView />} />}
        />
        <Route
          exact
          path="/about/case_studies/case_study/:id"
          render={() => <App component={<ArticleView />} />}
        />
        <Route
          exact
          path="/news_info/news"
          render={() => <App component={<NewsView />} />}
        />
        <Route
          exact
          path="/news_info/information"
          render={() => <App component={<InformationView />} />}
        />
        <Route
          exact
          path="/news_info/news/articles/:id"
          render={() => <App component={<ArticleView />} />}
        />
        <Route
          exact
          path="/error"
          render={() => <App component={<ErrorView />} />}
        />
        <Route
          exact
          path="/service_search_widget"
          render={() => <SearchWidget />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
