import React from "react";

const Header = ({ component }) => {
  return (
    <>
      <h1 data-cy="header-title">Kensington & Chelsea Social Council</h1>
      {component}
    </>
  );
};

export default Header;
