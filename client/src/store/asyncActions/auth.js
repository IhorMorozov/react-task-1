import axios from 'axios';
import { setUser } from '../reducers/authReducer';

export const registration = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/registration', {
      username: email, password,
    });
    return response.data.message;
  } catch (e) {
    return e.data.message;
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', {
      username: email, password,
    });
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
    return response.data.message;
  } catch (e) {
    return e.data.message;
  }
};

export const auth = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/auth/auth', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
    return response.data.message;
  } catch (e) {
    localStorage.removeItem('token');
    return e.data;
  }
};
