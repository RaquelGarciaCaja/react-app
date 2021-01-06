import React from "react";
import "../stylesheets/Form.scss";

const Form = () => {
  return (
    <div className="writing">
      <form className="writing--yearContainer">
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">First name</label>
        <input type="text" />
        <label htmlFor="">Last name</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
        <label htmlFor="">Confirm password</label>
        <input type="text" />
      </form>
    </div>
  );
};
export default Form;
