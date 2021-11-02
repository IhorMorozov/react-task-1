import React from 'react';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { privateRoutes } from '../../router/routes';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { purple } from '@mui/material/colors';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          {privateRoutes.map((route) => (
            <Box mr={3}>
              <NavLink
                to={route.path}
                key={route.path}
                className={styles.navLink}
              >
                <Button variant="contained" color="secondary">
                  {route.link}
                </Button>
              </NavLink>
            </Box>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
