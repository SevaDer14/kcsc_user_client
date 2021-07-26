import React from "react";
import LogoCHWL from "../assets/LogoCHWL.png";
import { Helmet } from "react-helmet-async";
import ScreenSplit from "../components/ScreenSplit";
import TestimonialSlider from '../components/TestimonialSlider'

const IndexView = () => {

  const mainLogo = (
    <>
      <img
        src={LogoCHWL}
        data-cy="logo"
        style={styles.image}
        alt="Community Health West London"
      />
      <h3 data-cy="mission-statement" style={styles.statement}>
        Our aim is to improve people's health and well-being
      </h3>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Community Health West London</title>
      </Helmet>
      <ScreenSplit left={mainLogo} right={<TestimonialSlider />} centered={true}/>
    </>
  );
};

export default IndexView;

const styles = {
  image: {
    width: "100%",
  },
  statement: {
    textAlign: "center",
    fontSize: "36px",
    padding: "0 20px",
  },
};
