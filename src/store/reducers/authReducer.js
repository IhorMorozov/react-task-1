const defaultState = {
  isAuth: true,
};

const SET_IS_AUTH = 'SET_IS_AUTH';

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export const setIsAuthAction = (payload) => ({ type: SET_IS_AUTH, payload });