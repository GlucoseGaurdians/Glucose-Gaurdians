import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../wrappers/PrivateRoute'
import { AuthProvider } from '../contexts/AuthContext'
import DataContext from '../contexts/DataContext'
import ScreenSize from '../contexts/ScreenSizeContext'

import Dashboard from './Dashboard'
import BloodSugarPage from './BloodSugarPage'
import BloodSugGraph from './bloodSugSubComps/BloodSugGraph'
import Medication from './Medication'
import Questions from './Questions'
import Signup from './authComponents/Signup'
import Login from './authComponents/Login'
import ResetPassword from './authComponents/ResetPassword'
import UpdateProfile from './authComponents/UpdateProfile'




function App() {

  return (
      <AuthProvider>
        <ScreenSize>
        <DataContext>
                <Router>
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/update-profile' component={UpdateProfile} />
                        <Route exact path='/reset-password' component={ResetPassword} />
                        <PrivateRoute exact path='/' component={Dashboard} />
                        <PrivateRoute exact path='/bloodsugar' component={BloodSugarPage} />
                        <PrivateRoute exact path='/bloodsugar/graph' component={BloodSugGraph} />
                        <PrivateRoute exact path='/medication' component={Medication} />
                        <PrivateRoute exact path='/questions' component={Questions} />
                    </Switch>
                </Router>
        </DataContext>
        </ScreenSize>
      </AuthProvider>
  );
}


export default App;
