import React from "react";
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
          <Typography variant="h6" data-cy="header-title">
            Kensington & Chelsea Social Council
          </Typography>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default ApplicationHeader;
