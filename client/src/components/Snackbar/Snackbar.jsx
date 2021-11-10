import React from 'react';
import { Snackbar } from '@mui/material';
import PropTypes from 'prop-types';

const CustomSnackbar = (props) => {
  const { open, setOpen, action } = props;
  const message = `User was successfully ${action.toLowerCase()}d`;
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </div>
  );
};

CustomSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};

export default CustomSnackbar;
