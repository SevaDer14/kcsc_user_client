import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  IconButton,
  Drawer,
  Tab,
  Box,
  Collapse,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import CHWLLogo from "../../assets/LogoCHWLMobile.png";
import AppData from "../../modules/AppData";

const MobileApplicationHeader = () => {
  const trigger = useScrollTrigger();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const landingPage = useRouteMatch("/home");
  const { appData, appDataFetched } = useSelector((state) => state);
  const { main_tabs } = appData.navigation;
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const fetchApplicationData = async () => {
      if (!appDataFetched) {
        await AppData.read();
      }
    };
    fetchApplicationData();
  }, [appDataFetched]);

  const toKebabCase = (string) =>
    string.replace(/\s+/g, "-").replace("&", "and").toLowerCase();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const toggleOpen = (tabLabel) => {
    if (tabLabel === "about") {
      setAboutOpen(!aboutOpen);
    }
  };

  const mainTabs = main_tabs.map((tab, index) => {
    if (!tab.secondary_tabs) {
      return (
        <Tab
          key={`main-tab-${index}`}
          style={styles.tabText}
          data-cy={`${toKebabCase(tab.label)}-tab`}
          label={tab.label}
          component={Link}
          to={tab.link}
          onClick={() => handleDrawerClose()}
        />
      );
    } else {
      const secondaryTabs = tab.secondary_tabs.map((secondaryTab, index) => (
        <Tab
          key={`secondary-tab-${index}`}
          style={styles.secondaryTabText}
          data-cy={`${toKebabCase(secondaryTab.label)}-tab`}
          label={secondaryTab.label}
          component={Link}
          to={secondaryTab.link}
          onClick={() => handleDrawerClose()}
        />
      ));
      return (
        <Box style={{...styles.center, width: "100%"}} key={`main-tab-${index}`}>
          <Tab
            style={styles.tabText}
            data-cy={`${toKebabCase(tab.label)}-tab`}
            label={tab.label}
            onClick={() => toggleOpen(tab.label)}
          />
          <Collapse
            style={{ width: "100%" }}
            in={aboutOpen}
            timeout="auto"
            unmountOnExit
          >
            <Divider variant="fullWidth" />
            <Box style={{ ...styles.center, backgroundColor: "#eee" }}>
              {secondaryTabs}
            </Box>
          </Collapse>
        </Box>
      );
    }
  });

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar data-cy="application-header" elevation={0} style={styles.nav}>
          <Toolbar
            style={
              !landingPage
                ? styles.nav
                : { ...styles.nav, justifyContent: "flex-end" }
            }
          >
            {!landingPage && (
              <img
                src={CHWLLogo}
                data-cy="header-logo"
                style={styles.headerLogo}
                alt="Community Health West London"
              />
            )}
            <IconButton
              data-cy="burger-menu"
              edge="end"
              aria-label="menu"
              aria-haspopup="true"
              onClick={() => handleDrawerOpen()}
            >
              <MenuIcon fontSize="large" style={styles.burger} />
            </IconButton>
            <Drawer
              anchor="top"
              onClose={() => handleDrawerClose()}
              {...{
                open: drawerOpen,
              }}
            >
              <Box style={styles.center}>{mainTabs}</Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
};

export default MobileApplicationHeader;

const styles = {
  nav: {
    display: "flex",
    width: "100%",
    marginBottom: "0px",
    justifyContent: "space-between",
  },
  headerLogo: {
    width: "70px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  tabText: {
    fontSize: "1.2rem",
  },
  secondaryTabText: {
    fontSize: "1rem",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
