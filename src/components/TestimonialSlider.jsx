import React, { useState, useEffect } from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useSelector } from "react-redux";

import Testimonial from "./Testimonial";

const useStyles = makeStyles((theme) => ({
  testimonialContainer: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "auto",
      padding: "0 10%",
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
    if (slider + number === 3) {
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
      <Grid container className={classes.testimonialContainer}>
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
