import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./index.css";
import Routes from "./Routes";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";

const store = configureStore();
window.store = store;

const kcscTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#6a0dad ",
    },
  },
  typography: {
    body1: {
      fontSize: 24,
    },
    button: {
      fontSize: 24,
    },
  },
});

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={kcscTheme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
