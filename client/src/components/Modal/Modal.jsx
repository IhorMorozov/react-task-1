import React from 'react';
import { Dialog } from '@mui/material';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { children, open, handleClose } = props;
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      {children}
    </Dialog>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
