import { createReduxAction } from '../../shared/utils/createReduxAction';
import {
  NewsActionTypes,
  SetNewsErrorAction,
  SetNewsListAction,
  SetNewsRequestInProgressAction,
  SetSingleNewsAction,
} from './types';

export const setNewsListAction = createReduxAction<SetNewsListAction>(NewsActionTypes.SetNewsList);
export const setSingleNewsAction = createReduxAction<SetSingleNewsAction>(NewsActionTypes.SetSingleNews);
export const setNewsErrorAction = createReduxAction<SetNewsErrorAction>(NewsActionTypes.SetNewsError);
export const setNewsRequestInProgressAction = createReduxAction<SetNewsRequestInProgressAction>(
  NewsActionTypes.SetNewsRequestInProgress,
);
