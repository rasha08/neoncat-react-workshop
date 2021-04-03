import { AsyncActionsState } from '../../shared/types/AsyncActionsState';
import { ReduxAction } from '../../shared/types/ReduxAction';
import { ReduxReducer } from '../../shared/types/ReduxReducer';

export enum NewsActionTypes {
  SetNewsList = 'SetNewsList',
  SetSingleNews = 'SetSingleNews',
  SetNewsError = 'SetNewsError',
  SetNewsRequestInProgress = 'SetNewsRequestInProgress',
}

export type News = unknown;

export type NewsState = {
  list: News[];
  single: News | null;
} & AsyncActionsState;

export type SetNewsListAction = ReduxAction<NewsActionTypes.SetNewsList, News[]>;
export type SetSingleNewsAction = ReduxAction<NewsActionTypes.SetSingleNews, News>;
export type SetNewsErrorAction = ReduxAction<NewsActionTypes.SetNewsError, string>;
export type SetNewsRequestInProgressAction = ReduxAction<NewsActionTypes.SetNewsRequestInProgress, boolean>;

export type NewsAction = SetNewsListAction | SetSingleNewsAction | SetNewsErrorAction | SetNewsRequestInProgressAction;

export type NewsReducer = ReduxReducer<NewsState, NewsAction>;
