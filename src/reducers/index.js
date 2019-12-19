import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import businessesReducer from './businessesReducer';
import storage from 'redux-persist/lib/storage';

//reducers
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  businesses: businessesReducer
});
