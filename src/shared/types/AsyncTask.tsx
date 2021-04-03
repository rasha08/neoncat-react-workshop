import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { ReduxAction } from './ReduxAction';
import { StoreState } from '../../store/store';

type ReduxMiddleware = {
  httpClient: typeof axios;
};

export type AsyncTask<Action extends ReduxAction, ParamType = unknown> = (
  param?: ParamType,
) => ThunkAction<Promise<Action>, StoreState, ReduxMiddleware, Action>;
