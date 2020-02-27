import React from "react";
import { ReactComponent as Logo } from "../../assets/logo-github.svg";

const Navbar = () => {
  return (
    <div className="navBar ">
      <div className="navBar__nav ">
        <Logo className="navBar__nav__logo" />
        <h3 className="navBar__nav__title">GITHUB finder</h3>
      </div>
    </div>
  );
};

export default Navbar;
