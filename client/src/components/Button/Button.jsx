import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, type, buttonHandler } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={styles.button} onClick={buttonHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
