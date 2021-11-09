import React, { useState } from 'react';
import {
  Button, Container, Paper, TextField, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { setIsAuthAction } from '../../store/reducers/authReducer';

const useStyle = makeStyles(() => ({
  wrapper: {
    marginTop: '15rem',
    padding: '5rem',
  },
}));

const LogInPage = () => {
  const classes = useStyle();
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
  return (
    <Container maxWidth="sm">
      <Paper elevation={24} className={classes.wrapper}>
        <Typography variant="h4" style={{ paddingBottom: '2rem' }}>
          Please, Log In
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="text"
          label="Enter your login"
          type="text"
          fullWidth
          value={user.login}
          onChange={(event) => setUser({ ...user, login: event.target.value })}
        />
        <TextField
          margin="dense"
          id="password"
          label="Enter your password"
          type="pas"
          fullWidth
          value={user.password}
          onChange={(event) => setUser({ ...user, password: event.target.value })}
        />
        <Button
          variant="contained"
          size="large"
          style={{ marginTop: '2rem' }}
          onClick={() => logInHandler()}
        >
          Log In
        </Button>
      </Paper>
    </Container>
  );
};

export default LogInPage;
