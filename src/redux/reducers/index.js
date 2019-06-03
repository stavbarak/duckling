import { combineReducers } from 'redux';
import authReducer from './authReducer';
import snippetsReducer from './snippetsReducer';

export default combineReducers({
  auth: authReducer,
  snippets: snippetsReducer
});