import React, { memo, useCallback } from 'react';
import Input from '../../../components/Input/Input';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserTask } from '../../../store/user/tasks/loginUserTask';
import { StoreState } from '../../../store/store';
import { UserState } from '../../../store/user/types';

const Login = () => {
  const dispatch = useDispatch();

  const login = useCallback(() => {
    dispatch(loginUserTask({ password: 'test', email: 'test@test.com' }));
  }, [dispatch]);

  const { requestInProgress, error } = useSelector<StoreState, UserState>(s => s.user);

  return (
    <div className={'page'}>
      <div className={'form'}>
        <h2>Login to your Account</h2>
        {error && <p className={'error-message'}>{error}</p>}
        <Input placeholder={'enter email'} label={'email'} />
        <Input placeholder={'enter password'} type={'password'} label={'password'} error={'Ne valja'} />
        <Button onClick={login} loading={requestInProgress}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default memo(Login);
