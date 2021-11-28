import React from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const useStyle = makeStyles(() => ({
  wrapper: {
    margin: '8rem 0 3rem',
    padding: '4rem',
  },
}));

const Layout = (props) => {
  const { children } = props;
  const classes = useStyle();
  return (
    <Paper elevation={24} className={classes.wrapper}>
      {children}
    </Paper>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
