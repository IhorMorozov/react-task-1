import React, { useMemo, useState } from 'react';
import { Button, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from '../../components/UserTable/UserTable';
import { createUser, getAllUsers, updateUser } from '../../store/asyncActions/manageCreatedUsers';
import Modal from '../../components/Modal/Modal';
import CustomSnackbar from '../../components/Snackbar/Snackbar';
import { setSearchedUsersAction, setUserAction } from '../../store/reducers/usersReducer';
import Search from '../../components/Search/Search';

const useStyle = makeStyles(() => ({
  wrapper: {
    margin: '8rem 0 3rem',
    padding: '2rem',
  },
  text: {
    padding: '1rem',
  },
}));

const UsersPage = () => {
  const users = useSelector((state) => state.usersReducer.users);
  const currentId = useSelector((state) => state.usersReducer.currentId);
  const action = useSelector((state) => state.usersReducer.action);
  const searchedUsers = useSelector((state) => state.usersReducer.searchedUsers);

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [query, setQuery] = useState('');

  useMemo(() => {
    dispatch(getAllUsers());
    if (query.length === 0) {
      dispatch(setSearchedUsersAction(users));
    }
  }, [users]);

  useMemo(() => {
    dispatch(setSearchedUsersAction(users.filter((user) => {
      const values = Object.values(user).join('');
      return values.toLowerCase().includes(query.toLowerCase());
    })));
  }, [query]);

  const handleOpenModal = (a) => {
    setOpenModal(true);
    dispatch(setUserAction(a));
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleSave = (user) => {
    if (action === 'Create') {
      dispatch(createUser(user));
    } else {
      dispatch(updateUser({ ...user, _id: currentId }));
    }
    setOpenModal(false);
    setOpenSnackbar(true);
  };

  const classes = useStyle();
  return (
    <Container>
      <Paper elevation={24} className={classes.wrapper}>
        <Button variant="outlined" onClick={() => handleOpenModal('Create')}>
          Create
        </Button>
        <Search query={query} setQuery={setQuery} />
        <Modal
          open={openModal}
          handleClose={handleCloseModal}
          handleSave={handleSave}
          action={action}
        />
        <CustomSnackbar open={openSnackbar} setOpen={setOpenSnackbar} action={action} />
        {users.length > 0
          ? (
            <UserTable
              users={searchedUsers}
              dispatch={dispatch}
              handleOpenModal={handleOpenModal}
              setOpenSnackbar={setOpenSnackbar}
            />
          )
          : <h4 className={classes.text}>No users...</h4>}
      </Paper>
    </Container>
  );
};

export default UsersPage;
