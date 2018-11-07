import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';

import * as routes from '../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const RegisterPage = ({ history }) => (
  <div>
    <h1>Login Page</h1>
    <RegisterForm history={history} />
  </div>
);

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, email, passwordOne } = this.state;
    const { history } = this.props;
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Username"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="text"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="text"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Register
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const RegisterLink = () => (
  <p>
    Don't have an account? <Link to={routes.REGISTER}>Register</Link>
  </p>
);

export default withRouter(RegisterPage);
export { RegisterForm, RegisterLink };
