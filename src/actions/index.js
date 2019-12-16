import { SIGN_IN, SIGN_OUT } from './types';
import axios from 'axios';

export const signIn = (email, password) => async (dispatch, getState) => {
    const test = {
    	"email": email,
    	"password": password,
    	"os_type": "Android",
    	"os_version": "10.0.1",
    	"latitude": 70.0,
    	"longitude": 70.0,
    	"limit": 10,
    	"fcm_token": "test"
    }
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

    const response = await axios.post('https://zalt.app/api/v1/auth/login', test);
    dispatch({ type:SIGN_IN, payload: response.data})
};


export const signOut = () => {
  return { //return action
    type: SIGN_OUT
  };
};
