import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { RegisterLink } from './Register';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const LoginPage = ({ history }) => (
  <div>
    <h1>Login</h1>
    <LoginForm history={history} />
    <RegisterLink />
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={email}
          type="text"
          placeholder="Email address"
          onChange={event => this.setState(byPropKey('email', event.target.value))}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={event => this.setState(byPropKey('password', event.target.value))}
        />
        <button type="submit" disabled={isInvalid}>
          Login
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(LoginPage);
export { LoginForm };
