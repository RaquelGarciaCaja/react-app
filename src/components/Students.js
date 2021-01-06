import React from "react";
import "../stylesheets/Students.scss";

const Students = () => {
  return (
    <section className="students">
      <h2 className="students--students">
        The writing bee will improve your students´ learning by providing:
      </h2>
      <ul className="students--list">
        <li className="students--check">
          <i className="students--icon fas fa-check-circle"></i>
          Standards-based writing practice
          <p className="students--p">
            While creating their story, students will strengthen their use of effective techniques,
            descriptive details, and clear event sequences.
          </p>
        </li>
        <li className="students--check ">
          <i className="students--icon fas fa-check-circle"></i>
          Personalized Writing Feedback
          <p className="students--p">
            Providing students individualized feedback on their own work is the most appropriate and
            effective approach to teach writing.
          </p>
        </li>
        <li className="students--check ">
          <i className="students--icon fas fa-check-circle"></i>
          Online Testing Preparation
          <p className="students--p">
            It’s never too soon to prepare students for the online testing environment where they’ll
            be expected to produce their best writing.
          </p>
        </li>
        <li className="students--check ">
          <i className="students--icon fas fa-check-circle"></i>
          Transferable Writing Skills
          <p className="students--p">
            Storywriting offers a plethora of transferable writing skills that will boost their
            ability in both fiction and non-fiction writing assignments.
          </p>
        </li>
      </ul>
      <h3 className="students--bee">Start your class writing bee</h3>
    </section>
  );
};
export default Students;
