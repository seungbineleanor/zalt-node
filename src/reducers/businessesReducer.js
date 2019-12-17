import { GET_BUSINESSES } from '../actions/types';

const INITIAL_STATE = {
  businesses : null
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === GET_BUSINESSES){
    return { ... state, businesses: action.payload.businesses }
  }
  return state;
}
