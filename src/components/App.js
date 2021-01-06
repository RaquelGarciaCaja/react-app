import React from "react";
import Header from "./Header";
import WritingBee from "./WritingBee";
import Global from "./Global";

import "../stylesheets/App.scss";

const App = () => {
  return (
    <section className="app">
      <Header />
      <WritingBee />
      <Global />
    </section>
  );
};

export default App;
