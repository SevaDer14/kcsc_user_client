import React from "react";
import DesktopNav from "./ApplicationHeader";
import MobileNav from "./MobileApplicationHeader";

const Navbar = () => {
  const mql = window.matchMedia("(max-width: 1200px)");
  let mobileView = mql.matches;
  return <>{mobileView ? <MobileNav /> : <DesktopNav />}</>;
};

export default Navbar;
