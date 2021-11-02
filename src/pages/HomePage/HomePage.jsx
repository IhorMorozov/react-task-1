import React from 'react';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <main>
      <Paper className={styles.paper}>
        <Container fixed>
          <Grid container>
            <Grid item md={6}>
              <div className={styles.contentWrapper}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  React App
                </Typography>
                <Typography variant="h5" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum, quod.
                </Typography>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="secondary">
                    Log In
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </main>
  );
};

export default HomePage;
