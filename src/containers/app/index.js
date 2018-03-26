import React from "react";
import { Route, Link } from "react-router-dom";
import Preferences from "../preferences";
import Results from "../results";
import Input from "../input";

import "./app.css";

const App = () => (
  <div className="flex">
    <header>
      <h1>Numbers</h1>
    </header>

    <main>
      <Route exact path="/" component={Results} />
      <Route exact path="/input" component={Input} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/preferences" component={Preferences} />
    </main>
    <footer>
      <Link to="/preferences">Preferences</Link>
      <Link to="/results">Results</Link>
      <Link to="/input">Input</Link>
    </footer>
  </div>
);

export default App;
