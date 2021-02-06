import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import Dashboard from './Dashboard'

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/' />
              <Route exact path='/' />
              <Route exact path='/' />
          </Switch>
      </Router>
  );
}


export default App;
