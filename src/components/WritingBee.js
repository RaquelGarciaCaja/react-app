import React from "react";
import { Link } from "react-router-dom";
import boomWrite from "../image/boomwriter-white.png";
import "../stylesheets/WritingBee.scss";

const WritingBee = () => {
  return (
    <div className="writing">
      <Link to="/Bee" className="writing--link">
        <div className="writing--yearContainer">
          <i className="writing--scroll fas fa-scroll"></i>
          <p className="writing--year">The 2020</p>
        </div>
        <h1 className="writing--writing">Writing Bee</h1>
      </Link>
      <h3 className="writing--kids">Because all kids love writing stories!</h3>
      <h4 className="writing--powered">Powered by:</h4>
      <div className="writing--imgContainer">
        <img className="writing--img" src={boomWrite} alt="boom-write" title="boom-write" />
      </div>
      <div className="writing--page"></div>
    </div>
  );
};
export default WritingBee;
