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
import { HashLink } from "react-router-hash-link";
import Functions from "../../modules/Functions";
import mobileNavStyle from "../../theme/mobileNavTheme";

const MobileApplicationHeader = () => {
  const classes = mobileNavStyle();
  const trigger = useScrollTrigger();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const landingPage = useRouteMatch("/home");
  const { appData, appDataFetched } = useSelector((state) => state);
  const { main_tabs } = appData.navigation;
  const [tabOpen, setTabOpen] = useState({
    about: false,
    services: false,
    newsAndInfo: false,
  });

  useEffect(() => {
    const fetchApplicationData = async () => {
      if (!appDataFetched) {
        await AppData.read();
      }
    };
    fetchApplicationData();
  }, [appDataFetched]);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setTabOpen({
      about: false,
      services: false,
      newsAndInfo: false,
    });
  };

  const toggleOpen = (tabLabel) => {
    let open = tabOpen[tabLabel];
    setTabOpen({ ...tabOpen, [tabLabel]: !open });
  };

  const mainTabs = main_tabs.map((tab, index) => {
    if (!tab.secondary_tabs) {
      return (
        <Tab
          key={`main-tab-${index}`}
          className={classes.tabText}
          data-cy={`${Functions.toKebabCase(tab.label)}-tab`}
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
          className={classes.secondaryTabText}
          data-cy={`${Functions.toKebabCase(secondaryTab.label)}-tab`}
          label={secondaryTab.label}
          component={secondaryTab.ref ? HashLink : Link}
          smooth={secondaryTab.ref ? true : undefined}
          to={
            secondaryTab.ref
              ? `${secondaryTab.link}#${secondaryTab.ref}`
              : secondaryTab.link
          }
          onClick={() => handleDrawerClose()}
        />
      ));
      return (
        <Box className={classes.centerWide} key={`main-tab-${index}`}>
          <Tab
            className={classes.tabText}
            data-cy={`${Functions.toKebabCase(tab.label)}-tab`}
            label={tab.label}
            onClick={() => toggleOpen(tab.label)}
          />
          <Collapse
            style={{ width: "100vw" }}
            in={tabOpen[tab.label]}
            timeout="auto"
            unmountOnExit
          >
            <Divider variant="fullWidth" />
            <Box className={classes.centerDark}>{secondaryTabs}</Box>
          </Collapse>
        </Box>
      );
    }
  });

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          data-cy="application-header"
          elevation={0}
          className={classes.nav}
        >
          <Toolbar className={!landingPage ? classes.nav : classes.navRight}>
            {!landingPage && (
              <img
                src={CHWLLogo}
                data-cy="header-logo"
                className={classes.headerLogo}
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
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer
              anchor="top"
              onClose={() => handleDrawerClose()}
              {...{
                open: drawerOpen,
              }}
            >
              <Box className={classes.centerWide}>{mainTabs}</Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
};

export default MobileApplicationHeader;
