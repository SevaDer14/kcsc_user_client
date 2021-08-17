import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScreenSplit from "../components/ScreenSplit";
import LogoCHWL from "../assets/LogoCHWL.png";
import TestimonialSlider from "../components/TestimonialSlider";
import ServiceSearch from "../components/ServiceSearch";

const useStyles = makeStyles((theme) => ({
  leftSection: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      height: "100%",
    },
  },
  image: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      objectFit: "contain",
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
}));

const IndexView = () => {
  const classes = useStyles();

  const mainLogo = (
    <Box className={classes.leftSection}>
      <CardMedia
        component="img"
        image={LogoCHWL}
        data-cy="logo"
        className={classes.image}
        alt="Community Health West London"
      />
      <Typography data-cy="mission-statement" style={styles.statement}>
        Our aim is to improve people's health and well-being
      </Typography>
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
  statement: {
    textAlign: "center",
    fontSize: "28px",
    padding: "0 20px",
  },
};
