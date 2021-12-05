import axios from 'axios';
import { setAllUsersAction } from '../reducers/usersReducer';

export const getAllUsers = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/api/users');
  dispatch(setAllUsersAction(response.data));
  return response.data;
};
export const createUser = (user) => async (dispatch) => {
  const response = await axios.post('http://localhost:5000/api/users', user);
  dispatch(getAllUsers());
  return response.data;
};
export const updateUser = (user) => async (dispatch) => {
  const response = await axios.put('http://localhost:5000/api/users', user);
  dispatch(getAllUsers());
  return response.data;
};
export const deleteUser = (id) => async (dispatch) => {
  const response = await axios.delete(`http://localhost:5000/api/users/${id}`);
  dispatch(getAllUsers());
  return response.data;
};
