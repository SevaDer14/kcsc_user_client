import React from "react";
import { Helmet } from "react-helmet-async";

const AboutView = () => {
  return (
    <>
      <Helmet>
        <title>About: Community Health West London</title>
      </Helmet>
      <h3 data-cy="header-subtitle">About us</h3>
    </>
  );
};

export default AboutView;
