import React from "react";
import bee from "../image/bee-black.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img className="header--bee" src={bee} alt="the-writing-bee" />
      <i class="fas fa-bars header--menu js-menu"></i>
    </div>
  );
};
export default Header;
