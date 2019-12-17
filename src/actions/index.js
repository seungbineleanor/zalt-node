import { SIGN_IN, SIGN_OUT, GET_BUSINESSES } from './types';
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


//get state function gives access to all data in the redux store
export const getBusinesses = () => async (dispatch, getState) => {
  const config = {
    headers:{
      "Zalt-Auth": getState().auth.userInfo.auth.content
    },
    params:{
      "latitude":0,
      "longitude":0,
      "limit":10
    }
  }
  const response = await axios.get('https://zalt.app/api/v1/locations/nearby', config);
  //wait for all info to be fetched and processed by reducer
  dispatch({ type: GET_BUSINESSES, payload: response.data })
}

export const signOut = () => {
  return { //return action
    type: SIGN_OUT
  };
};
