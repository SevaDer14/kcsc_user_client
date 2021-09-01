import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScreenSplit from "../components/ScreenSplit";
import LogoCHWL from "../assets/LogoCHWL.png";
import TestimonialSlider from "../components/TestimonialSlider";
import ServiceSearch from "../components/ServiceSearch";
import { useSelector } from "react-redux";

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
  const { tagline } = useSelector(
    (state) => state.appData
  );
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
        {tagline}
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
    fontSize: "1.2rem",
    padding: "0px 20px",
  },
};
