import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { UserState } from './user/types';
import { userReducer } from './user/reducer';
import { NewsState } from './news/types';
import { newsReducer } from './news/reducer';
import axios from 'axios';

export type StoreState = {
  user: UserState;
  news: NewsState;
};

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({ httpClient: axios })));
