import React from 'react';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { privateRoutes } from '../../router/routes';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles((theme) => ({
  navLink: {
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
      <Container fixed>
        <Toolbar>
          {privateRoutes.map((route) => (
            <Box mr={3}>
              <NavLink
                to={route.path}
                key={route.path}
                className={classes.navLink}
              >
                <Button variant="contained" size="small">
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
