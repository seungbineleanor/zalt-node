import { GET_FORM_INFO } from '../actions/types';

//dictionary that maps form_id to form_info
const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FORM_INFO:
      return { ... state, [action.payload._id] : action.payload }
    default:
      return state;
  }
}
