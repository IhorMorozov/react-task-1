import React from 'react';
import {
  Button, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const Form = (props) => {
  const { title, inputOptions, buttonOptions } = props;
  return (
    <>
      <DialogTitle id="dialog">{title}</DialogTitle>
      <DialogContent>
        {inputOptions.map((input) => (
          <Input
            id={input.id}
            type={input.type}
            handler={input.handler}
            key={input.id}
          />
        ))}
      </DialogContent>
      <DialogActions>
        {/* eslint-disable-next-line max-len */}
        {buttonOptions.map((button) => <Button onClick={() => button.handler(button.user)} key={button.name}>{button.name}</Button>)}
      </DialogActions>
    </>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  inputOptions: PropTypes.instanceOf(Array).isRequired,
  buttonOptions: PropTypes.instanceOf(Array).isRequired,
};

export default Form;
