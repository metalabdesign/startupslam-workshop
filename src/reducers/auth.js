import { getToken } from '../utils/auth';
import { AUTH_COMPLETE } from '../action-types';

const initialState = {
  token: getToken(),
};

export default function channels(state = initialState, action) {
  switch (action.type) {
  case AUTH_COMPLETE:
    return {...state, token: action.payload};
  default:
    return state;
  }
}
