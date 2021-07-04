import React from "react";

const Header = ({ children }) => {
  return (
    <>
      <h1 data-cy="header-title">Kensington & Chelsea Social Council</h1>
      {children}
    </>
  );
};

export default Header;
