import React from "react";
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LogoCHWL from "../assets/LogoCHWL.png";
import { useSelector } from "react-redux";
import Functions from "../modules/Functions";
// import SubscribeToKCSC from "./SubscribeToKCSC";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      width: "90%",
      maxWidth: "100vw",
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
      alignItems: "center",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values.lg,
    },
  },
  gridItemWithDivider: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      alignItems: "stretch",
      alignContent: "center",
      justifyContent: "center",
      textAlign: "center",
      height: "auto",
      borderBottom: "1px solid rgba(0,0,0,0.3)",
    },
    [theme.breakpoints.up("lg")]: {
      borderBottom: "none",
      borderRight: "1px solid rgba(0,0,0,0.3)",
      height: "180px",
      width: "auto",
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
  textField: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      maxWidth: "387px",
      height: "100%",
      textAlign: "left",
      padding: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
    },
  },
  contactField: {
    [theme.breakpoints.up("xs")]: {
      justifySelf: "center",
      textAlign: "left",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  longWord: {
    [theme.breakpoints.up("xs")]: {
      paddingTop: "25px",
      marginBottom: "20px",
    },
  },
  navigationContainer: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
    },
  },
  logo: {
    [theme.breakpoints.up("xs")]: {
      width: "75%",
      objectFit: "contain",
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "75%",
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
  subscribeButton: {
    marginBottom: "36px",
  },
  disclaimers: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
      paddingTop: "60px",
      paddingBottom: "20px",
    },
  },
}));

const ApplicationFooter = () => {
  const classes = useStyles();
  const { navigation, contact, about, disclaimers } = useSelector(
    (state) => state.appData
  );

  const navigationItems = navigation.main_tabs.map((tab) => {
    return {
      key: Functions.toKebabCase(tab.label),
      text: tab.label,
      link: tab.link,
    };
  });

  const navigationMenu = navigationItems.map(({ link, text }, index) => (
    <Link
      data-cy="link"
      key={`footer-link-${index}`}
      to={link}
      className={classes.navLink}
    >
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
          <Box className={classes.textField}>
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
        <Grid
          item
          container
          direction="column"
          xs={12}
          lg={4}
          className={classes.gridItemWithDivider}
          style={{ justifyContent: "flex-start" }}
        >
          <Grid item className={classes.contactField}>
            <Typography
              data-cy="contacts"
              variant="subtitle1"
              component="p"
              gutterBottom
              className={classes.longWord}
            >
              Phone: {contact.phone}
              <br />
              Email: {contact.email}
            </Typography>
            {/* <Typography  data-cy="subscribe-text" variant="subtitle1">
              Subscribe to KCSC newsletter
            </Typography>
            <SubscribeToKCSC /> */}
            <Button
              data-cy="subscribe-to-kcsc-redirect"
              className={classes.subscribeButton}
              variant="contained"
              color="secondary"
              href="https://www.kcsc.org.uk/mailing-list-sign"
              target="_blank"
            >
              Subscribe to KCSC Newsletter
            </Button>
          </Grid>
        </Grid>
        <Grid
          data-cy="navigation"
          item
          xs={12}
          lg={2}
          className={classes.gridItemNoDivider}
        >
          <Box className={classes.navigationContainer}>{navigationMenu}</Box>
        </Grid>
      </Grid>
      <Typography
        className={classes.disclaimers}
        data-cy="disclaimers"
        variant="caption"
        component="p"
      >
        {disclaimers?.accessability}
        <br />
        {disclaimers?.copyright}
      </Typography>
    </Box>
  );
};

export default ApplicationFooter;
