import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../wrappers/PrivateRoute'
import { AuthProvider } from '../contexts/AuthContext'
import DataContext from '../contexts/DataContext'

import Dashboard from './Dashboard'
import BloodSugarPage from './BloodSugarPage'
import Medication from './Medication'
import Questions from './Questions'
import Signup from './Signup'
import Login from './Login'
import BloodSugarGraph from './bloodSugSubComps/BloodSugGraph'

function App() {
  return (
      <AuthProvider>
            <DataContext>
                <Router>
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/signup' component={Signup} />
                        <PrivateRoute exact path='/' component={Dashboard} />
                        <PrivateRoute exact path='/bloodsugar' component={BloodSugarPage} />
                        <PrivateRoute exact path='/bloodsugargraph' component={BloodSugarGraph} />
                        <PrivateRoute exact path='/medication' component={Medication} />
                        <PrivateRoute exact path='/questions' component={Questions} />
                    </Switch>
                </Router>
            </DataContext>
      </AuthProvider>
  );
}


export default App;
