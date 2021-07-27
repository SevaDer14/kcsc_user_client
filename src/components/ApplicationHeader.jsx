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
              to="/about"
            />
            <Tab
              style={styles.tabText}
              data-cy="contact-tab"
              label="Contact"
              component={Link}
              to="/contact"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Slide>
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
};
