import { UserActionTypes, UserReducer, UserState } from './types';
import { set, updateAll } from 'shades';

const initialState: UserState = {
  user: { id: '', email: '' },
  requestInProgress: false,
  error: '',
};

export const userReducer: UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SetUser:
      return updateAll<UserState>(set('user')(action.payload), set('error')(''))(state);
    case UserActionTypes.SetUserRequestInProgress:
      return set('requestInProgress')(action.payload)(state);
    case UserActionTypes.SetUserError:
      return set('error')(action.payload)(state);
    default:
      return state;
  }
};
