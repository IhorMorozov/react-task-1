import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import styles from '../UserForm/UserForm.module.scss';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import { registration } from '../../store/asyncActions/auth';

const RegistrationForm = () => {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Required'),
    password: Yup.string().max(10, 'Must be 15 characters or less').required('Required'),
  });
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => registration(values.email, values.password)}
    >
      {() => (
        <div className={styles.form}>
          <h1>Register</h1>
          <Form>
            <TextField name="email" type="email" />
            <TextField name="password" type="password" />
            <div className={styles.buttonWrapper}>
              <Button type="submit">Register</Button>
              <Button type="button"><Link to="/login">&#10148; Log In</Link></Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegistrationForm;
