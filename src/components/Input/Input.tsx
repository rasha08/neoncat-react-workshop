import React, { FC } from 'react';
import { Input as AntInput, InputProps } from 'antd';

import './input.scss';

type Props = InputProps & {
  label?: string;
  error?: string | null;
};

const Input: FC<Props> = ({ label, error, ...props }) => {
  return (
    <div className={'input-container'}>
      {!!label && <span className={'input-container-label'}>{label}</span>}
      <AntInput {...props} className={`${props.className || ''} ${error ? 'error' : ''}`} />
      {!!error && <span className={'input-container-error'}>{error}</span>}
    </div>
  );
};

export default Input;
