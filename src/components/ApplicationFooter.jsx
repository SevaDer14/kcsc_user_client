import React from "react";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LogoCHWL from "../assets/LogoCHWL.png";
import { useSelector } from "react-redux";

const ApplicationFooter = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const { appData, appDataFetched } = useSelector((state) => state);
  const { navigation, contact, about, disclamers } = appData;

  const toKebabCase = (string) =>
    string.replace(/\s+/g, "-").replace("&", "and").toLowerCase();

  const navigationItems = navigation.main_tabs.map((tab) => {
    return { key: toKebabCase(tab.label), text: tab.label, link: tab.link };
  });

  const navigationMenu = navigationItems.map(({ key, link, text }) => (
      <Link data-cy="link" key={key} to={link} style={navLink}>
        {text}
      </Link>
    )
  );

  return (
    <Box data-cy="application-footer" style={mobile ? mobileFooter : footer}>
      <Grid alignItems="center" container spacing={0}>
        <Grid
          data-cy="logo"
          item
          xs={12}
          lg={3}
          style={
            mobile
              ? { ...mobileGridItem, ...borderBottom }
              : { ...gridItem, ...borderRight }
          }
        >
          <img
            style={logo}
            src={LogoCHWL}
            alt="Community Health West London Logo"
          />
        </Grid>
        <Grid
          data-cy="about"
          item
          xs={12}
          lg={3}
          style={
            mobile
              ? { ...mobileGridItem, ...borderBottom }
              : { ...gridItem, ...borderRight }
          }
        >
          <Box
            style={mobile ? hiddenScrollContainerMobile : hiddenScrollContainer}
          >
            <Typography
              variant="subtitle1"
              component="p"
              gutterBottom
              style={hiddenScrollText}
            >
              {about}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          style={
            mobile
              ? { ...mobileGridItem, ...borderBottom }
              : { ...gridItem, ...borderRight }
          }
        >
          <Typography
            data-cy="contacts"
            variant="subtitle1"
            component="p"
            gutterBottom
            style={mobile ? centerText : longWord}
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
          style={mobile ? mobileGridItem : gridItem}
        >
          <Box style={navigationContainer}>{navigationMenu}</Box>
        </Grid>
      </Grid>
      <Typography
        style={centerText}
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

const styles = {
  mobileFooter: {
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  footer: {
    maxWidth: "90%",
    marginLeft: "10%",
    marginRight: "5%",
  },
  mobileGridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 24px",
    height: "180px",
  },
  gridItem: {
    padding: "12px 24px",
    height: "180px",
  },
  logo: {
    width: "100%",
    maxWidth: "400px",
  },
  hiddenScrollContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },
  hiddenScrollContainerMobile: {
    width: "100%",
    height: "100%",
    marginTop: "50px",
    textAlign: "center",
    overflow: "hidden",
    position: "relative",
  },
  hiddenScrollText: {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "-40px",
    right: "-20px",
    overflow: "scroll",
  },
  navigationContainer: {
    display: "flex",
    flexDirection: "column",
  },
  navLink: {
    marginBottom: "12px",
    textDecoration: "none",
    color: "#000",
  },
  borderBottom: {
    borderBottom: "1px solid rgba(0,0,0,0.3)",
  },
  borderRight: {
    borderRight: "1px solid rgba(0,0,0,0.3)",
  },
  centerText: {
    marginTop: "25px",
    textAlign: "center",
    wordWrap: "break-word",
  },
  longWord: {
    wordWrap: "break-word",
  },
};

const {
  mobileFooter,
  footer,
  mobileGridItem,
  gridItem,
  logo,
  hiddenScrollContainer,
  hiddenScrollContainerMobile,
  hiddenScrollText,
  navigationContainer,
  navLink,
  borderBottom,
  borderRight,
  centerText,
  longWord,
} = styles;
