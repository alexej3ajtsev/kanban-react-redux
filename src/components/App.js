import React from "react";
import { Route, Switch } from "react-router-dom";

import Columns from "./Columns";
import Header from "./Header";
import About from "./About";

const App = () => {
  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        backgroundColor: "#fff",
        minHeight: "100vh",
        padding: "0 1em"
      }}
    >
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Columns} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
