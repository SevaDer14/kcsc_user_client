import React from "react";
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LogoCHWL from "../assets/LogoCHWL.png";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      width: "90%",
      maxWidth: "800px",
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
      bottom: "0",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "90%",
      marginLeft: "10%",
      marginRight: "5%",
    },
  },
  gridItemWithDivider: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "12px 24px",
      height: "180px",
      borderBottom: "1px solid rgba(0,0,0,0.3)",
    },
    [theme.breakpoints.up("lg")]: {
      borderBottom: "none",
      borderRight: "1px solid rgba(0,0,0,0.3)",
    },
  },
  gridItemNoDivider: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      textAlign: "center",
      paddingLeft: "24px",
      paddingTop: "12px",
      paddingBottom: "12px",
      marginTop: "40px",
      height: "180px",
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-start",
      marginTop: "15px",
    },
  },
  hiddenScrollContainer: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      height: "100%",
      marginTop: "20px",
      marginBottom: "20px",
      paddingTop: "10px",
      textAlign: "center",
      overflow: "hidden",
      position: "relative",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "40px",
      marginBottom: "0px",
      paddingTop: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "0px",
      marginBottom: "0px",
      paddingTop: "20px",
    },
  },
  hiddenScrollText: {
    [theme.breakpoints.up("xs")]: {
      position: "absolute",
      top: "0",
      left: "0",
      bottom: "0",
      right: "-15px",
      overflowY: "scroll",
    },
  },
  longWord: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "25px",
      textAlign: "center",
      wordWrap: "break-word",
      overflow: "hidden",
    },
  },
  navigationContainer: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  logo: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      maxWidth: "400px",
    },
  },
  navLink: {
    [theme.breakpoints.up("xs")]: {
      marginBottom: "12px",
      textDecoration: "none",
      textTransform: "uppercase",
      color: "#000",
    },
  },
}));

const ApplicationFooter = () => {
  const classes = useStyles();
  const { navigation, contact, about, disclamers } = useSelector(
    (state) => state.appData
  );

  const toKebabCase = (string) =>
    string.replace(/\s+/g, "-").replace("&", "and").toLowerCase();

  const navigationItems = navigation.main_tabs.map((tab) => {
    return { key: toKebabCase(tab.label), text: tab.label, link: tab.link };
  });

  const navigationMenu = navigationItems.map(({ key, link, text }) => (
    <Link data-cy="link" key={key} to={link} className={classes.navLink}>
      {text}
    </Link>
  ));

  return (
    <Box data-cy="application-footer" className={classes.footerContainer}>
      <Grid alignItems="center" container spacing={0}>
        <Grid
          data-cy="logo"
          item
          xs={12}
          lg={3}
          className={classes.gridItemWithDivider}
        >
          <CardMedia
            component="img"
            image={LogoCHWL}
            className={classes.logo}
            alt="Community Health West London Logo"
          />
        </Grid>
        <Grid
          data-cy="about"
          item
          xs={12}
          lg={3}
          className={classes.gridItemWithDivider}
        >
          <Box className={classes.hiddenScrollContainer}>
            <Typography
              variant="subtitle1"
              component="p"
              gutterBottom
              className={classes.hiddenScrollText}
            >
              {about}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={3} className={classes.gridItemWithDivider}>
          <Typography
            data-cy="contacts"
            variant="subtitle1"
            component="p"
            gutterBottom
            className={classes.longWord}
          >
            Phone: {contact.phone}
            <br />
            {contact.email}
          </Typography>
        </Grid>
        <Grid
          data-cy="navigation"
          item
          xs={12}
          lg={3}
          className={classes.gridItemNoDivider}
        >
          <Box className={classes.navigationContainer}>{navigationMenu}</Box>
        </Grid>
      </Grid>
      <Typography
        className={classes.longWord}
        data-cy="disclaimers"
        variant="caption"
        component="p"
      >
        {disclamers.accessability}
        <br />
        {disclamers.copyright}
      </Typography>
    </Box>
  );
};

export default ApplicationFooter;
