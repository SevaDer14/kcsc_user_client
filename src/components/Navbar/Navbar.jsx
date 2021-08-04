import React from "react";
import DesktopNav from "./ApplicationHeader";
import MobileNav from "./MobileApplicationHeader";
import { Hidden } from "@material-ui/core";

const Navbar = () => {
  return (
    <>
      <Hidden mdDown>
        <DesktopNav />
      </Hidden>
      <Hidden lgUp>
        <MobileNav />
      </Hidden>
    </>
  );
};

export default Navbar;
