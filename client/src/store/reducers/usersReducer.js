const defaultState = {
  users: [],
  currentId: null,
  action: 'Create',
  searchedUsers: [],
};

const GET_ALL = 'GET_ALL';
const SET_CURRENT_ID = 'SET_CURRENT_ID';
const SET_USER_ACTION = 'SET_USER_ACTION';
const SET_SEARCHED_USERS = 'SET_SEARCHED_USERS';

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        users: action.payload,
      };
    case SET_CURRENT_ID:
      return {
        ...state,
        currentId: action.payload,
      };
    case SET_USER_ACTION:
      return {
        ...state,
        action: action.payload,
      };
    case SET_SEARCHED_USERS:
      return {
        ...state,
        searchedUsers: action.payload,
      };
    default:
      return state;
  }
};

export const getAllAction = (payload) => ({ type: GET_ALL, payload });
export const setCurrentIdAction = (payload) => ({ type: SET_CURRENT_ID, payload });
export const setUserAction = (payload) => ({ type: SET_USER_ACTION, payload });
export const setSearchedUsersAction = (payload) => ({ type: SET_SEARCHED_USERS, payload });
