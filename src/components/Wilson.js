import React from "react";

import women from "../image/women.jpg";
import "../stylesheets/Wilson.scss";

const Wilson = () => {
  return (
    <section className="wilson">
      <div className="wilson--container">
        <img className="wilson--img" src={women} alt="women" title="women" />
        <p className="wilson--p">
          The Writing Bee was the most valuable writing experience I have had with my class in many
          years. My students were fully engaged - they collaborated, edited, imagined, improved, and
          happily worked for many hours on their chapter writing. My students improved their writing
          skills and also learned that they love writing. Invaluable lessons. Thank you,{" "}
          <span className="wilson--span">boomWriter</span>!
        </p>
        <h4 className="wilson--name">D. Wilson</h4>
        <p className="wilson--span wilson--city">
          Camino elementary school, Camino, California USa
        </p>
      </div>
      <a href="https://boomwriter.com/auth/teacher/signup" className="global--a" rel="noreferrer">
        <h3 className="wilson--bee">Start your class writing bee</h3>
      </a>
    </section>
  );
};
export default Wilson;
