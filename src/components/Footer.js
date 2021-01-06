import React from "react";
import bee from "../image/bee-white.png";
import boom from "../image/boomwriter.png";
import partner from "../image/google-partner.png";

import "../stylesheets/Header.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer--containerImg">
          <img
            className="footer--boom footer--img"
            src={boom}
            alt="boom-writer"
            title="boom-writer"
          />
          <img
            className="footer--bee footer--img"
            src={bee}
            alt="the-writing-bee"
            title="the-writing-bee"
          />
          <img
            className="footer--partner footer--img"
            src={partner}
            alt="google-partner"
            title="google-partner"
          />
        </div>
        <div className="footer--footer">
          <p className=" footer--visit ">The Writing Bee is powered by BoomWriter</p>
          <p className="footer--visit">
            To find out more visit
            <a href="https://boomwriter.com/" className="footer--link">
              {" "}
              www.boomwriter.com
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
