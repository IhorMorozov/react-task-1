import React from 'react';
import {
  AppBar, Box, Button, Container, Toolbar,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { privateRoutes } from '../../router/routes';
import { setIsAuthAction } from '../../store/reducers/authReducer';

const useStyle = makeStyles(() => ({
  navLink: {
    textDecoration: 'none',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navBar: {
    display: 'flex',
  },
}));

const Navbar = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const classes = useStyle();
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(setIsAuthAction(false));
    localStorage.setItem('isAuth', '');
  };
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
      <Container fixed>
        <Toolbar className={classes.toolBar}>
          <Box className={classes.navBar}>
            {privateRoutes.map((route) => (
              <Box mr={3} key={route.path}>
                <NavLink to={route.path} className={classes.navLink}>
                  <Button variant="contained" size="small">
                    {route.link}
                  </Button>
                </NavLink>
              </Box>
            ))}
          </Box>
          {isAuth && (
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={() => logOutHandler()}
              >
                Log Out
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
