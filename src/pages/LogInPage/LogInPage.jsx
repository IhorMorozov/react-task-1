import React from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles(() => ({
  formWrapper: {
    marginTop: '15rem',
    padding: '5rem',
  },
  title: {
    paddingBottom: '2rem',
  },
}));

const LogInPage = () => {
  const classes = useStyle();
  return (
    <Container maxWidth="sm">
      <Paper elevation={24} className={classes.formWrapper}>
        <Typography variant="h4" className={classes.title}>
          Please, Log In
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="text"
          label="Enter your login"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="password"
          label="Enter your password"
          type="pas"
          fullWidth
        />
        <Button
          variant="contained"
          size={'large'}
          style={{ marginTop: '2rem' }}
        >
          Log In
        </Button>
      </Paper>
    </Container>
  );
};

export default LogInPage;
