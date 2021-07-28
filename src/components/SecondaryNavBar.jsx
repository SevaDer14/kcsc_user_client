import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

const SecondaryNavBar = () => {

  return (
    <Toolbar style={styles.navBar}>
      <Tabs
        style={styles.navTabs}
        centered
      >
        <Tab
          style={styles.tabText}
          data-cy="about-us-tab"
          label="About us"
          component={Link}
          to="/about/us"
        />
        <Tab
          style={styles.tabText}
          data-cy="about-self-care-tab"
          label="About"
          component={Link}
          to="/about/self_care"
        />
      </Tabs>
    </Toolbar>
  );
};

export default SecondaryNavBar;

const styles = {
  navBar: {
    backgroundColor: "#eee",
    position: "absolute",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    left: "0",
    top: "64px",
    width: "100vw",
  },
  navTabs: {
    width: "100%",
  },
  tabText: {
    color: "#000",
    fontSize: "1rem",
    width: "50px",
  },
};
