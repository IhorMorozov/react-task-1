import React from 'react';
import { Snackbar } from '@mui/material';

const CustomSnackbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { open, setOpen, action } = props;
  // eslint-disable-next-line react/prop-types
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

export default CustomSnackbar;
