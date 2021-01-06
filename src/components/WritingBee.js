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
      <p className="writing--kids">Because all kids love writing stories!</p>
      <p className="writing--powered">Powered by:</p>
      <div className="writing--imgContainer">
        <img className="writing--img" src={boomWrite} alt="boom-write" title="boom-write" />
      </div>
      <div className="writing--page"></div>
      <i class="writing--triangle fas fa-caret-up"></i>
    </div>
  );
};
export default WritingBee;
