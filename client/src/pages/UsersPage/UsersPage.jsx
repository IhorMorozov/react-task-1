import React, { useMemo, useState } from 'react';
import { Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from '../../components/UserTable/UserTable';
import { createUser, getAllUsers, updateUser } from '../../store/asyncActions/crudUsers';
import CustomSnackbar from '../../components/Snackbar/Snackbar';
import { setSearchedUsersAction, setUserAction } from '../../store/reducers/usersReducer';
import Search from '../../components/Search/Search';
import UserForm from '../../components/UserForm/UserForm';
import Layout from '../../components/Layout/Layout';

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

  return (
    <Container>
      <Layout>
        <Button variant="outlined" onClick={() => handleOpenModal('Create')}>
          Create
        </Button>
        <Search query={query} setQuery={setQuery} />
        <UserForm
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
          : <h4 style={{ padding: '1rem' }}>No users...</h4>}
      </Layout>
    </Container>
  );
};

export default UsersPage;
