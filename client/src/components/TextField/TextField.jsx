import React from 'react';
import { ErrorMessage, useField } from 'formik';
import classNames from 'classnames';
import styles from './TextField.module.scss';

// eslint-disable-next-line react/prop-types
const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  const inputStyle = classNames(styles.textField, meta.touched && meta.error && styles.invalid);
  return (
    <div className={styles.field}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading,react/prop-types */}
      <input className={inputStyle} placeholder={`Enter your ${props.name}`} {...field} {...props} autoComplete="off" />
      <ErrorMessage component="div" className={styles.error} name={field.name} />
    </div>
  );
};
export default TextField;
