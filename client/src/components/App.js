import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../wrappers/PrivateRoute'
import { AuthProvider } from '../contexts/AuthContext'

import Dashboard from './Dashboard'
import BloodSugarPage from './BloodSugarPage'
import BloodSugGraph from './bloodSugSubComps/BloodSugGraph'
import Medication from './Medication'
import Questions from './Questions'
import Signup from './Signup'
import Login from './Login'

function App() {
  return (
      <AuthProvider>
            <Router>
                <Switch>
                    <PrivateRoute exact path='/' component={Dashboard} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <PrivateRoute exact path='/bloodsugar' component={BloodSugarPage} />
                    <PrivateRoute exact path='/bloodsugar/graph' component={BloodSugGraph} />
                    <PrivateRoute exact path='/medication' component={Medication} />
                    <PrivateRoute exact path='/questions' component={Questions} />
                </Switch>
            </Router>
      </AuthProvider>
  );
}


export default App;
