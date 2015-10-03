import { indexBy } from 'lodash';
import {
  USERS_FETCH,
  USERS_UPDATE_PRESENCE,
} from '../action-types';

export default function users(state = {}, action) {
  switch (action.type) {
  case USERS_UPDATE_PRESENCE:
    const user = action.payload;
    return {...state, [user.id]: user};
  case USERS_FETCH:
    const users = indexBy(action.payload, 'id');
    return {...state, ...users};
  default:
    return state;
  }
}
