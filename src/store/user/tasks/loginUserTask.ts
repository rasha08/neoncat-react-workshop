import { AsyncTask } from '../../../shared/types/AsyncTask';
import { UserAction } from '../types';
import { setUserAction, setUserErrorAction, setUserRequestInProgressAction } from '../actions';
import { getApiUrl } from '../../../shared/utils/getApiUrl';

export type UserCredentials = {
  email: string;
  password: string;
};

enum UserApiEndpoint {
  Login = 'login',
}

export const loginUserTask: AsyncTask<UserAction, UserCredentials> = credentials => (dispatch, _, { httpClient }) => {
  dispatch(setUserRequestInProgressAction(true));
  return httpClient
    .post(getApiUrl(UserApiEndpoint.Login), credentials)
    .then(({ data }) => dispatch(setUserAction(data)))
    .catch(() => dispatch(setUserErrorAction('Oops: Something Went Wrong')))
    .finally(() => dispatch(setUserRequestInProgressAction(false)));
};
