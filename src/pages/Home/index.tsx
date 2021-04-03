import React from 'react';
import { mount, route } from 'navi';

import { routePaths } from '../../routing/routePaths';

import NewsList from './List/NewsList';
import SingleNews from './Single/SingleNews';

export default mount({
  [routePaths.home.sub.list.path]: route(() => ({
    title: routePaths.home.sub.list.name,
    view: <NewsList />,
  })),
  [routePaths.home.sub.single.path]: route(() => ({
    title: routePaths.home.sub.single.name,
    view: <SingleNews />,
  })),
});
