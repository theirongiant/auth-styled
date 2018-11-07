import React from 'react';
import { Link } from 'react-router-dom';

import LogoutButton from './Logout';
import * as routes from '../constants/routes';

const Navigation = ({ authUser }) => <div>{authUser ? <NavigationAuth /> : <NavigationNotAuth />}</div>;

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.ACCOUNT}>Account</Link>
    </li>
    <li>
      <LogoutButton />
    </li>
  </ul>
);

const NavigationNotAuth = () => (
  <ul>
    <li>
      <Link to={routes.LOGIN}>Login</Link>
    </li>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
  </ul>
);

export default Navigation;
