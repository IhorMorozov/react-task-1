const defaultState = {
  currentUser: {},
  isAuth: false,
};

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOG_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
};

export const setUser = (payload) => ({ type: SET_USER, payload });
export const logOut = () => ({ type: LOG_OUT });
