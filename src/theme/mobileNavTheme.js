import {makeStyles} from "@material-ui/core";

const mobileNavStyle = makeStyles((theme) => ({
  nav: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      width: "100%",
      marginBottom: "0px",
      justifyContent: "space-between",
      backgroundColor: "white",
    },
  },
  navRight: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      width: "100%",
      marginBottom: "0px",
      justifyContent: "flex-end",
      backgroundColor: "white",
    },
  },
  headerLogo: {
    [theme.breakpoints.up("xs")]: {
      width: "70px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
  },
  tabText: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.2rem",
      minWidth: "100vw",
    },
  },
  secondaryTabText: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "1rem",
      minWidth: "100vw",
    },
  },
  center: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  centerWide: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  centerDark: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#eee",
    },
  },
}));

export default mobileNavStyle