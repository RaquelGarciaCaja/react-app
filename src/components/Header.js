import React from "react";
import bee from "../image/bee-black.png";
import "../stylesheets/Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const open = this.state.isOpen ? "" : "hidden";
    return (
      <header className="header">
        <div className="header--fix">
          <img className="header--bee" src={bee} alt="the-writing-bee" />
          <i className="fas fa-bars header--menu" onClick={this.handleClick}></i>
        </div>
        <ul className={`header--hidden ${open}`}>
          <li className=" header--sub header--home ">Home</li>
          <li className="header--sub wilson--span">Past writing bees</li>
        </ul>
      </header>
    );
  }
}
export default Header;
