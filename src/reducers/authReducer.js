import { SIGN_IN, SIGN_OUT, UPDATE_SETTINGS, SIGN_UP } from '../actions/types';

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
    case UPDATE_SETTINGS:
      return { ...state, userInfo: { ...state.userInfo, user: action.payload }};
    case SIGN_UP:
      return { ...state, isSignedIn : true, userInfo: action.payload };
    default:
      return state;
  }
}
