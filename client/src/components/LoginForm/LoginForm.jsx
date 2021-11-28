import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Form/Form';
import { setIsAuthAction } from '../../store/reducers/authReducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ login: '', password: '' });

  const logInHandler = () => {
    if (user.login === 'admin' && user.password === 'pass12345') {
      dispatch(setIsAuthAction(true));
      localStorage.setItem('isAuth', 'true');
    } else {
      dispatch(setIsAuthAction(false));
      localStorage.setItem('isAuth', '');
      // eslint-disable-next-line no-alert
      alert('Username or password entered incorrectly.');
    }
  };

  const inputHandler = (value, id) => {
    setUser({ ...user, [`${id}`]: value });
  };
  const title = 'Log in';
  const inputOptions = [{ id: 'login', type: 'login', handler: inputHandler },
    { id: 'password', type: 'password', handler: inputHandler },
  ];
  const buttonOptions = [{ name: 'Log In', handler: logInHandler }];
  return (
    <Form title={title} inputOptions={inputOptions} buttonOptions={buttonOptions} />
  );
};

export default LoginForm;
