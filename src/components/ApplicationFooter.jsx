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

const ApplicationFooter = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigationItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Find a service", link: "/search" },
    { text: "Contact", link: "/contact" },
    { text: "News and Info", link: "/news_and_info" },
  ];

  const navigationMenu = navigationItems.map((item) => (
    <Link data-cy="link" to={item.link} style={navLink}>
      {item.text}
    </Link>
  ));

  return (
    <Box
      data-cy="application-footer"
      style={mobile ? mobileFooter : footer}
    >
      <Grid alignItems="center" justifyContent="center" container spacing={0}>
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
          <Typography variant="body1" component="p" gutterBottom>
            Community Health West London is a Community Interest Company made up
            of six local charities. We are working together with the wider
            community to improve the health and wellbeing of our residents.
          </Typography>
        </Grid>
        <Grid
          alignItems="center"
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
            variant="body1"
            component="p"
            gutterBottom
            style={mobile ? centerText : longWord}
          >
            Phone: 0207 243 9806
            <br />
            info@communityhealthwestlondon.org.uk
          </Typography>
        </Grid>
        <Grid
          data-cy="navigation"
          item
          direction="column"
          xs={12}
          lg={3}
          style={mobile ? mobileGridItem : gridItem}
          alignItems="center"
        >
          <Box style={navigation}>{navigationMenu}</Box>
        </Grid>
      </Grid>
      <Typography
        style={centerText}
        data-cy="disclamers"
        variant="caption"
        component="p"
      >
        This site is built according to Web Content Accessibility Guidlines
        <br />
        2020 All Rights Reserved by Community Health West London.
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
  navigation: {
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
  navigation,
  navLink,
  borderBottom,
  borderRight,
  centerText,
  longWord,
} = styles;