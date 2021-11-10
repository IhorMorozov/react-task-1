import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';

const UserForm = (props) => {
  const {
    open, handleSave, handleClose, action,
  } = props;
  const [user, setUser] = useState({
    email: '', name: '', surname: '', dateOfBirth: '', city: '',
  });
  const inputHandler = (value, id) => {
    setUser({ ...user, [`${id}`]: value });
  };
  const buttonHandler = (newUser) => {
    handleSave(newUser);
  };
  const title = `${action} user`;
  const inputOptions = [{ id: 'email', type: 'email', handler: inputHandler },
    { id: 'name', type: 'text', handler: inputHandler },
    { id: 'surname', type: 'text', handler: inputHandler },
    { id: 'dateOfBirth', type: 'date', handler: inputHandler },
    { id: 'city', type: 'text', handler: inputHandler }];
  const buttonOptions = [{ name: 'Back', user, handler: handleClose }, { name: 'Save', user, handler: buttonHandler }];
  return (
    <Modal open={open} handleClose={handleClose}>
      <Form title={title} inputOptions={inputOptions} buttonOptions={buttonOptions} />
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
