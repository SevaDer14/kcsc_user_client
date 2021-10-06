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
      margin: "auto",
      marginTop: "10px",
      minWidth: "350px",
      maxWidth: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "auto",
      marginTop: "10px",
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
