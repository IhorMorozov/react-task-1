import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Modal from '../Modal/Modal';
import styles from './UserForm.module.scss';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

const UserForm = (props) => {
  const {
    open, handleSave, handleClose, action,
  } = props;
  const title = `${action} user`;
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Required'),
    name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    surname: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    dateOfBirth: Yup.string().required('Required'),
    city: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  });
  return (
    <Modal open={open} handleClose={handleClose}>
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
    </Modal>
  );
};

UserForm.propTypes = {
  open: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default UserForm;
