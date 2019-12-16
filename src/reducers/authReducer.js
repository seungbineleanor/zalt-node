import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = { //state is an object
  isSignedIn: false,
  userInfo: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn : true, userInfo: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn : false, userInfo: null };
    default:
      return state;
  }
};
