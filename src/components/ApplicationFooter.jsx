import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import LogoCHWL from "../assets/LogoCHWL.png";

const ApplicationFooter = () => {
  return (
    <>
      <Grid
        style={styles.footerContainer}
        data-cy="application-footer"
        container
        spacing={6}
      >
        <Grid style={styles.borderRight} data-cy="logo" item xs={12} lg={3}>
          <img
            style={styles.logo}
            src={LogoCHWL}
            alt="Community Health West London Logo"
          />
        </Grid>
        <Grid style={styles.borderRight} data-cy="about" item xs={12} lg={3}>
          <Typography variant="body1" component="p" gutterBottom>
            Community Health West London is a Community Interest Company made up
            of six local charities. We are working together with the wider
            community to improve the health and wellbeing of our residents.
          </Typography>
        </Grid>
        <Grid style={styles.borderRight} item xs={12} lg={3}>
          <Typography data-cy="phone" variant="body1" component="p">
            Phone: 0207 243 9806
          </Typography>
          <Typography data-cy="email" variant="body1" component="p">
            info@communityhealthwestlondon.org.uk
          </Typography>
        </Grid>
        <Grid data-cy="navigation" item xs={12} lg={3}>
          <Link data-cy="link" to="/">
            Home
          </Link>
          <Link data-cy="link" to="/about">
            About
          </Link>
          <Link data-cy="link" to="/search">
            Find a service
          </Link>
          <Link data-cy="link">Contact</Link>
          <Link data-cy="link">News and Info</Link>
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
    </>
  );
};

export default ApplicationFooter;

const styles = {
  footerContainer: {
    maxWidth: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "50px",
  },
  logo: {
    width: "400px"
  },
  borderRight: {
    borderRight: "1px solid rgba(0,0,0,0.2)",
  },
  centerText: {
    textAlign: "center",
  },
};
