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
import {Link} from "react-router-dom"

const ApplicationHeader = () => {
  const trigger = useScrollTrigger();
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, value) => {};

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar data-cy="application-header">
        <Toolbar>
          <Logo
            data-cy="header-logo"
            style={{ height: "30px", width: "auto" }}
            alt="Community Health West London"
          />
          <Tabs
            value={activeTab}
            onChange={(event) => setActiveTab(event.value)}
            indicatorColor="secondary"
          >
            <Tab data-cy="home-tab" label="Home" component={Link} to="/"/>
            <Tab data-cy="services-tab" label="Services" component={Link} to="/services"/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default ApplicationHeader;
