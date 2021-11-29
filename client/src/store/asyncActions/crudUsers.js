import axios from 'axios';
import { getAllAction } from '../reducers/usersReducer';

// eslint-disable-next-line import/prefer-default-export
export const createUser = (user) => async () => {
  const response = await axios.post('http://localhost:5000/api/users', user);
  return response.data;
};
// eslint-disable-next-line import/prefer-default-export
export const getAllUsers = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/api/users');
  dispatch(getAllAction(response.data));
};
// eslint-disable-next-line import/prefer-default-export
export const updateUser = (user) => async () => {
  const response = await axios.put('http://localhost:5000/api/users', user);
  return response.data;
};
// eslint-disable-next-line import/prefer-default-export
export const deleteUser = (id) => async () => {
  const response = await axios.delete(`http://localhost:5000/api/users/${id}`);
  return response.data;
};
