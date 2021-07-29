import React from "react";
import DesktopNav from "./navbar/ApplicationHeader";
import MobileNav from "./navbar/MobileApplicationHeader";

const Navbar = () => {
  const mql = window.matchMedia("(max-width: 600px)");
  let mobileView = mql.matches;
  return <>{mobileView ? <MobileNav /> : <DesktopNav />}</>;
};

export default Navbar;
