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
import { useSelector } from "react-redux";

const ApplicationHeader = () => {
  const trigger = useScrollTrigger();
  //const [activeTab, setActiveTab] = useState(0);
  const [parent, setParent] = useState("/home");
  const landingPage = useRouteMatch("/home");
  const { navigation } = useSelector((state) => state.app_data);

  const mainTabs = navigation.main_tabs.map((tab) => (
    <Tab
      style={styles.tabText}
      data-cy={`${tab.label}-tab`}
      label={tab.label}
      component={Link}
      to={tab.link}
      onClick={setParent(`${tab.label}`)}
    />
  ));

  const secondaryTabs = navigation.secondary_tabs.map((tab) => {
    {
      tab.parent === parent && (
        <Tab
          style={styles.secondaryTabText}
          data-cy={`${tab.label}-tab`}
          label={tab.label}
          component={Link}
          to={tab.link}
        />
      );
    }
  });

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
              //value={activeTab}
              //onChange={handleChange}
              indicatorColor="secondary"
              style={styles.navTabs}
              centered
            >
              {mainTabs}
            </Tabs>
          </Toolbar>
        </AppBar>
      </Slide>
      {secondaryTabs && (
        <Toolbar style={styles.secondaryNavBar}>
          <Tabs style={styles.secondaryNavTabs} centered>
            {secondaryTabs}
          </Tabs>
        </Toolbar>
      )}
    </>
  );
};

export default ApplicationHeader;

const styles = {
  navTabs: {
    width: "100%",
  },
  headerLogo: {
    position: "absolute",
    height: "30px",
    width: "auto",
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
