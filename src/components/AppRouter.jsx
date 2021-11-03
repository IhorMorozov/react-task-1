import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';

const AppRouter = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const routerWrapper = (routes) => routes.map((route) => (
    <Route
      component={route.component}
      path={route.path}
      exact={route.exact}
      key={route.path}
    />
  ));
  return (
    <Switch>
      {isAuth ? routerWrapper(privateRoutes) : routerWrapper(publicRoutes)}
      {isAuth ? <Redirect to="/users" /> : <Redirect to="/login" />}
    </Switch>
  );
};

export default AppRouter;
