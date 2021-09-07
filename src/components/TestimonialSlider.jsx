import React, { useState, useEffect } from "react";
import { Grid, Box, CardMedia, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useSelector } from "react-redux";
import Testimonial from "./Testimonial";
import spalsh from "../assets/splash.svg";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    [theme.breakpoints.up("xs")]: {
      zIndex: "-1",
      left: "50%",
      position: "absolute",
    },
  },
  slider: {
    [theme.breakpoints.up("xs")]: {
      position: "relative",
      top: "-50%",
    },
  },
}));

const TestimonialSlider = () => {
  const classes = useStyles();
  const [slider, setSlider] = useState(1);
  const [timeoutActive, setTimeoutActive] = useState(true);
  const { testimonials } = useSelector((state) => state.appData);
  let slideShow = undefined;

  const sliderHandler = (number) => {
    if (slider + number === testimonials.length + 1) {
      setSlider(1);
    } else if (slider + number === 0) {
      setSlider(2);
    } else {
      setSlider(slider + number);
    }
  };

  const stopTimer = () => {
    setTimeoutActive(false);
    clearTimeout(slideShow);
  };

  const startTimer = () => {
    slideShow = setTimeout(() => {
      sliderHandler(1);
    }, 6000);
  };

  useEffect(() => {
    timeoutActive && startTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slider, timeoutActive]);

  useEffect(() => {
    return () => {
      stopTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <CardMedia
        className={classes.image}
        data-cy="photo"
        component="img"
        alt=""
        height="auto"
        image={spalsh}
      />
      <Grid container className={classes.slider}>
        {testimonials.length !== 0 && (
          <>
            <Grid item xs={1} style={styles.sliderItem}>
              <IconButton
                onClick={() => {
                  sliderHandler(-1);
                  stopTimer();
                }}
              >
                <ChevronLeftIcon style={styles.sliderButton} fontSize="large" />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={10}
              style={{ ...styles.sliderItem, ...styles.sliderCardContainer }}
            >
              <Testimonial slider={slider} data={testimonials[slider - 1]} />
            </Grid>
            <Grid item xs={1} style={styles.sliderItem}>
              <IconButton
                onClick={() => {
                  sliderHandler(1);
                  stopTimer();
                }}
              >
                <ChevronRightIcon
                  style={styles.sliderButton}
                  fontSize="large"
                />
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
export default TestimonialSlider;
const styles = {
  sliderItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sliderCardContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    maxWidth: "1024px",
  },
  sliderButton: {
    height: "100%",
    width: "40px",
    color: "E86406",
  },
};
