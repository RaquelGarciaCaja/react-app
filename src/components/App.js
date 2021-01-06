import React from "react";
import Header from "./Header";
import WritingBee from "./WritingBee";

import "../stylesheets/App.scss";

const App = () => {
  return (
    <section className="app">
      <Header />
      <WritingBee />
    </section>
  );
};

export default App;
