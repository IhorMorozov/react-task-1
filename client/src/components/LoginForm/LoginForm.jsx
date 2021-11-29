import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from '../UserForm/UserForm.module.scss';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import { login } from '../../store/asyncActions/auth';

const LoginForm = () => {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Required'),
    password: Yup.string().max(10, 'Must be 15 characters or less').required('Required'),
  });
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => dispatch(login(values.email, values.password))}
    >
      {() => (
        <div className={styles.form}>
          <h1>Log In</h1>
          <Form>
            <TextField name="email" type="email" />
            <TextField name="password" type="password" />
            <div className={styles.buttonWrapper}>
              <Button type="submit">Log In</Button>
              <Button type="button"><Link to="/registration">&#10148; Register</Link></Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
