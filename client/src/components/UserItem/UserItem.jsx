import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { deleteUser } from '../../store/asyncActions/manageCreatedUsers';
import { setCurrentIdAction, setUserAction } from '../../store/reducers/usersReducer';

const UserItem = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    user, dispatch, handleOpenModal, setOpenSnackbar,
  } = props;
  const userValues = Object.values(user);
  userValues.length -= 1;
  const handleEdit = () => {
    handleOpenModal('Update');
    // eslint-disable-next-line react/prop-types,no-underscore-dangle
    dispatch(setCurrentIdAction(user._id));
  };
  const handleDelete = () => {
    // eslint-disable-next-line react/prop-types,no-underscore-dangle
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

export default UserItem;
