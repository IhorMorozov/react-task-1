import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { deleteUser } from '../../store/asyncActions/crudUsers';
import { setCurrentIdAction, setUserAction } from '../../store/reducers/usersReducer';

const UserItem = (props) => {
  const {
    user, dispatch, handleOpenModal, setOpenSnackbar,
  } = props;
  const userValues = Object.values(user);
  userValues.length -= 1;
  const handleEdit = () => {
    handleOpenModal('Update');
    // eslint-disable-next-line no-underscore-dangle
    dispatch(setCurrentIdAction(user._id));
  };
  const handleDelete = () => {
    // eslint-disable-next-line no-underscore-dangle
    dispatch(deleteUser(user._id));
    dispatch(setUserAction('Delete'));
    setOpenSnackbar(true);
  };
  return (
    <tr>
      {userValues.map((value) => <td key={Math.random() * 100}>{value}</td>)}
      <td>
        <IconButton onClick={() => handleEdit()}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete()}>
          <DeleteIcon />
        </IconButton>
      </td>
    </tr>
  );
};

UserItem.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  setOpenSnackbar: PropTypes.func.isRequired,
};

export default UserItem;
