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
      marginBottom: "40px",
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

  imageBox: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "40px",
      width: "100%",
      maxHeight: "200px",
      minHeight: "200px",
    },
    [theme.breakpoints.up("sm")]: {
      borderRadius: "10px",
      height: "300px",
      width: "100%",
      maxHeight: "500px",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "0px",
      marginTop: "60px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "60px",
      marginTop: "0px",
    },
  },

  image: {
    [theme.breakpoints.up("xs")]: {
      objectFit: "cover",
      height: "200px",
      width: "100vw",
    },
    [theme.breakpoints.up("sm")]: {
      borderRadius: "10px",
      height: "300px",
      width: "80vw",
    },
    [theme.breakpoints.up("md")]: {
      borderRadius: "10px",
      height: "300px",
      width: "60vw",
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
      marginTop: "20px",
      padding: "0px 20px",
      fontSize: "2rem",
      textAlign: "left",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "12px",
      padding: "0px",
    },
  },

  description: {
    [theme.breakpoints.up("xs")]: {
      padding: "0px 50px",
      fontSize: "1.1rem",
      textAlign: "left",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0px 100px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0px 150px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0",
    },
  },

  button: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "12px",
      marginLeft: "-8px",
    },
  },
}));

export default centerSectionTheme;
