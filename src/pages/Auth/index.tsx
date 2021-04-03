import React from 'react';
import { mount, route } from 'navi';

import Login from './Login/Login';

import { routePaths } from '../../routing/routePaths';

export default mount({
  [routePaths.auth.sub.login.path]: route(() => ({
    title: routePaths.auth.sub.login.name,
    view: <Login />,
  })),
});
