import { lazy, mount } from 'navi';
import { routePaths } from './routePaths';

const routes = {
  [routePaths.auth.path]: lazy(() => import('../pages/Auth')),
  [routePaths.home.path]: lazy(() => import('../pages/Home')),
};

export default mount(routes);
