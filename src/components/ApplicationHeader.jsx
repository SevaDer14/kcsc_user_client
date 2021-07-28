import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/LogoCHWLHorisontal.svg";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Tabs,
  Tab,
} from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

const ApplicationHeader = () => {
  const trigger = useScrollTrigger();
  const [activeTab, setActiveTab] = useState(0);
  const landingPage = useRouteMatch("/home")

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar data-cy="application-header" elevation={0}>
        <Toolbar>
          {!landingPage && (
            <Logo
              data-cy="header-logo"
              style={styles.headerLogo}
              alt="Community Health West London"
            />
          )}
          <Tabs
            value={activeTab}
            onChange={handleChange}
            indicatorColor="secondary"
            style={styles.navTabs}
            centered
          >
            <Tab
              style={styles.tabText}
              data-cy="home-tab"
              label="Home"
              component={Link}
              to="/home"
            />
            <Tab
              style={styles.tabText}
              data-cy="services-tab"
              label="Services"
              component={Link}
              to="/services"
            />
            <Tab
              style={styles.tabText}
              data-cy="about-tab"
              label="About"
              component={Link}
              to="/about/us"
            />
          </Tabs>
        </Toolbar>
      </AppBar>   
    </Slide>
    <Toolbar style={styles.secondaryNavBar}>
      <Tabs
        style={styles.secondaryNavTabs}
        centered
      >
        <Tab
          style={styles.secondaryTabText}
          data-cy="about-us-tab"
          label="About us"
          component={Link}
          to="/about/us"
        />
        <Tab
          style={styles.secondaryTabText}
          data-cy="about-self-care-tab"
          label="About"
          component={Link}
          to="/about/self_care"
        />
      </Tabs>
    </Toolbar>
    </>
  );
};

export default ApplicationHeader;

const styles = {
  navTabs: {
    width: "100%"
  },
  headerLogo: {
    position: "absolute",
    height: "30px",
    width: "auto"
  },
  tabText: {
    color: "#000",
    fontSize: "1.2rem",
    width: "50px",
  },
  secondaryNavBar: {
    backgroundColor: "#eee",
    position: "absolute",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    left: "0",
    top: "64px",
    width: "100vw",
  },
  secondaryNavTabs: {
    width: "100%",
  },
  secondaryTabText: {
    color: "#000",
    fontSize: "1rem",
    width: "50px",
  },
};
