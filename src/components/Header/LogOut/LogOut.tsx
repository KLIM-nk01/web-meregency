import React from 'react';
import { LogOutWrapper } from './LogOutStyle';
import NoAva from '@assets/NoAvatar.png';
import Button from '@components/common/Button/Button';
import { useDispatch } from 'react-redux';
import { userUnAuth } from '@store/actionCreators/auth';

const LogOut: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <LogOutWrapper>
      <img src={NoAva} alt="" />
      <Button onClick={() => dispatch(userUnAuth())} round variant={'outlined'}>
        Sign out
      </Button>
    </LogOutWrapper>
  );
};

export default LogOut;