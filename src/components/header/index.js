import React from "react";
import "./style.index.scss";
import logo from "./../../static/logo.png";

function Header(props) {
  return (
    <div className="header">
      <img className="logo" src={logo} width="200" alt="" />
    </div>
  );
}

export default Header;
