import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./state/store/configureStore";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./index.css";
import Routes from "./Routes";
import { HelmetProvider } from "react-helmet-async";

const kcscTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#6a0dad ",
    },
    secondary: {
      main: "#E86406",
      contrastText: "#fff ",
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
axios.defaults.headers.common["API_KEY"] = process.env.REACT_APP_API_KEY;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={kcscTheme}>
          <Routes />
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
