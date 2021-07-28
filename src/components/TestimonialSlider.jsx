import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useSelector } from "react-redux";

import Testimonial from "./Testimonial";

const TestimonialSlider = () => {
  const [slider, setSlider] = useState(1);
  const [timeoutActive, setTimeoutActive] = useState(true);
  const {testimonials} = useSelector((testimonials) => testimonials.appData);
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
    <Grid container style={styles.testimonialContainer}>
      {testimonials && (
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
              <ChevronRightIcon style={styles.sliderButton} fontSize="large" />
            </IconButton>
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default TestimonialSlider;
const styles = {
  testimonialContainer: {
    width: "100%",
    height: "100%",
    padding: "0 10%",
  },
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
