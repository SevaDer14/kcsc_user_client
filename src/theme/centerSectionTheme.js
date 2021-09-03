import { makeStyles } from "@material-ui/core";

const centerSectionTheme = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "auto",
      width: "100%",
      overFlow: "hidden",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      width: "80%",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "80px",
      paddingBottom: "80px",
      borderBottom: "1px solid #bbb6",
      maxWidth: theme.breakpoints.values.xl,
    },
  },

  contentContainer: {
    [theme.breakpoints.up("lg")]: {
      paddingTop: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },

  image: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      height: "350px",
      objectFit: "cover",
    },
    [theme.breakpoints.up("md")]: {
      borderRadius: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      height: "350px",
      marginRight: "40px",
      marginLeft: "60px",
    },
  },

  header: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "20px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "30px",
    },
  },

  description: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: "2px",
      marginRight: "30px",
      fontSize: "1.2rem",
      textAlign: "left",
      padding: "0 3rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0",
    },
  },

  button: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "35px",
      marginLeft: "-8px",
    },
  },
}));

export default centerSectionTheme;
