import { SIGN_IN, SIGN_OUT, GET_BUSINESSES, GET_BUSINESS_INFO, GET_FORM_INFO,
  GET_FORM_SUBMISSIONS, GET_FORM_SUBMISSIONS_DETAIL, UPDATE_SETTINGS, SIGN_UP,
  GET_SHARED_FORMS
 } from './types';
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
    //axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

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

export const getBusinessInfo = (location_id) => async (dispatch, getState) => {
  const config = {
    headers:{
      "Zalt-Auth": getState().auth.userInfo.auth.content
    },
    params:{
      "location_id": location_id
    }
  }
  const response = await axios.get('https://zalt.app/api/v1/locations/info', config);
  //wait for all info to be fetched and processed by reducer
  dispatch({ type: GET_BUSINESS_INFO, payload: response.data })
}

export const getFormInfo = (form_id) => async (dispatch, getState) => {
  const config = {
    headers:{
      "Zalt-Auth": getState().auth.userInfo.auth.content
    },
    params:{
      "form_id": form_id
    }
  }
  const response = await axios.get('https://zalt.app/api/v1/locations/form-info', config);
  dispatch({ type: GET_FORM_INFO, payload: response.data })
}

//get all form subissions to display on history page
export const getFormSubmissions = () => async (dispatch, getState) => {
  const config = {
    headers : {
      "Zalt-Auth": getState().auth.userInfo.auth.content
    }
  }
  const response = await axios.get('https://zalt.app/api/v1/form_submissions', config);
  dispatch({ type: GET_FORM_SUBMISSIONS, payload: response.data })
}

export const getFormSubmissionsDetail = (form_submission_id) => async (dispatch, getState) => {
  const config = {
    headers : {
      "Zalt-Auth": getState().auth.userInfo.auth.content
    },
    params : {
      "form_submission_id" : form_submission_id
    }
  }
  const response = await axios.get('https://zalt.app/api/v1/form_submissions/info', config);
  dispatch({ type: GET_FORM_SUBMISSIONS_DETAIL, payload: response.data })
}

export const updateSettings = (bodyObject) => async (dispatch, getState) => {

  const config = {
    url: 'https://zalt.app/api/v1/auth/update',
    method: 'patch',
    headers : {
      "Zalt-Auth": getState().auth.userInfo.auth.content
    },
    data : bodyObject
  }
  const response = await axios(config);
  dispatch({type: UPDATE_SETTINGS, payload: response.data })
}

export const signUp = (email, password, password_confirmation, first_name, last_name) => async (dispatch, getState) => {

    const body = {
      "email": email,
      "password": password,
      "password_confirmation": password_confirmation,
      "first_name" : first_name,
      "last_name" : last_name,
      "os_type": "Android",
      "os_version": "10.0.1",
      "latitude": 70.0,
      "longitude": 70.0,
      "skip":0,
      "limit": 10,
      "fcm_token": "test"
    }

    const config = {
      url: 'https://zalt.app/api/v1/auth/signup',
      method: 'post',
      data : body
    }
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

    const response = await axios(config);
    dispatch({ type:SIGN_UP, payload: response.data})
};

export const getSharedForms = () => async (dispatch, getState) => {

  const config = {
    headers : {
      "Zalt-Auth": getState().auth.userInfo.auth.content
    }
  }
  const response = await axios.get('http://localhost:3001/shared', config);
  console.log(response);
  dispatch({ type: GET_SHARED_FORMS, payload: response.data })
};
