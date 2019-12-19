import { GET_BUSINESSES, SIGN_OUT, GET_BUSINESS_INFO } from '../actions/types';

const INITIAL_STATE = {
  businesses : null,
  businessInfo : {} //dictionary that maps business id to business info
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BUSINESSES:
      return { ... state, businesses: action.payload.businesses }
    case SIGN_OUT:
      return { ... state, businesses: null, businessInfo : {} }
    case GET_BUSINESS_INFO:
      const new_dict = { ...state.businessInfo, [action.payload._id] : action.payload }
      return { ... state, businessInfo: new_dict }
    default:
      return state;
  }
}
