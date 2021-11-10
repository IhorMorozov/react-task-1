import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { id, type, handler } = props;
  return (
    <>
      {type === 'date'
        ? (
          <TextField
            margin="dense"
            id={id}
            helperText="Enter your day of birth"
            type={type}
            fullWidth
            onChange={(event) => handler(event.target.value, id)}
          />
        )
        : (
          <TextField
            margin="dense"
            id={id}
            label={`Enter your ${id}`}
            type={type}
            fullWidth
            onChange={(event) => handler(event.target.value, id)}
          />
        )}
    </>

  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Input;
