

import React from 'react';
import Photos from "./Photos";
import Users from "./Users";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            isLoggedIn:false
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

    }

    login() {
        this.props.auth.login()
        this.setState = {
            isLoggedIn:true
        }
    }

    logout() {
        this.props.auth.logout();
        this.setState = {
            isLoggedIn:false
        }
    }

	render() {
        var isLoggedIn = this.props.auth.isLoggedIn();

		return (<Router>
            {isLoggedIn ?
            <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>AmazGallary</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/photos"}>View Pictures</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/users"}>View Users</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" onClick={this.logout}>Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
              <div>
              <Switch>
                  <Route path="/users" component={Users} />
                  <Route path="/photos" component={Photos} />
                </Switch>
              </div>    
          </div> :
           <div className="App">
           <nav className="navbar navbar-expand-lg navbar-light fixed-top">
             <div className="container">
               <Link className="navbar-brand" >AmazGallary</Link>
               <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                 <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                     <Link className="nav-link"
                      onClick={this.login}>Login</Link>
                   </li>
                 </ul>
               </div>
             </div>
           </nav>
             <div>
             <Switch>
                 <Route path="/users" component={Users} />
                 <Route path="/photos" component={Photos} />
               </Switch>
             </div>    
         </div>

    }
          </Router>
		);
	}
}

