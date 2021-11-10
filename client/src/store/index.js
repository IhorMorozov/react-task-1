import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { usersReducer } from './reducers/usersReducer';

const rootReducer = combineReducers({
  authReducer,
  usersReducer,
});

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
