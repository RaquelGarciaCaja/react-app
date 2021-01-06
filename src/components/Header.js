import React from "react";
import bee from "../image/bee-black.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header--fix">
        <img className="header--bee" src={bee} alt="the-writing-bee" />
        <i class="fas fa-bars header--menu js-menu"></i>
      </div>
      <ul className="header--hidden hidden">
        <li wilson--span>Home</li>
        <li wilson--span>Past writing bees</li>
      </ul>
    </header>
  );
};
export default Header;
