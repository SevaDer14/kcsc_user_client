import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={kcscTheme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
