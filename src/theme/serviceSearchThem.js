import { makeStyles } from "@material-ui/core/styles";

const serviceSearchTheme = makeStyles((theme) => ({
  fullWidth: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
    },
  },
  gridContainer: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "row",
      alignContent: "flex-start",
    },
  },
  searchBar: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      height: "100px",
      marginBottom: "20%",
      padding: "25px 0",
    },
    [theme.breakpoints.up("sm")]: {
      height: "85px",
      marginBottom: "4%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "65px",
      marginBottom: "6%",
    },
  },
  queryInput: {
    [theme.breakpoints.up("xs")]: {
      height: "100%",
      width: "100%",
      borderRadius: "36px 0 0 36px",
      backgroundColor: "white",
    },
  },
  dropdownContainer: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      height: "90%",
      marginTop: "0px",
      marginLeft: "24px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "0px",
      marginTop: "0px",
    },
  },
  dropdown: {
    [theme.breakpoints.up("xs")]: {
      borderRadius: "0px",
    },
  },
  dropdownMobile: {
    [theme.breakpoints.up("xs")]: {
      borderRadius: "10px",
      marginBottom: "10px",
    },
  },
  checkbox: {
    [theme.breakpoints.up("xs")]: {
      paddingLeft: "10px",
      paddingBottom: "14px",
      alignSelf: "center",
      justifySelf: "center",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "18px",
      paddingBottom: "0px",
      alignSelf: "center",
    },
  },
  helperText: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: "24px",
      marginBottom: "0px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "24px",
      marginBottom: "32px",
    },
  },
  searchButton: {
    [theme.breakpoints.up("xs")]: {
      borderRadius: "0 36px 36px 0",
      height: "100%",
    },
  },
}));

export default serviceSearchTheme;
