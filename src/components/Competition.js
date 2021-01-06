import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Competition.scss";

const Competition = () => {
  return (
    <section className="students">
      <h2 className="students--students">The writing bee competition</h2>
      <p>
        <span className="competition--span">The writing bee kicks</span>
        off in schools with students participating in district or school-based{" "}
        <span className="competition--span">qualifying</span> sessions. Students who qualify move on
        to the <span className="competition--span">Finals</span> with a chance to be crowned{" "}
        <span className="competition--span">the writing bee champion.</span>
      </p>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
};
export default Competition;
