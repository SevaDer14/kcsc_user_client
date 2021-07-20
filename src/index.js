import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./index.css";
import Routes from "./Routes";

const kcscTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#6a0dad ",
    },
  },
});

axios.defaults.baseURL = process.env.REACT_APP_API_URL

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={kcscTheme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
