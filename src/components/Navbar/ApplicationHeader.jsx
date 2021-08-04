import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Tabs,
  Tab,
} from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/LogoCHWLHorisontal.svg";
import AppData from "../../modules/AppData";
import { HashLink } from "react-router-hash-link";

const ApplicationHeader = () => {
  const trigger = useScrollTrigger();
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSecondaryTab, setActiveSecondaryTab] = useState(0);
  const [parent, setParent] = useState("/home");
  const landingPage = useRouteMatch("/home");
  const { appData, appDataFetched } = useSelector((state) => state);
  const { main_tabs, secondary_tabs } = appData.navigation;

  useEffect(() => {
    const fetchApplicationData = async () => {
      if (!appDataFetched) {
        await AppData.read();
      }
    };
    fetchApplicationData();
  }, [appDataFetched]);

  const handleChangeMain = (event, newValue) => {
    setActiveMainTab(newValue);
    setActiveSecondaryTab(0);
  };

  const handleChangeSecondary = (event, newValue) => {
    setActiveSecondaryTab(newValue);
  };

  const toKebabCase = (string) =>
    string.replace(/\s+/g, "-").replace("&", "and").toLowerCase();

  const mainTabs = main_tabs.map((tab, index) => (
    <Tab
      key={`main-tab-${index}`}
      style={styles.tabText}
      data-cy={`${toKebabCase(tab.label)}-tab`}
      label={tab.label}
      component={Link}
      to={tab.link}
      onClick={() => setParent(`${tab.label}`)}
    />
  ));

  const secondaryTabs = secondary_tabs
    .filter((tab) => tab.parent === parent)
    .map((tab, index) => (
      <Tab
        key={`secondary-tab-${index}`}
        style={styles.secondaryTabText}
        data-cy={`${toKebabCase(tab.label)}-sub-tab`}
        label={tab.label}
        component={tab.ref ? HashLink : Link}
        smooth={tab.ref ? true : undefined}
        to={tab.ref ? `${tab.link}#${tab.ref}` : tab.link}
      />
    ));

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
              value={activeMainTab}
              onChange={handleChangeMain}
              style={styles.navTabs}
              centered
            >
              {mainTabs}
            </Tabs>
          </Toolbar>
          {secondaryTabs.length !== 0 && (
            <Toolbar data-cy="secondary-nav-bar" style={styles.secondaryNavBar}>
              <Tabs
                style={styles.navTabs}
                value={activeSecondaryTab}
                onChange={handleChangeSecondary}
                centered
              >
                {secondaryTabs}
              </Tabs>
            </Toolbar>
          )}
        </AppBar>
      </Slide>
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
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    left: "0",
    width: "100%",
  },
  secondaryTabText: {
    color: "#000",
    fontSize: "1rem",
    width: "50px",
  },
};
