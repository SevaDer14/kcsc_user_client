import NunitoRegular from "../assets/fonts/nunito-v16-latin-regular.woff2"
import NunitoBold from "../assets/fonts/nunito-v16-latin-700.woff2"
import { createMuiTheme } from "@material-ui/core/styles";

const nunitoRegular = {
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "400",
  src: `
   local('Nunito'),
   local('Nunito-Regular'),
   url(${NunitoRegular}) format('woff2')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const nunitoBold = {
  fontFamily: "Nunito",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: "700",
  src: `
   local('Nunito'),
   local('Nunito-Bold'),
   url(${NunitoBold}) format('woff2')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const kcscTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#E86406",
      contrastText: "#6a0dad ",
    },
    secondary: {
      main: "#E86406",
      contrastText: "#fff ",
    },
  },
  typography: {
    fontFamily: "Nunito",
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
    button: {
      fontSize: 18,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [nunitoRegular, nunitoBold],
      },
    },
  },
});

export default kcscTheme;
