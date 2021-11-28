import React from 'react';
import './UserTable.module.scss';
import PropTypes from 'prop-types';
import UserItem from '../UserItem/UserItem';

const UserTable = (props) => {
  const {
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
        {users.length ? users.map((user) => (
          <UserItem
            user={user}
            key={user.email}
            dispatch={dispatch}
            handleOpenModal={handleOpenModal}
            setOpenSnackbar={setOpenSnackbar}
          />
        )) : <tr style={{ padding: '1rem' }}><td>No available users...</td></tr>}
      </tbody>
    </table>
  );
};

UserTable.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  dispatch: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  setOpenSnackbar: PropTypes.func.isRequired,
};

export default UserTable;
