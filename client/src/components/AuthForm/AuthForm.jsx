import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../UserForm/UserForm.module.scss';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import { login, registration } from '../../store/asyncActions/auth';

const AuthForm = (props) => {
  const { type, name } = props;
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Required'),
    password: Yup.string().max(10, 'Must be 15 characters or less').required('Required'),
  });
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    if (type === 'login') {
      return dispatch(login(values.email, values.password));
    } if (type === 'registration') {
      return registration(values.email, values.password);
    }
    return values;
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => onSubmit(values)}
    >
      {() => (
        <div className={styles.form}>
          <h1>{name}</h1>
          <Form>
            <TextField name="email" type="email" />
            <TextField name="password" type="password" />
            <div className={styles.buttonWrapper}>
              <Button type="submit">{name}</Button>
              <Button type="button">
                <Link to={`/${type === 'login' ? 'registration' : 'login'}`}>
                  &#10148;
                  {type === 'login' ? 'Register' : 'Log In'}
                </Link>
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

AuthForm.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AuthForm;
