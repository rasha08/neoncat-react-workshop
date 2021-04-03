import { ReduxReducer } from '../../shared/types/ReduxReducer';
import { ReduxAction } from '../../shared/types/ReduxAction';
import { AsyncActionsState } from '../../shared/types/AsyncActionsState';

export enum UserActionTypes {
  SetUser = 'SetUser',
  SetUserError = 'SetUserError',
  SetUserRequestInProgress = 'SetUserRequestInProgress',
}

export type User = { id: string; email: string };

export type UserState = {
  user: User;
} & AsyncActionsState;

export type SetUserAction = ReduxAction<UserActionTypes.SetUser, User>;
export type SetUserErrorAction = ReduxAction<UserActionTypes.SetUserError, string>;
export type SetUserRequestInProgressAction = ReduxAction<UserActionTypes.SetUserRequestInProgress, boolean>;

export type UserAction = SetUserAction | SetUserErrorAction | SetUserRequestInProgressAction;
export type UserReducer = ReduxReducer<UserState, UserAction>;
