import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./state/store/configureStore";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from "./Routes";
import { HelmetProvider } from "react-helmet-async";
import kcscTheme from './theme/kcscTheme'

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
axios.defaults.headers.common["API_KEY"] = process.env.REACT_APP_API_KEY;
window.store = store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={kcscTheme}>
        <CssBaseline />
          <Routes />
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
