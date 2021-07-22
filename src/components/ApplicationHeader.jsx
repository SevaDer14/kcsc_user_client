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
import { Link } from "react-router-dom";

const ApplicationHeader = () => {
  const trigger = useScrollTrigger();
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar data-cy="application-header" elevation={0}>
        <Toolbar>
          <Logo
            data-cy="header-logo"
            style={{ height: "30px", width: "auto" }}
            alt="Community Health West London"
          />
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
              to="/"
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
          </Tabs>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default ApplicationHeader;

const styles = {
  navTabs: {
    position: "absolute",
    width: "100%",
  },
  tabText: {
    color: "#000",
    fontSize: "1.2rem",
    width: "50px",
  },
};
