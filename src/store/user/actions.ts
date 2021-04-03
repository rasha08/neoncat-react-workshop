import { SetUserAction, SetUserErrorAction, SetUserRequestInProgressAction, UserActionTypes } from './types';
import { createReduxAction } from '../../shared/utils/createReduxAction';

export const setUserAction = createReduxAction<SetUserAction>(UserActionTypes.SetUser);
export const setUserErrorAction = createReduxAction<SetUserErrorAction>(UserActionTypes.SetUserError);
export const setUserRequestInProgressAction = createReduxAction<SetUserRequestInProgressAction>(
  UserActionTypes.SetUserRequestInProgress,
);
