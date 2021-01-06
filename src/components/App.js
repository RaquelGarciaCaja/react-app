import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import WritingBee from "./WritingBee";
import Global from "./Global";
import Students from "./Students";
import Wilson from "./Wilson";
import Bee from "./Bee";
import Form from "./Form";
import Competition from "./Competition";
import Footer from "./Footer";

import "../stylesheets/App.scss";

const App = () => {
  return (
    <section className="app">
      <Header />
      <Switch>
        <Route path="/Bee">
          <Bee />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
        <Route path="/">
          <WritingBee />
          <Global />
          <Students />
          <Wilson />
          <Competition />
          <Footer />
        </Route>
      </Switch>
    </section>
  );
};

export default App;
