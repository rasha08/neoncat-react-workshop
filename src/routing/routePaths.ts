import { RouteParam } from './RouteParam';

export const routePaths = {
  home: {
    path: '/news',
    name: 'Welcome',
    sub: {
      list: {
        path: '/',
        name: 'Welcome to News App',
      },
      single: {
        path: `/:${RouteParam.NewsId}`,
        name: 'Single News Page',
      },
    },
  },
  auth: {
    path: '/auth',
    name: 'Auth',
    sub: {
      login: {
        path: '/login',
        name: 'Login',
      },
    },
  },
};
