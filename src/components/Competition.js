import React from "react";
import competition from "../image/competition.png";
import "../stylesheets/Competition.scss";

const Competition = () => {
  return (
    <section className="competition">
      <h2 className="competition--competition competition--span">The writing bee competition</h2>
      <p className="competition--p">
        <span className="competition--span">The writing bee kicks</span>
        off in schools with students participating in district or school-based{" "}
        <span className="competition--span">qualifying</span> sessions. Students who qualify move on
        to the <span className="competition--span">Finals</span> with a chance to be crowned{" "}
        <span className="competition--span">the writing bee champion.</span>
      </p>
      <div className="competition--containerImg">
        <img className="competition--img" src={competition} alt="competition" title="competition" />
      </div>
      <ul className="competition--list">
        <li className="competition--containerP ">
          <h2 className="competition--title competition--span">1. Kick off</h2>
          <p className="competition--subTitle">
            Students read the <span className="competition--span">writing bee’s</span> original
            story start before independently writing their version of the next chapter. Teachers
            have the option to provide feedback and request revisions before approving each
            student's work.
          </p>
        </li>
        <li className="competition--containerP ">
          <h2 className="competition--title competition--span">2. Qualifying rounds</h2>
          <p className="competition--subTitle">
            Students read the anonymous submissions of their peers in small batches and vote for
            their favorites. A winning piece is identified to serve as the story’s middle chapter,
            and the process repeats to identify the final chapter.
          </p>
        </li>{" "}
        <li className="competition--containerP ">
          <h2 className="competition--title">3. Finals</h2>
          <p className="competition--subTitle">
            Class chapter winners and top vote-getters qualify to compete in{" "}
            <span className="competition--span">the writing bee finals.</span>
            Plus, all classroom Qualifying round participants are eligible to read and cast votes
            for their favorites throughout The Finals.
          </p>
        </li>{" "}
        <li className="competition--containerP ">
          <h2 className="competition--title">4. Winner</h2>
          <p className="competition--subTitle">
            <span className="competition--span">Writing bee finalists </span>create a new story by
            submitting their work for review by students around the world. Only top vote-getters
            move on in this ‘knockout style’ event until the 2020{" "}
            <span className="competition--span">writing bee champion</span> is crowned!
          </p>
        </li>
      </ul>
    </section>
  );
};
export default Competition;
