import React from "react";
import { ReactComponent as Logo } from "../assets/kcsc_logo_horizontal.svg";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";

const ApplicationHeader = () => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Toolbar>
          <Logo
            data-cy="header-logo"
            style={{ height: "30px", width: "auto" }}
            alt="Kensington & Chelsea Social Council"
          />
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default ApplicationHeader;
