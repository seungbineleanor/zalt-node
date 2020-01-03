import {  GET_FORM_SUBMISSIONS, GET_FORM_SUBMISSIONS_DETAIL, SIGN_OUT, GET_SHARED_FORMS } from '../actions/types';

const INITIAL_STATE = {
  sharedSubmissions: null,
  submissions : null,
  submissionsInfo : {} //dictionary that maps submission id to submission info
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FORM_SUBMISSIONS:
      return { ... state, submissions : action.payload }
    case GET_FORM_SUBMISSIONS_DETAIL:
      const new_dict = { ...state.submissionsInfo, [action.payload._id] : action.payload }
      return { ... state, submissionsInfo : new_dict }
    case SIGN_OUT:
      return { submissions: null, submissionsInfo: {} }
    case GET_SHARED_FORMS:
      return { ... state, sharedSubmissions: action.payload }
    default:
      return state;
  }
}
