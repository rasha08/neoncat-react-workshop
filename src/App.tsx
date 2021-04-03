import React, { FC, Suspense } from 'react';
import { Router, View } from 'react-navi';

import routes from './routing/routes';

import './App.scss';
import { useSelector } from 'react-redux';
import { StoreState } from './store/store';

const App: FC = () => {
  const state = useSelector<StoreState, StoreState>(s => s);

  console.log(state);

  return (
    <div className={'root'}>
      <Router routes={routes}>
        <Suspense fallback={'loading...'}>
          <View />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
