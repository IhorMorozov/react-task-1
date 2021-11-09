import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(() => ({
  wrapper: {
    marginTop: '15rem',
    padding: '5rem',
  },
}));

const UsersPage = () => {
  const classes = useStyle();
  return (
    <Container>
      <Paper elevation={24} className={classes.wrapper}>
        <Typography variant="h1">This is Users Page</Typography>
      </Paper>
    </Container>
  );
};

export default UsersPage;
