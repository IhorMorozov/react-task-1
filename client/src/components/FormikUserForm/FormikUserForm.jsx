import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';
import styles from './FormikUserForm.module.scss';
import Button from '../Button/Button';

const FormikUserForm = (props) => {
  const {
    title, handleClose, handleSave,
  } = props;

  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Required'),
    name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    surname: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    dateOfBirth: Yup.string().required('Required'),
    city: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  });
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        surname: '',
        dateOfBirth: '',
        city: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => handleSave(values)}
    >
      {() => (
        <div className={styles.form}>
          <h1>{title}</h1>
          <Form>
            <TextField name="email" type="email" />
            <TextField name="name" type="text" />
            <TextField name="surname" type="text" />
            <TextField name="dateOfBirth" type="date" />
            <TextField name="city" type="text" />
            <div className={styles.buttonWrapper}>
              <Button type="button" buttonHandler={handleClose}>Back</Button>
              <Button type="submit">Save</Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

FormikUserForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default FormikUserForm;
