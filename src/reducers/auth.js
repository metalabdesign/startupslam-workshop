import { getToken } from '../utils/auth';
import { AUTH_COMPLETE } from '../action-types';

const initialState = {
  token: getToken(),
};

export default function channels(state = initialState, action) {
  if (action.type === AUTH_COMPLETE && action.payload) {
    return {...state, token: action.payload.token};
  }
  return state;
}
