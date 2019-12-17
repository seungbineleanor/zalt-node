import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import businessesReducer from './businessesReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  businesses: businessesReducer
});
