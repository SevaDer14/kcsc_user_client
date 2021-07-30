import React from "react";
import { Helmet } from "react-helmet-async";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ScreenSplit from "../components/ScreenSplit";
import LogoCHWL from "../assets/LogoCHWL.png";
import TestimonialSlider from "../components/TestimonialSlider";
import ServiceSearch from "../components/ServiceSearch";

const useStyles = makeStyles((theme) => ({
  leftSection: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "-40%",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      marginTop: "15%",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "0",
    },
  },
  image: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "-60%",
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "0",
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const IndexView = () => {
  const classes = useStyles();

  const mainLogo = (
    <Box className={classes.leftSection}>
      <img
        src={LogoCHWL}
        data-cy="logo"
        className={classes.image}
        alt="Community Health West London"
      />

      <h3 data-cy="mission-statement" style={styles.statement}>
        Our aim is to improve people's health and well-being
      </h3>
      <ServiceSearch />
    </Box>
  );

  return (
    <>
      <Helmet>
        <title>Community Health West London</title>
      </Helmet>
      <ScreenSplit
        left={mainLogo}
        right={<TestimonialSlider />}
        centered={true}
      />
    </>
  );
};

export default IndexView;

const styles = {
  image: {
    width: "50%",
  },
  statement: {
    textAlign: "center",
    fontSize: "28px",
    padding: "0 20px",
  },
};
