import React from 'react';
import './UserTable.module.scss';
import UserItem from '../UserItem/UserItem';

const UserTable = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    users, dispatch, handleOpenModal, setOpenSnackbar,
  } = props;

  const tableColumns = ['Id', 'Email', 'First name', 'Last name', 'Date of birth', 'City', 'Operations'];
  return (
    <table>
      <thead>
        <tr>
          {tableColumns.map((column) => <th key={column}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {/* eslint-disable-next-line react/prop-types */}
        {users.map((user) => (
          <UserItem
            user={user}
            key={user.email}
            dispatch={dispatch}
            handleOpenModal={handleOpenModal}
            setOpenSnackbar={setOpenSnackbar}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
