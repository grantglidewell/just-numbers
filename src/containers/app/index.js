import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Preferences from '../preferences'
import Results from '../results'
import Input from '../input'

import'./app.css'

const App = () => (
  <div>
    <header>
      <Link to="/preferences">Preferences</Link>
      <Link to="/results">Results</Link>
      <Link to="/input">Input</Link>
    </header>

    <main>
      <Route exact path="/" component={Results} />
      <Route exact path="/input" component={Input} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/preferences" component={Preferences} />
    </main>
  </div>
)

export default App
