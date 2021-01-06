import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Global.scss";

const Global = () => {
  return (
    <section className="global">
      <h2 className="global--global">A global event that starts right in your classrooom!</h2>
      <p className="global--p">
        <span className="global--span"> Writing Bee Qualifying Rounds</span> take place in
        individual classrooms around the world. <span className="global--span"> Classroom</span>
        -based winners and top vote-getters qualify for the{" "}
        <span className="global--span">Writing Bee Finals</span> and a chance to become{" "}
        <span className="global--span">The Writing Bee Champion</span>!
      </p>
      <Link to="/Form" className="writing--link">
        <h3 className="global--bee">Start your class writing bee</h3>
      </Link>
    </section>
  );
};
export default Global;
