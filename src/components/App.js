import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { firebase } from '../firebase';

import Navigation from './Navigation';
import LandingPage from './Landing';
import LoginPage from './Login';
import RegisterPage from './Register';
import PasswordRefreshPage from './PasswordRefresh';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(
      authUser => (authUser ? this.setState({ authUser }) : this.setState({ authUser: null }))
    );
  }

  render() {
    const { authUser } = this.state;
    return (
      <Router>
        <div>
          <Navigation authUser={authUser} />

          <hr />

          <Route exact path={routes.LANDING} component={LandingPage} />
          <Route exact path={routes.LOGIN} component={LoginPage} />
          <Route exact path={routes.REGISTER} component={RegisterPage} />
          <Route exact path={routes.PASSWORD_REFRESH} component={PasswordRefreshPage} />
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.ACCOUNT} component={AccountPage} />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
