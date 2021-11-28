import React from 'react';
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

export default Button;
