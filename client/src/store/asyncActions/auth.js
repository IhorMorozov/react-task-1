import axios from 'axios';
import { setUser } from '../reducers/authReducer';

// eslint-disable-next-line import/prefer-default-export
export const registration = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/registration', {
      username: email, password,
    });

    console.log(response.data.message);
  } catch (e) {
    console.log(e.response.data.message);
  }
};

// eslint-disable-next-line import/prefer-default-export
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', {
      username: email, password,
    });
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
    console.log(response.data);
  } catch (e) {
    console.log(e.response.data.message);
  }
};

// eslint-disable-next-line import/prefer-default-export
export const auth = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/auth/auth', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
    console.log(response.data);
  } catch (e) {
    console.log(e.response.data.message);
    localStorage.removeItem('token');
  }
};
