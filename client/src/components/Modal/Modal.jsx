import React, { useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,
} from '@mui/material';

const Modal = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    open, handleSave, handleClose, action,
  } = props;
  const [user, setUser] = useState({
    email: '', name: '', surname: '', dateOfBirth: '', city: '',
  });

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="dialog">{`${action} user`}</DialogTitle>
      <DialogContent max-width="xs">
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Enter your email"
          type="email"
          fullWidth
          onChange={(event) => setUser({ ...user, email: event.target.value })}

        />
        <TextField
          margin="dense"
          id="name"
          label="Enter your name"
          type="text"
          fullWidth
          onChange={(event) => setUser({ ...user, name: event.target.value })}

        />
        <TextField
          margin="dense"
          id="surname"
          label="Enter your surname"
          type="text"
          fullWidth
          onChange={(event) => setUser({ ...user, surname: event.target.value })}
        />
        <TextField
          margin="dense"
          id="data"
          helperText="Enter you date of birth"
          type="date"
          fullWidth
          onChange={(event) => setUser({ ...user, dateOfBirth: event.target.value })}

        />
        <TextField
          margin="dense"
          id="city"
          label="Enter your city"
          type="text"
          fullWidth
          onChange={(event) => setUser({ ...user, city: event.target.value })}

        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Back</Button>
        <Button onClick={() => handleSave(user)}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
