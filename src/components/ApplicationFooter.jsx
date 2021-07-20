import React from "react";
import { Box, Grid, Typography, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import LogoCHWL from "../assets/LogoCHWL.png";
import { findByLabelText } from "@testing-library/react";

const ApplicationFooter = () => {
  const navigationItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Find a service", link: "/search" },
    { text: "Contact", link: "/contact" },
    { text: "News and Info", link: "/news_and_info" },
  ];

  const navigationMenu = navigationItems.map((item) => (
      <Link data-cy="link" to={item.link} style={styles.navLink}>
        {item.text}
      </Link>
  ));

  return (
    <Box data-cy="application-footer">
      <Grid style={styles.footerContainer} alignItems="center" container spacing={3}>
        <Grid data-cy="logo" item xs={12} lg={3} style={styles.gridItem}>
          <img
            style={styles.logo}
            src={LogoCHWL}
            alt="Community Health West London Logo"
          />
        </Grid>
        <Divider variant="middle" orientation="vertical" style={styles.noMargin} flexItem/>
        <Grid data-cy="about" item xs={12} lg={3} style={styles.gridItem}>
          <Typography variant="body1" component="p" gutterBottom>
            Community Health West London is a Community Interest Company made up
            of six local charities. We are working together with the wider
            community to improve the health and wellbeing of our residents.
          </Typography>
        </Grid>
        <Divider variant="middle" orientation="vertical" style={styles.noMargin} flexItem/>
        <Grid item xs={12} lg={3} style={styles.gridItem}>
          <Typography data-cy="phone" variant="body1" component="p">
            Phone: 0207 243 9806
          </Typography>
          <Typography data-cy="email" variant="body1" component="p">
            info@communityhealthwestlondon.org.uk
          </Typography>
        </Grid>
        <Divider variant="middle" orientation="vertical" style={styles.noMargin} flexItem/>
        <Grid data-cy="navigation" item direction="column" xs={12} lg={3} style={styles.gridItem}>
          <Box style={styles.navigation}>{navigationMenu}</Box>
        </Grid>
      </Grid>
      <Typography
        style={styles.centerText}
        data-cy="web-access-text"
        variant="overline"
        component="p"
        gutterTop
      >
        This site is built according to Web Content Accessibility Guidlines
      </Typography>
      <Typography
        style={styles.centerText}
        data-cy="copyrights"
        variant="overline"
        component="p"
      >
        2020 All Rights Reserved by Community Health West London.
      </Typography>
    </Box>
  );
};

export default ApplicationFooter;

const styles = {
  footerContainer: {
    maxWidth: "90%",
    marginLeft: "10%",
    marginRight: "5%",
    marginBottom: "25px",
  },
  gridItem: {
    padding: "12px 24px"
  },
  logo: {
    width: "100%",
    maxWidth: "400px"
  },
  navigation: {
    display: "flex",
    flexDirection: "column",
  },
  navLink: {
    marginBottom: "12px",
    textDecoration: "none",
    color: "#000"
  },
  centerText: {
    textAlign: "center",
  },
  noMargin: {
    margin: "0px -0.5px"
  }
};
