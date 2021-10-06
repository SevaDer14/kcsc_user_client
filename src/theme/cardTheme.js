import { makeStyles } from "@material-ui/core/styles";

const cardTheme = makeStyles((theme) => ({
  card: {
    position: "relative",
    height: "450px",
    minWidth: "300px",
    maxWidth: "450px",
    padding: "40px 20px 20px 20px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: "10px",
    [theme.breakpoints.up("md")]: {
      height: "500px",
      minWidth: "450px",
      maxWidth: "500px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "10px",
      height: "570px",
      minWidth: "300px",
      maxWidth: "400px",
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    height: "40%",
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
