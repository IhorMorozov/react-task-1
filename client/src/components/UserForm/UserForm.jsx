import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import FormikUserForm from '../FormikUserForm/FormikUserForm';

const UserForm = (props) => {
  const {
    open, handleSave, handleClose, action,
  } = props;
  const title = `${action} user`;
  return (
    <Modal open={open} handleClose={handleClose}>
      {/* eslint-disable-next-line max-len */}
      <FormikUserForm title={title} handleSave={handleSave} handleClose={handleClose} />
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
