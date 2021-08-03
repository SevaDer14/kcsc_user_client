import React from "react";
import DesktopNav from "./ApplicationHeader";
import MobileNav from "./MobileApplicationHeader";
import { Hidden } from "@material-ui/core";

const Navbar = () => {
  return (
    <>
      <Hidden smDown>
        <DesktopNav />
      </Hidden>
      <Hidden mdUp>
        <MobileNav />
      </Hidden>
    </>
  );
};

export default Navbar;
