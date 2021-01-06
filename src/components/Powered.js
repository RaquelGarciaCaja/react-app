import React from "react";
import "../stylesheets/Powered.scss";

class Powered extends React.Component {
  render() {
    return (
      <section className="powered">
        <p className="powered--title">
          The <span className="powered--spanTitle">writing bee</span> is powered by
        </p>
        <p className=" powered--p ">
          The <span className="powered--span">writing bee</span> employs{" "}
          <span className="powered--span">BoomWriter’s </span> unique content generation platform
          that allows students to compete and collaborate online as they:
        </p>
        <div className=" powered--icons">
          <div className=" powered--container">
            <i className="fas powered--icon fa-book-open"></i>
            <h2 className=" powered__title">Read/View</h2>
            <p className=" powered__subTitle">The prompt</p>
          </div>
          <div className=" powered--container">
            <i className="powered--icon fas fa-keyboard"></i>{" "}
            <h2 className=" powered__title">Write</h2>
            <p className=" powered__subTitle">An entry</p>
          </div>{" "}
          <div className=" powered--container">
            <i className="powered--icon fas fa-share-alt-square"></i>{" "}
            <h2 className=" powered__title">Share</h2>
            <p className=" powered__subTitle">With peers</p>
          </div>{" "}
          <div className=" powered--container">
            <i className="powered--icon fas fa-thumbs-up"></i>{" "}
            <h2 className=" powered__title">Vote</h2>
            <p className=" powered__subTitle">For the favorite</p>
          </div>{" "}
          <div className=" powered--container ">
            <i className=" powered--icon fas fa-redo-alt"></i>{" "}
            <h2 className=" powered__title">Repeat</h2>
            <p className=" powered__subTitle">Until complete</p>
          </div>
        </div>
      </section>
    );
  }
}
export default Powered;
