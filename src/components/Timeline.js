import React from "react";
import working from "../image/working.png";
import win from "../image/win.png";

import "../stylesheets/Timeline.scss";

const Timeline = () => {
  return (
    <section className="timeline">
      <h2 className="timeline--title timeline--span">The writing bee timeline</h2>
      <ul className="timeline--seccion">
        <li className="timeline--list">
          <div className="timeline--line">
            <i className="timeline--icon fas fa-circle"></i>
          </div>
          <div className="timeline--block">
            <div className="timeline--containerImg">
              <img
                className="timeline--working mr-3 img-fluid"
                src={working}
                alt="working"
                title="working"
              ></img>
            </div>

            <div className="timeline--text">
              <h5 className="timeline--subTitle">December - March 2020 - Qualifying Sessions</h5>
              <p className="timeline--p">
                Teachers are welcome to conduct classroom-based qualifying sessions with their
                students in <span class="timeline--span">Grades</span> 4-6.
              </p>
            </div>
          </div>
          <img className="mr-3 img-fluid" src={win} alt="Finals"></img>
        </li>
      </ul>
    </section>
  );
};
export default Timeline;
