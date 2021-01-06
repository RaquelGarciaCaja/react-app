import React from "react";
import Header from "./Header";
import WritingBee from "./WritingBee";
import Global from "./Global";
import Students from "./Students";
import Wilson from "./Wilson";

import "../stylesheets/App.scss";

const App = () => {
  return (
    <section className="app">
      <Header />
      <WritingBee />
      <Global />
      <Students />
      <Wilson />
    </section>
  );
};

export default App;
