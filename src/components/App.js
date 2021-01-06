import React from "react";
import Header from "./Header";
import WritingBee from "./WritingBee";
import Global from "./Global";
import Students from "./Students";

import "../stylesheets/App.scss";

const App = () => {
  return (
    <section className="app">
      <Header />
      <WritingBee />
      <Global />
      <Students />
    </section>
  );
};

export default App;
