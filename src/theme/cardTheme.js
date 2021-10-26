import { makeStyles } from "@material-ui/core/styles";

const cardTheme = makeStyles((theme) => ({
  card: {
    position: "relative",
    height: "500px",
    minWidth: "300px",
    maxWidth: "400px",
    padding: "40px 20px 20px 20px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: "10px",
    [theme.breakpoints.up("md")]: {
      minWidth: "350px",
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: "300px",
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    height: "40%",
    padding: '16px'
  },
  buttonContainer: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: "20px",
  },
  logo: {
    margin: "auto",
    maxHeight: "90%",
    maxWidth: "90%",
    objectFit: "contain",
  },
}));

export default cardTheme;
