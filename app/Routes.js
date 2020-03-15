import Login from "./Login";
import SignUp from "./Register";
import Dashboard from "./Dashboard";
import React, { Component } from "react";
import Callback from './ Callback';
import Auth from './Auth';
import history from './history';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
   console.log('jbjf', nextState.location.hash)
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      console.log('jbjf==', nextState.location.hash)

      auth.handleAuthentication();
    }
  }

  const Routes = () =>(
    <Router history={history} component={Dashboard}>
      <Route path='/' render={(props) => <Dashboard auth={auth} {...props} />} />
      <Route path='/home' render={(props) => <Dashboard auth={auth} {...props} />} />
      <Route path="/callback"
        exact
        render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }}/>
    </Router>
);
export default Routes;

